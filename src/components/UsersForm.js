import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const UsersForm = ({getUser,userSelected,setUserSelected}) => {

    
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [birthday,setBirthday]=useState("");

    

    useEffect(()=>{

        if(userSelected){

            setFirstName(userSelected.first_name);
            setLastName(userSelected.last_name);
            setEmail(userSelected.email);
            setPassword(userSelected.password);
            setBirthday(userSelected.birthday);
        }

    },[userSelected]);

    console.log(userSelected);

    const submit=(e)=>{

        e.preventDefault();

        const user={

            email:email,
            password:password,
            first_name:firstName,
            last_name:lastName,
            birthday:birthday,
        }

        if (userSelected){

            console.log("Se actualiza");
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
                 .then(() => {

                    getUser();
                    setUserSelected(null);
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    setBirthday("");

                 });
        }else{

            axios.post('https://users-crud1.herokuapp.com/users/',user)
            .then(() => {
               getUser();
               setFirstName("");
               setLastName("");
               setEmail("");
               setPassword("");
               setBirthday("");
            })
            .catch((error) => console.log(error.response));

        }
        
    }

    return (
        <div className='formContainer'>
            <p>New User</p>
            <form onSubmit={submit}>

                <div className="input-CompletedName">
                    <i className="fas fa-user"></i>
                    &nbsp;
                     
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                </div>

                <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    &nbsp;
                    <input
                        type="text"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    &nbsp;
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <div className="input-container">
                    <i className="fas fa-birthday-cake"></i>
                    &nbsp;
                    <input
                        type="date"
                        placeholder="Birthday"
                        onChange={(e) => setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>

                <button className='upload'>Upload</button>
        
            </form>

        </div>
    );
};

export default UsersForm;