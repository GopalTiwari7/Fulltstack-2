import React, {useState} from 'react'
import {Table, Button} from 'react-bootstrap';
import './../../node_modules/bootstrap/dist/css/bootstrap.css';
const inputStyle = {
    marginTop: " 20px",
    marginLeft: "10px",
    marginRight : "40px",
    marginBottom : " 20px",
    width: "20%",
    textAlign: "center"
}
let index = 0;


export default function DynamicTable() {

    const [user, setUser] = useState({ username:"", password:"", email:""});
    const [arr, setArr] = useState([{ username:"", password:"", email:""}]);
    const addUser = (num,index) => {
        if(index > 0){
        return(
            <tr>
                <td>{index}</td>
                <td>{num.username}</td>
                <td>{num.password}</td>
                <td>{num.email}</td>
            </tr>

        );
        }
    
    
    }
    const addArr = () =>{
        setUser({username:"", password:"", email:""})
        setArr( () => {
            return [ ...arr, user];
        })

    }
    const addUsername = (e) => {
        setUser({...user, username:e.target.value})
    
    }
    
    const addPassword = (e) => {
        setUser({...user, password:e.target.value})
    
    
    }
    
    const addEmail = (e) => {
        setUser({... user, email:e.target.value})
    
        
    }
    
    return (
        <div style = {{border:"solid 1px blue", width:"90%", margin:"10px auto"}}>
            <h1 style = {{textAlign:"center", color:"Blue"}}> React Dynamic Table</h1>
            <form onSubmit = {(e) => {e.preventDefault()}} >
            <label for = "username">Username:</label>
            <input style = {inputStyle} type  = "text" name = {user.username} value = {user.username} onChange = {addUsername}/>
            <label for = "password">Password:</label>
            <input style = {inputStyle} type = "password" name = {user.password} value = {user.password}  onChange = {addPassword}/>
            <label for = "email">Email:</label>
            <input style = {inputStyle} type = "email" name= {user.email} value = {user.email}  onChange = {addEmail}/>
            <Button variant = "primary" type= "submit" onClick = {addArr}>
                Add User
            </Button>
            </form>

            <Table striped bordered hover style = {{width:"80%", margin:"10px auto"}}>
            <thead class="table table-dark">
                <th>SNO.</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                
            </thead>
            <tbody>
            {arr.map(addUser)}
                
            </tbody>
            </Table>
            
        </div>
    )
}