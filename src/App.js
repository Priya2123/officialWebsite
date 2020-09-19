import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import MobileNav from "./components/MobileNav";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Project from "./pages/Project";
import Resources from "./pages/Resources";
import Team from "./pages/Team";
import Chatbot from "./components/Chatbot";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import useTheme from "./useTheme";

const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});
const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE",
});
const GlobalStyle = createGlobalStyle`
body{ 
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

const App = () => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Router>
          <div className="App">
            <MobileNav />
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/projects" component={Project} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/team" component={Team} />
            </Switch>
            <Chatbot />
          </div>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
