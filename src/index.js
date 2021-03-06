import React from "react";
import { Button, Space } from "antd";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "once login profile will be here face book woun't work"
    };
  }
  componentDidMount() {
    window.addEventListener("$pinc.ui.auth.loggedin", () => {
      // To show user details on success
      console.log('here');
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
      `https://labs.pathfix.com/integrate/command?provider=fbidentity&public_key=F9B50824-EA2D-4209-85FD-EF8F30C6B37F&consented_redirect=${window.location.href}&consented_action=redirect`
    );
  };
  loggedInGoogle = () => {
    window.location.replace(
      `https://labs.pathfix.com/integrate/command?provider=googleidentity&public_key=F9B50824-EA2D-4209-85FD-EF8F30C6B37F&consented_redirect=${window.location.href}&consented_action=redirect`
    );
  };
  loggedInApple = () => {
    window.location.replace(
      `https://labs.pathfix.com/integrate/command?provider=appleidentity&public_key=F9B50824-EA2D-4209-85FD-EF8F30C6B37F&consented_redirect=${window.location.href}&consented_action=redirect`
    );
  };
  render() {
    return (
      <Space>
        <Button onClick={this.loggedIn} type="primary">
          Facebook
        </Button>
        <Button onClick={this.loggedInGoogle} type="primary">
          Google
        </Button>
        <Button onClick={this.loggedInApple} type="primary">
          Apple
        </Button>
        {this.state.profile}
      </Space>
    );
  }
}
ReactDOM.render(<LoginForm />, document.getElementById("container"));
