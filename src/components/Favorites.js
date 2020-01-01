import React, { Component } from "react";
import { ArrowBack } from "@material-ui/icons";
import { IconButton, Typography, Container, Box } from "@material-ui/core";
import VideoCard from "./VideoCard";
import PlayerComponent from "./PlayerComponent";
import { getUser } from "../methods";
import { Video } from "../models";

class Favorites extends Component {
  constructor(props) {
    super(props);
    if (!getUser()) window.location.replace("/login");
    let favorites = [];
    getUser().favorites.forEach(favorite => {
      favorites.push(
        new Video(
          favorite.id,
          favorite.title,
          favorite.description,
          favorite.channelName,
          favorite.thumbnailUrl
        )
      );
    });
    this.state = {
      favorites: favorites,
      currentVideo: {},
      showPlayer: false
    };
  }

  showPlayer = video => {
    this.setState({
      currentVideo: video,
      showPlayer: true
    });
  };

  hidePlayer = () => {
    this.setState({
      currentVideo: {},
      showPlayer: false
    });
  };

  handleBack = () => {
    window.location.replace("/home");
  };
  render() {
    return (
      <div>
        <div className="app-bar">
          <Container>
            <div className="flex align-center">
              <IconButton
                color="primary"
                component="button"
                onClick={this.handleBack}
              >
                <ArrowBack />
              </IconButton>
              <Box marginLeft={"10px"}>
                {" "}
                <Typography variant="h6">Your Favorites</Typography>
              </Box>
            </div>
          </Container>
        </div>
        <main>
          <Container maxWidth={"1800px"}>
            <div className={"flex"}>
              {this.state.showPlayer ? (
                <div className={"large-flex"}>
                  <PlayerComponent video={this.state.currentVideo} />
                </div>
              ) : (
                ""
              )}
              <div className={"small-flex"}>
                <div className={"video-list-holder"}>
                  {this.state.favorites.map(video => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onVideoClicked={this.showPlayer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </main>
      </div>
    );
  }
}

export default Favorites;
