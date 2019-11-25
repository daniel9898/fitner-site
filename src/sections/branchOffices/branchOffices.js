import React, {Component} from 'react';
import './style.scss';
import { inject, observer } from "mobx-react";

@inject("officeStore")
@observer
class BranchOffices extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'offices-container'}>
                {
                    this.props.officeStore.officesAux.map(off => (
                                <div className={'office'} key={off.name}>
                                    <p className={'name-office item'}>{off.name.toUpperCase()}</p>
                                    <p className={'address-office item'}>{off.address}</p>
                                    <p className={'schedule item'}>{off.weekSchedule}</p>
                                    <p className={'schedule item'}>{off.weekendSchedule}</p>
                                    <p className={'email email-phone-color item'}>{off.email}</p>
                                    <p className={'email-phone-color item'}>{off.phone}</p>
                                </div>
                            )
                    )
                }
            </div>

        );
    }
}

export default BranchOffices;
