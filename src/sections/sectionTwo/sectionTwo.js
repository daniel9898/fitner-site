import React from 'react';
import './style.scss';
import Icon from '@material-ui/core/Icon';

class SectionTwo extends React.Component {

    render() {
        return (
            <div className={'Seccion2-container'}>

                <div className={'title-container-s2'}>
                    <div className={'Conoc-nuestras-clas'}>
                        <p>Conocé nuestras clases</p>
                    </div>
                    <div className={'Ver-todas-las-clases'}>
                        <p>Ver todas las clases</p>
                        <hr className={'line'}/>
                    </div>
                </div>

                <div className={'row-container-s2'}>
                    <div className={'row1-s2'}>
                        <div className={'Rectangle-5-Copy-5'}>
                            <p className={'text-style-s2'}>Zumba</p>
                        </div>
                    </div>
                    <div className={'row2-s2'}>
                        <div className={'Rectangle-5-Copy-6'}>
                            <p className={'text-style-s2'}>Entrenamiento Funcional</p>
                        </div>
                    </div>
                    <div className={'row3-s2'}>
                        <div className={'Rectangle-5-Copy-7'}>
                            <p className={'text-style-s2'}>Yoga</p>
                        </div>
                    </div>
                    <div className={'row4-s2'}>
                        <div className={'Rectangle-5-Copy-8'}>
                            <p className={'text-style-s2'}>Localizada</p>
                        </div>
                    </div>
                    <div className={'row5-s2'}>
                        <div className={'Rectangle-5-Copy-9'}>
                            <p className={'text-style-s2'}>Talleres de Abs</p>
                            <div className={'icon-arrow'}>
                                <Icon style={{ fontSize: 40 }}>keyboard_arrow_right</Icon>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}



export default SectionTwo