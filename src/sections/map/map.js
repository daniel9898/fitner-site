import React from 'react';
import './style.scss';
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
            <>
                <div className={'Rectangle-10'}>
                    <div className={'Busc-tu-sede-ms-ce'}>
                        Buscá tu sede <br/>
                        más cercana
                    </div>
                    <div>
                        <input
                            className={'Rectangle-15'}
                            placeholder={'Buscar'}
                            type="text"/>
                    </div>
                    <p className={'Ver-todas-las-sedes'}>Ver todas las sedes</p>
                </div>
                <Image src={image} alt="Mapa" />
            </>
        )
    }
}

export default Map;
