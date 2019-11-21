import React from 'react';
import styled from "styled-components";
import image from "../../assets/map.png";

const Image = styled.img`
    height: 536px;
    width: 100%;
    object-fit: cover;
`;

class Map extends React.Component {
    render() {
        return (
            <Image src={image} alt="Mapa" />
            div
        )
    }
}

export default Map;
