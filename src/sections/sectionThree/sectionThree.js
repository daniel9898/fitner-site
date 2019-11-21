import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';
import img from "../../assets/bitmap.png";
import styled from "styled-components";

const Image = styled.img`
    width:100%;
    height:100%;
`;

class SectionThree extends React.Component {

    render() {
        return (
            <>
                <div className={'Rectangle-8'}>
                    <div className={'Conoc-Fiter-por-den'}>
                        <Icon style={{ fontSize: 40, color: '#ffffff' }}>keyboard_arrow_right</Icon> Conocé Fiter por dentro
                    </div>
                    <div>
                        <p className={'Salas-de-Musculacin '}>Salas de Musculación</p>
                    </div>
                    <div>
                        <p className={'Equipado-con-la-mayo'}>
                            Equipado con la mayor variedad y calidad, en musculación podés entrenar tu fuerza cada vez que quieras con nuestras más de 30 máquinas y 20 estaciones de peso libre. Buscá nuestros planes de entrenamiento para que trabajes en tus objetivos, desafiándote con sus niveles de intensidad y dificultad.
                        </p>
                    </div>
                </div>
                <Image src={img} className={'Bitmap'} alt="" />
            </>
        )
    }
}



export default SectionThree