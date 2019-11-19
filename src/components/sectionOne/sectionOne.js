import React from 'react';
import './style.scss';
//import chica from "../../assets/z-low-tokio-fiter-10312-final.png";
//import chico from "../../assets/chico-pesas-solo.png";

import styled from "styled-components";

const Image = styled.img`
  height: auto;
  margin: auto 0;
`;

class SectionOne extends React.Component {

    render() {
        return (
            <div className={'Seccion1-container'}>
                <div className={'row1'}>
                    <div className={'Por-qu-fiter'}>
                        <div className={'text-style-1'}>
                            ¿Por qué fiter?
                        </div>
                    </div>

                    <div className={'Rectangle2 align'}>
                        <div className={'CONOCENOS align'}>
                            CULTURA FITER
                        </div>
                    </div>
                </div>

                <div className={'row2'}></div>
                <div className={'row3'}></div>
                <div className={'row4'}></div>
                <div className={'row5'}></div>
            </div>
        )
    }
}



export default SectionOne