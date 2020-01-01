import React, { Component } from "react";
import { Typography, Button, Container, Icon } from "@material-ui/core";
import { CloudOff } from "@material-ui/icons";

class ErrorBanner extends Component {
  render() {
    return (
      <Container>
        <div className={"error-alert"}>
          <Icon style={{ marginRight: "14px" }}>
            <CloudOff />
          </Icon>
          <Typography className={"grow"}>
            Oops, something went wrong.
          </Typography>
          <Button variant="outlined" onClick={this.props.onRetry}>
            Retry
          </Button>
        </div>
      </Container>
    );
  }
}

export default ErrorBanner;
