import React, {
  ReactElement
} from "react";

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import {
  ThemeProvider
} from "@rmwc/theme";

import {
  TopAppBar,
  TopAppBarFixedAdjust,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle
} from "@rmwc/top-app-bar";

import "@rmwc/top-app-bar/styles";

export default function ShellMain() : ReactElement
{
  const renderHome  = ()  : ReactElement =>
  {
    return (
      <p>Hello, React, Parcel, and Material Design!</p>
    );
  };

  return (
    <div
      className = "shell"
    >
      <ThemeProvider
        options = {{
          "primary"   : "#444",
          "secondary" : "#333"
        }}

        style = {{
          "flex" : 1
        }}
      >
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection>
              <TopAppBarTitle>MHW Builds</TopAppBarTitle>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
        <BrowserRouter>
          <Switch>
            <Route
              exact   = {true}
              path    = "/"
              render  = {renderHome}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
