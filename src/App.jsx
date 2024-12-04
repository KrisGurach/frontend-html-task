import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

library.add(fas);

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route 
            path="/*"
            element={<Sidebar color='light' />}
          />
        </Routes>
      </Router>
    );
  }
}