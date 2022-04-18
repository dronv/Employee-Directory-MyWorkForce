import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listEmployees } from '../graphql/queries';
import awsExports from "../aws-exports";
import EmployeeProfileTable from './EmpoyeeProfileTable.js';
import './CurrentEmployees.css';
Amplify.configure(awsExports);

export default function  CurrentEmployees () {
    const [EmployeesList, setEmployeesList] = useState([]);
    useEffect(() => {
      fetchEmployees()
  })

  const fetchEmployees = async () => {
    try {
      const EmployeesData = await API.graphql(graphqlOperation(listEmployees))
      const Employees = EmployeesData.data.listEmployees.items
      setEmployeesList(Employees)
    } catch (err) {
      console.log('error fetching Employees',err) }
      }
      return(
        <div>
      <div className='employees_list'>
            < EmployeeProfileTable EmployeesList= {EmployeesList}/>
            </div>
            </div>
    );
    }