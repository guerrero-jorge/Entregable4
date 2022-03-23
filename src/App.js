
import './App.css';
import { useState, useEffect } from 'react';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import axios from 'axios';

function App() {

    const [user,setUser]=useState([]);
    const[userSelected,setUserSelected]=useState(null);

    useEffect(() => {

      axios
        .get('https://users-crud1.herokuapp.com/users/')
        .then(res=> setUser(res.data))

    },[]);

    const getUser = () => {
      axios
        .get("https://users-crud1.herokuapp.com/users/")
        .then((res) => setUser(res.data));
    };
  
    const selectUser= user => setUserSelected(user);


    const removeUser = (id) => {
      axios
        .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
        .then(() => getUser());
    };

  
    console.log(userSelected)
    
  return (
    <div className="App">

        <UsersForm getUser={getUser} userSelected={userSelected} setUserSelected={setUserSelected}/>
        <UsersList user={user} selectUser={selectUser} removeUser={removeUser}/>
        
    </div>
  );
}

export default App;
