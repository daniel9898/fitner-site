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
            <div className={'Seccion4-container'}>
                <div>
                    <p className={'Empez-a-Fitear'}>¡Empezá a Fitear!</p>
                    <p className={'Es-simple-Ven-todo'}>Es simple. Vení todos los días, hacé todo lo que quieras.</p>
                </div>
                <div className={'columns-container'}>

                    <div className={'plan-club-container'}>

                        <p className={'PLAN-CLUB'}>PLAN CLUB</p>

                        <div className={'row-s4'}>
                            <div className={'precio-container-s4'}>
                                <div className={'moneda-s4'}>$</div>
                                <div className={'precio-s4'}>790</div>
                                <div className={'asterisco-s4'}>*</div>
                            </div>
                            <p className={'PAG-MES-A-MES-s4'}>PAGÁ MES A MES</p>
                        </div>
                        <div className={'ACCED-AL-CLUB-QUE-P'}>
                            <p>ACCEDÉ AL CLUB</p>
                            <p>QUE PREFIERAS</p>
                        </div>
                        <div className={'text-Sector'}>
                            <p>Sector cardio</p>
                            <p>Sector musculación</p>
                            <p>Sector peso libre</p>
                            <p>Sector funcional</p>
                            <p>Talleres</p>
                            <p>Clases con onda</p>
                            <p>Lockers gratuitos</p>
                            <p>Vestuarios con duchas</p>
                            <p>Planes de entrenamiento por objetivos</p>
                        </div>
                        <div className={'asociate-container-s4'}>
                            <p className={'asociate-s4'}>¡ASOCIATE YA!</p>
                        </div>

                    </div>
                    <div className={'plan-red-container'}>

                    </div>




                </div>

            </div>
        )
    }
}



export default SectionThree