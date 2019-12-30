import React, { Component } from "react";
import { Card, Typography } from "@material-ui/core";

class VideoCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <div>
            <Typography variant={"h6"}>Video Title</Typography>
            <Typography variant={"subtitle1"}>Description</Typography>
          </div>
          <div>
            <img />
          </div>
        </Card>
      </div>
    );
  }
}

export default VideoCard;
