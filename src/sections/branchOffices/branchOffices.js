import React, {Component} from 'react';
import './style.scss';
import { observer } from "mobx-react";
import BranchOfficesStore from './branchOfficesStore'

@observer
class BranchOffices extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'offices-container'}>
                {

                }
            </div>
        );
    }
}

export default BranchOffices;
