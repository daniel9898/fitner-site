import React from 'react';
import GlobalStyle from './style.js';
import Navbar from "./components/navbar/Navbar";
import Principal from "./sections/principal/principal";
import SectionOne from "./sections/sectionOne/sectionOne";

class App extends React.Component {

  render() {
    return (
        <>
            <Navbar/>
            <Principal />
            <SectionOne />
            <GlobalStyle />
        </>
    )
  }
}

export default App
