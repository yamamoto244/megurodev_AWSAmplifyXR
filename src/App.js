import React from "react";
import logo from "./logo.svg";
import Amplify, { XR } from "aws-amplify";
import awsmobile from "./aws-exports";
import "./App.css";
import scene1Config from "./sumerian_exports.json";
import { SumerianScene, withAuthenticator } from "aws-amplify-react";
import AWS from "aws-sdk";

new AWS.Polly();

// new Tone.context.resume();

// Amplify.configure(awsmobile);

Amplify.configure({
  ...awsmobile,
  XR: {
    // XR category configuration
    region: "ap-northeast-1", // Sumerian region
    scenes: {
      megurodev: {
        // Friendly scene name
        sceneConfig: scene1Config // Scene configuration from Sumerian publish
      }
    }
  }
});

// async loadAndStartScene() {
//   await XR.loadScene("megurodev", "sumerian-scene-dom-id");
//   XR.start("megurodev");
// }

function App() {
  return (
    <div className="App">
      <SumerianScene sceneName="megurodev" />
      {/* <div id="sumerian-scene-dom-id"></div> */}
    </div>
  );
}

// export default App;
export default withAuthenticator(App, { includeGreetings: true });
