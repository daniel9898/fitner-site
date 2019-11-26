import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

class SectionOne extends React.Component {

    render() {
        return (
            <div className={'container'}>
                <div className={'Seccion1-container'}>
                    <div className={'row-porque-fiter'}>
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
                    <div className={'row-seccion1 row-style'}>
                        <div className={'Oval-icon'}>
                            <Icon style={{ fontSize: 40 }}>directions_bike</Icon>
                        </div>
                        <div>El mejor equipamiento <p className={'text-style-1'}>+ Cantidad + Calidad</p></div>
                    </div>
                    <div className={'row-seccion1 row-style'}>
                        <div className={'Oval-icon'}>
                            <Icon style={{ fontSize: 40 }}>favorite_border</Icon>
                        </div>
                        <div className={'align-start'}>
                            <div className={'text-style-1'}>Muchas clases</div>
                            <div>con onda</div>
                        </div>
                    </div>
                    <div className={'row-seccion1 row-style'}>
                        <div className={'Oval-icon'}>
                            <Icon style={{ fontSize: 40 }}>sentiment_satisfied_alt</Icon>
                        </div>
                       <div className={'modo-fiter'}>
                           <div>MODO</div>
                           <div className={'text-style-1'}>&nbsp;Fiter</div>
                       </div>
                    </div>
                    <div className={'mas-cerca-de-vos row-style'}>
                        <div className={'Oval-icon'}>
                            <Icon style={{ fontSize: 40 }}>thumb_up_alt</Icon>
                        </div>
                        <div className={'align-start'}>
                            <div>Más cerca de vos</div>
                            <div className={'y-de-tu-presupuesto'}>
                                <div>y de tu</div>
                                <div className={'text-inline'}>&nbsp;presupuesto</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default SectionOne