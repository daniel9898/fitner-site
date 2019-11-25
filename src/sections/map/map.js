import React from 'react';
import './style.scss';
import styled from "styled-components";
import image from "../../assets/map.png";
import { inject, observer } from "mobx-react";

const Image = styled.img`
    height: 536px;
    width: 100%;
    object-fit: cover;
`;

@inject("officeStore")
@observer
class Map extends React.Component {

    handleChange = e => {
        this.props.officeStore.filterOffice(this.officeInput.value);
    };

    render() {
        return (
            <>
                <div className={'Rectangle-10'}>
                    <div className={'Busc-tu-sede-ms-ce'}>
                        Buscá tu sede <br/>
                        más cercana
                    </div>
                        <input
                            ref={input => this.officeInput= input}
                            onChange={this.handleChange}
                            className={'Rectangle-15'}
                            placeholder={'Buscar'}
                            type="text"
                        />
                    <p className={'Ver-todas-las-sedes'}>Ver todas las sedes</p>
                </div>
                <Image src={image} alt="Mapa" />
            </>
        )
    }
}

export default Map;
