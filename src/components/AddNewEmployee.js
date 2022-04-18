import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddNewEmployee.css'
import add_user from '../images/Add_user.png';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createEmployees} from '../graphql/mutations' ;
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
function AddNewEmployee(){
    const [EmployeesList, setEmployeesList] = useState([]);
    const [formState ,setFormState] = useState({
        firstName:'',
        lastName:'',
        address:'',
        email:'',
        mobile: '',
        gender:'',
        department: '',
        position: ''
        });
const addEmployee = async () => {
    try {
        if (!formState.firstName || !formState.lastName || !formState.email || !formState.mobile
             || !formState.department || !formState.position){
            alert("empty fields");
        }
        const Employee = { ...formState }
        setEmployeesList([...EmployeesList, Employee]);
        setFormState({ firstName: '', lastName: '', mobile:'' , email: '', gender:'', department:'', position:'', address:''});
        await API.graphql(graphqlOperation(createEmployees, { input: Employee }))}
        catch (err) {
        alert('error creating user:', err);
    }
}
const ClearInput = ()=>{
    setFormState({ firstName: '', lastName: '', mobile:'' , email: '', gender:'', department:'', position:'', address:''});
}
return(
    <div className="app_input">
        <div className="input_fields">
                <input
                    onChange={e => setFormState({...formState,firstName: e.target.value})}
                    value={formState.firstName}
                    placeholder="First Name"
                />
                <input
                    onChange={e => setFormState({...formState,lastName :e.target.value})}
                    value={formState.lastName}
                    placeholder="Last Name"
                />
                <input
                    onChange={e => setFormState({...formState,mobile :e.target.value})}
                    value={formState.mobile}
                    placeholder="mobile"
                />
                <input
                    onChange={e => setFormState({...formState,email :e.target.value})}
                    value={formState.email}
                    placeholder="email"
                />
                <input
                    onChange={e => setFormState({...formState,address :e.target.value})}
                    value={formState.address}
                    placeholder="address"
                />
                <input
                    onChange={e => setFormState({...formState,department:e.target.value})}
                    value={formState.department}
                    placeholder="department"
                />
                 <input
                   onChange={e => setFormState({...formState,position :e.target.value})}
                    value={formState.position}
                    placeholder="position"
                />
                <select value={formState.gender} onChange={e => setFormState({...formState, gender: e.target.value})}>
                    <option value= {null} > Gender: </option>
                    <option value= "male"> Male </option>
                    <option value= "female"> Female </option>
                </select>
                <button  className='btn-success' onClick={addEmployee}>Create Employee</button>
                <button className='btn-danger' onClick={ClearInput}>Clear </button>
                </div>
                <img id='add_user_img' src={add_user} alt='add user'/>
                </div>
);
}
export default AddNewEmployee;