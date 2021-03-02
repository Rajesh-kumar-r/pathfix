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
    //load the helper script
    const script = document.createElement("script");
    script.id = "pinc.helper";
    script.src = "https://labs.pathfix.com/helper.js";
    script.setAttribute("modules", "pinc.auth.min");
    script.setAttribute(
      "data-client-id",
      "3685AD5D-C8A0-4734-837F-822341D2D03C"
    );
    script.setAttribute(
      "data-client-providers",
      "msazuread,discord,fb,github,google,linkedin,ms,spotify,twitter"
    );
    document.body.appendChild(script);
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
