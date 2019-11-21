import React from 'react';
import GlobalStyle from './style.js';
import Navbar from "./components/navbar/Navbar";
import Principal from "./sections/principal/principal";
import SectionOne from "./sections/sectionOne/sectionOne";
import SectionTwo from "./sections/sectionTwo/sectionTwo";
import SectionThree from "./sections/sectionThree/sectionThree";
import SectionFour from "./sections/sectionFour/sectionFour";
import Map from "./sections/map/map";

class App extends React.Component {

  render() {
    return (
        <>
            <Navbar/>
            <Principal />
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <Map />
            <GlobalStyle />
        </>
    )
  }
}

export default App
