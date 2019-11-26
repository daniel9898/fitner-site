import React from 'react';
import './style.scss';
import girl from "../../assets/z-low-tokio-fiter-10312-final.png";
import boy from "../../assets/chico-pesas-solo.png";

import styled from "styled-components";

const Image = styled.img`
    max-width:100%;
    max-height:100%;
`;

class Principal extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <div className={'principal-container'}>
                    <div className={'box-1'}>
                        <div className={'Fitness-como-la-gent'}>
                            <p>Fitness</p>
                            <p>como la gente.</p>
                            <p>Para toda la</p>
                            <p>gente.</p>
                        </div>

                        <div className={'row'}>
                            <div className={'Rectangle'}>
                                <p className={'ASOCIATE-YA'}>¡ASOCIATE YA!</p>
                            </div>
                            <div className={'Oval'}>
                                <div className={'Oval-text-container'}>
                                    <div className={'desde'}>desde</div>
                                    <div className={'row'}>
                                        <div className={'moneda'}>$</div>
                                        <div className={'precio'}>790</div>
                                        <div className={'asterisco'}>*</div>
                                    </div>
                                    <div className={'PAG-MES-A-MES'}>PAGÁ MES A MES</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='box-2'>
                        <Image src={girl} className={'Z_LOW_TOKIO_fiter_10312_Final'} alt="z-low-tokio" />
                        <Image src={boy} className={'chico_pesas_solo'} alt="chico-pesas" />
                    </div>
                </div>
            </div>

        )
    }
}



export default Principal;