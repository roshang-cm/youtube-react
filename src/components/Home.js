import React, { Component } from "react";
import {
  Typography,
  Button,
  Container,
  CircularProgress,
  Icon
} from "@material-ui/core";
import VideoCard from "./VideoCard";
import { getSearchResults, getUser } from "../methods";
import PlayerComponent from "./PlayerComponent";
import { CloudOff } from "@material-ui/icons";
import ErrorBanner from "./ErrorBanner";

class HomePage extends Component {
  constructor(props) {
    super(props);
    if (!getUser()) window.location.replace("/login");
    this.state = {
      videos: [],
      searchQuery: "",
      loading: false,
      showPlayer: false,
      showErrorBanner: false,
      searchedText: "",
      currentVideo: {}
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

  handleFavorites = () => {
    window.location.replace("/favorites");
  };
  handleLogOut = () => {
    localStorage.clear();
    window.location.replace("/");
  };
  handleSearchClick = () => {
    this.setState({
      loading: true,
      showPlayer: false,
      showErrorBanner: false
    });
    getSearchResults(
      this.state.searchQuery,
      videos => {
        this.setState({
          videos: videos,
          loading: false,
          searchedText: this.state.searchQuery
        });
      },
      error => {
        this.setState({
          showErrorBanner: true,
          loading: false,
          videos: [],
          searchedText: ""
        });
      }
    );
  };
  render() {
    return (
      <div className={"grow"}>
        <div className="app-bar">
          <Container>
            <div className="flex align-center">
              <Typography variant="h6">YouTube Player</Typography>
              <div className={"grow"} />
              <input
                type="text"
                placeholder="Search for videos"
                onChange={event =>
                  this.setState({ searchQuery: event.target.value })
                }
                onKeyUp={event => {
                  if (event.key === "Enter") this.handleSearchClick();
                }}
              />
              <Button variant="contained" onClick={this.handleSearchClick}>
                <i class="material-icons">search</i>
              </Button>
              <div className={"grow"} />
              <Button
                onClick={this.handleFavorites}
                variant="text"
                color="primary"
                style={{ "margin-right": "24px" }}
              >
                Your Favorites
              </Button>

              <Button variant="outlined" onClick={this.handleLogOut}>
                Log Out
              </Button>
            </div>
          </Container>
        </div>
        <main>
          <Container maxWidth={"1800px"}>
            {this.state.showErrorBanner ? (
              <ErrorBanner onRetry={this.handleSearchClick} />
            ) : (
              ""
            )}{" "}
            <div className={"flex"}>
              {this.state.showPlayer ? (
                <div className={"large-flex"}>
                  <PlayerComponent video={this.state.currentVideo} />
                </div>
              ) : (
                ""
              )}
              <div className={"small-flex"}>
                <CircularProgress
                  style={{
                    margin: "0 auto",
                    display: this.state.loading ? "block" : "none"
                  }}
                ></CircularProgress>
                <Typography
                  variant="h6"
                  style={
                    !this.state.searchQuery || this.state.videos.length === 0
                      ? { display: "none" }
                      : {}
                  }
                >
                  Search results for '{this.state.searchedText}'
                </Typography>
                <div className={"video-list-holder"}>
                  {this.state.videos.map(video => (
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

export default HomePage;
