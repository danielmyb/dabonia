import React from "react";
import Layout from "../layout/Layout";
import { BrowserRouter } from "react-router-dom";

interface AppProps {
  basename: string;
}

function App({ basename }: AppProps) {
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
