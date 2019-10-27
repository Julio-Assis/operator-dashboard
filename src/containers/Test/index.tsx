import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Dispatch } from 'redux';
import { IStore } from '../../reducers/IStore';
import { getMachineRecordsRequest } from '../../reducers/modules/machineRecordsModule';
import { getMachinesRequest } from '../../reducers/modules/machinesModule';
import { getErrorCausesRequest } from '../../reducers/modules/errorCausesModule';


interface ITestProps {
    getMachines: (value?: any) => any;
    getMachineRecords: (value?: any) => any;
    getErrorCauses: (value?: any) => any;
    machine: any;
    machineRecords: any;
    error: any;
}

function Test(props: ITestProps) {
    console.log(props.machineRecords);
    console.log(props.machine);
    console.log(props.error);
    return (
        <div>
            <Button onClick={props.getMachines}>
                Get Machines
            </Button>
            <Button onClick={props.getMachineRecords}>
                Get Machine Records
            </Button>
            <Button onClick={props.getErrorCauses}>
                Get Error causes
            </Button>

        </div>
    );
}

const mapStateToProps = (state: IStore) => ({
    machine: state.machine,
    machineRecords: state.machineRecords,
    error: state.errorCause,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getErrorCauses: () => dispatch(getErrorCausesRequest()),
    getMachines: () => dispatch(getMachinesRequest()),
    getMachineRecords: () => dispatch(getMachineRecordsRequest()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Test);
