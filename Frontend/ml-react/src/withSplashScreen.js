import React, { Component } from "react";
import Container from "@mui/material/Container";

function LoadingMessage() {
  return (
    <Container className="container" maxWidth="sm">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Disease System
        </a>
        <p className="gh">Made with ❤ by Meet Patel</p>
      </header>
    </Container>
  );
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        //await auth0Client.loadSession();
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 1800);
      } catch (err) {
        // console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;
