import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import PostDetails from "./components/PostDetails/PostDetails";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e2d0bc",
    },
    secondary: {
      main: "#cfcfcf",
    },
    neutral: {
      main: "#c9a782",
    },
  },
});

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxwidth="xl">
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Navigate to="/posts" />} />
            <Route path="/posts" exact element={<Home />} />
            <Route path="/posts/search" exact element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route
              path="/auth"
              exact
              element={!user ? <Auth /> : <Navigate to="/posts" />}
            />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
