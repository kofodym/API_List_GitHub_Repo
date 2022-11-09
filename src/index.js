import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Fallback from "./components/FallBack";
import {ReposProvider} from './components/ReposContext'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // log the error
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Fallback />
        </>
      );
    }

    return this.props.children;
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <ReposProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReposProvider>
  </ErrorBoundary>,

  document.getElementById("root")
);

reportWebVitals();
