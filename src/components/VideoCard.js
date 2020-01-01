import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";
import "../styles/style.css";
import { getSearchResults } from "../methods";

class VideoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.isItemInFavorites()
    };
  }
  componentDidMount() {
    getSearchResults("hello", response => {
      console.log(response);
    });
  }
  isItemInFavorites() {
    let isFavorite = false;
    let videoId = this.props.video.id;
    let userObj = localStorage.getItem("user");
    if (userObj) {
      userObj = JSON.parse(userObj);
      if (userObj.favorites) {
        userObj.favorites.forEach(video => {
          if (video.id === videoId) {
            isFavorite = true;
          }
        });
      }
    }
    return isFavorite;
  }

  renderFavorite() {
    if (this.state.isFavorite) {
      return (
        <i
          className={"flex-end material-icons is-favorite icon-button"}
          onClick={this.removeFromFavorites}
        >
          favorite
        </i>
      );
    } else {
      return (
        <i
          className={"flex-end material-icons icon-button"}
          onClick={this.addToFavorites}
        >
          favorite_border
        </i>
      );
    }
  }

  addToFavorites = () => {
    let previousStorage = localStorage.getItem("user");
    previousStorage = JSON.parse(previousStorage);
    previousStorage.favorites.push(this.props.video);
    previousStorage = JSON.stringify(previousStorage);
    localStorage.setItem("user", previousStorage);
    this.setState({
      isFavorite: true
    });
  };

  removeFromFavorites = () => {
    let previousStorage = localStorage.getItem("user");
    previousStorage = JSON.parse(previousStorage);
    let newFavorites = [];
    previousStorage.favorites.forEach(favorite => {
      if (!(this.props.video.id === favorite.id)) {
        newFavorites.push(favorite);
      }
    });
    previousStorage.favorites = newFavorites;
    previousStorage = JSON.stringify(previousStorage);
    localStorage.setItem("user", previousStorage);
    this.setState({
      isFavorite: false
    });
  };
  render() {
    return (
      <div>
        <Card variant="outlined" className={"card-container"}>
          <div
            className={"card-video-thumbnail"}
            onClick={() => this.props.onVideoClicked(this.props.video)}
          >
            <img width={200} alt="test" src={this.props.video.thumbnailUrl} />
          </div>
          <div className={"card-video-details"}>
            <Typography
              variant={"h6"}
              onClick={() => this.props.onVideoClicked(this.props.video)}
            >
              {this.props.video.title}
            </Typography>
            <Typography
              variant={"subtitle1"}
              onClick={() => this.props.onVideoClicked(this.props.video)}
            >
              {this.props.video.truncatedDescription()}
            </Typography>
          </div>
          <div className={"flex-end"}>{this.renderFavorite()}</div>
        </Card>
      </div>
    );
  }
}

export default VideoCard;
