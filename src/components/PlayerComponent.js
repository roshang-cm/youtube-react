import React, { Component } from "react";
import { Backdrop, Container, Modal, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";

class PlayerComponent extends Component {
  render() {
    console.log(this.props.video);
    return (
      <div>
        <div className={"column"}>
          <div className="player-wrapper">
            <ReactPlayer
              controls
              playing
              width="100%"
              height="100%"
              className={"react-player"}
              url={"https://youtu.be/" + this.props.video.id}
            />
          </div>
          <Typography variant={"h4"} style={{ marginTop: "48px" }}>
            {this.props.video.title}
          </Typography>
          <Typography variant={"subtitle1"} style={{ marginTop: "24px" }}>
            {this.props.video.description}
          </Typography>
        </div>
      </div>
    );
  }
}

export default PlayerComponent;
