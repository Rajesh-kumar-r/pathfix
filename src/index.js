import React from "react";
import { Button, Space } from "antd";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "once login profile will be here"
    };
  }
  componentDidMount() {
    window.addEventListener("$pinc.ui.auth.loggedin", () => {
      // To show user details on success
      this.setState({ profile: JSON.stringify(window.$pinc.auth.profile) });
      console.log("ready", window.$pinc.auth.profile);
    });
    window.addEventListener("$pinc.oauth.notconsented", () => {
      // To show error message in login failed
      console.log("error occurred");
    });
  }
  loggedIn = () => {
    window.location.replace(
      `https://labs.pathfix.com/integrate/command?provider=fbidentity&public_key=3685AD5D-C8A0-4734-837F-822341D2D03C&consented_redirect=${window.location.href}&consented_action=redirect`
    );
  };
  loggedInGoogle = () => {
    window.location.replace(
      `https://labs.pathfix.com/integrate/command?provider=googleidentity&public_key=B318DA15-B885-4622-9380-42F19B2C7E68&consented_redirect=${window.location.href}&consented_action=redirect`
    );
  };
  render() {
    return (
      <Space>
        <Button onClick={this.loggedIn} type="primary">
          Login
        </Button>
        <Button onClick={this.loggedInGoogle} type="primary">
          google
        </Button>
        {this.state.profile}
      </Space>
    );
  }
}
ReactDOM.render(<LoginForm />, document.getElementById("container"));
