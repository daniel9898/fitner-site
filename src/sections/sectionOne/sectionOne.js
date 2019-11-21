import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

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
                            ¿Por qué fit<p className={'text-inline'}>er</p>?
                        </div>
                    </div>

                    <div className={'Rectangle2'}>
                        <div className={'CONOCENOS'}>
                            CULTURA FITER
                        </div>
                    </div>
                </div>

                <div className={'row2 row-style'}>
                    <div className={'Oval-icon'}>
                        <Icon style={{ fontSize: 40 }}>directions_bike</Icon>
                    </div>
                    <div>El mejor equipamiento <p className={'text-style-1'}>+ Cantidad + Calidad</p></div>
                </div>
                <div className={'row3 row-style'}>
                    <div className={'Oval-icon'}>
                        <Icon style={{ fontSize: 40 }}>favorite_border</Icon>
                    </div>
                    <div><p className={'text-style-1'}>Muchas clases</p> con onda</div>
                </div>
                <div className={'row4 row-style'}>
                    <div className={'Oval-icon'}>
                        <Icon style={{ fontSize: 40 }}>sentiment_satisfied_alt</Icon>
                    </div>
                   MODO <p className={'text-style-1'}>&nbsp;Fiter</p>
                </div>
                <div className={'row5 row-style'}>
                    <div className={'Oval-icon'}>
                        <Icon style={{ fontSize: 40 }}>thumb_up_alt</Icon>
                    </div>
                    <p>Más cerca de vos</p><div>y de tu <div className={'text-inline'}>presupuesto</div></div>
                </div>
            </div>
        )
    }
}



export default SectionOne