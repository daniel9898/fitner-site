import React from 'react';
import GlobalStyle from './styles/Global';
import Navbar from "./components/navbar/Navbar";
import Principal from "./components/principal/principal";
import SectionOne from "./components/sectionOne/sectionOne";

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
