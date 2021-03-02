import React from "react";
import { Button } from "antd";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
class LoginForm extends React.Component {
  componentDidMount() {
    window.addEventListener("$pinc.ui.auth.loggedin", () => {
      // To show user details on success
      console.log("ready", window.$pinc.auth.profile);
    });
    window.addEventListener("$pinc.oauth.notconsented", () => {
      // To show error message in login failed
      console.log("error occurred");
    });
  }
  loggedIn = () => {
    window.location.replace(
      `https://labs.pathfix.com/integrate/command?provider=fbidentity&public_key=3685AD5D-C8A0-4734-837F-822341D2D03C&consented_redirect=${window.location.href}?isSocial=true&consented_action=redirect`
    );
  };
  render() {
    return (
      <Button block={true} onClick={this.loggedIn} type="primary">
        Login
      </Button>
    );
  }
}
ReactDOM.render(<LoginForm />, document.getElementById("container"));

