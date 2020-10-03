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

import {
  LoadoutsView as LoadoutsView
} from "../../../views/loadouts";

import "@rmwc/top-app-bar/styles";

export default function ShellMain() : ReactElement
{
  const renderHome    = ()  => <p>Hello, Hunters!</p>;
  const renderLoadouts  = ()  => <LoadoutsView />;

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
              <TopAppBarTitle>MHW Loadouts</TopAppBarTitle>
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
            <Route
              exact   = {true}
              path    = "/loadouts"
              render  = {renderLoadouts}
            />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
