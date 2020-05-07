if (__DEV__) {
  import("../ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}
import React from "react";
import Routes from "./routes";
import "./config/StatusBarConfig";

const App = () => <Routes />;

export default App;
