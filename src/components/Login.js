import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import "../styles/style.css";
import { Typography, TextField, Grid, Box } from "@material-ui/core";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
      validation: {
        name: "",
        email: "",
        contact: "",
        preferredLanguages: ""
      }
    };
  }

  changeHandler = event => {
    let fieldName = event.nativeEvent.target.name;
    let fieldValue = event.nativeEvent.target.value;
    this.setState(state => {
      state.inputs[fieldName] = fieldValue;
    });
  };

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  validateForm = () => {
    const { inputs } = this.state;
    let isFormValid = true;
    let errors = {};
    if (!inputs.name) {
      errors.name = "Name is required";
      isFormValid = false;
    }
    if (!inputs.email) {
      errors.email = "Email address is required";
      isFormValid = false;
    } else if (this.validateEmail(inputs.email) === false) {
      errors.email = "Please provide a valid email address";
      isFormValid = false;
    }
    if (!inputs.contact) {
      errors.contact = "Contact no. is required";
      isFormValid = false;
    }
    this.setState({
      validation: {
        name: !!errors.name ? errors.name : "",
        email: !!errors.email ? errors.email : "",
        contact: !!errors.contact ? errors.contact : ""
      }
    });
    return isFormValid;
  };
  handleSubmit = () => {
    const { inputs } = this.state;
    if (this.validateForm()) {
      let user = {};
      user.name = inputs.name;
      user.email = inputs.email;
      user.contact = inputs.contact;
      user.favorites = [];
      localStorage.setItem("user", JSON.stringify(user));
      window.location.replace("/home");
    }
  };

  render() {
    return (
      <Container>
        <Box mt={6} mb={4}>
          <Typography variant="h1" align="center" color="secondary">
            Welcome
          </Typography>
          <Typography variant="h3" align="center" color="secondary">
            Let's get you started
          </Typography>
        </Box>
        <Grid container direction="column" alignItems="center" xs={12}>
          <Box my={2} className={"login-form-item"}>
            <TextField
              name="name"
              required
              label="Name"
              fullWidth
              onChange={this.changeHandler}
              helperText={this.state.validation.name}
              error={this.state.validation.name}
            />
          </Box>
          <Box my={2} className={"login-form-item"}>
            <TextField
              name="email"
              required
              label="Email Address"
              fullWidth
              onChange={this.changeHandler}
              error={this.state.validation.email}
              helperText={this.state.validation.email}
            />
          </Box>
          <Box my={2} className={"login-form-item"}>
            <TextField
              name="contact"
              required
              label="Contact No."
              fullWidth
              onChange={this.changeHandler}
              error={this.state.validation.contact}
              helperText={this.state.validation.contact}
            />
          </Box>
          <Box my={2} className={"login-form-item"}>
            <TextField
              name="preferredLanguages"
              label="Preferred Languages"
              fullWidth
              onChange={this.changeHandler}
            />
          </Box>
          <Box my={2}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </Container>
    );
  }
}

export default LoginPage;
