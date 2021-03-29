import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import "../i18n";

interface AppProps {
  basename: string;
}

function App({ basename }: AppProps) {
  return (
    <div className="App">
      <React.Suspense fallback={<div />}>
        <BrowserRouter basename={basename}>
          <Layout />
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
