import React from 'react';
import './EmployeeProfileTable.css';
import Table from 'react-bootstrap/Table'
function EmployeeProfileTable ({EmployeesList}){
    return(
        <div>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Department</th>
                <th>Position</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody> 
                {EmployeesList.map((EmployeesList) => (
                    <tr>
                <th>{EmployeesList.firstName}</th>
                <th>{EmployeesList.lastName}</th>
                <th>{EmployeesList.department}</th>
                <th>{EmployeesList.position}</th>
                <th>{EmployeesList.email}</th>
                </tr>
                 ))}
            </tbody>
            </Table>
            </div>
    );
}
export default EmployeeProfileTable;