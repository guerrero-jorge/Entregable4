import React from 'react';

const UsersList = ({user,selectUser,removeUser}) => {
    return (
        <div className='containerUserList'>
            
            {
                user.map(user => 
                    //<div key={user.id}>

                        <div className='containerInfo' key={user.id} > 
                            <div >
                                <p>{user.first_name} {user.last_name}</p>
                                <p>{user.email}</p>
                                <p><i className="fas fa-birthday-cake"></i>{user.birthday}</p>
                            </div>
                            <div className='icons'>
                                <button onClick={()=>selectUser(user)}><i className="fas fa-edit"></i></button>
                                <button onClick={()=>removeUser(user.id)}><i className="fas fa-trash"></i></button>
                                
                            </div>
                        </div> 
                        
                   // </div>
                    
                )

            }
        </div>
    );
}; 

export default UsersList;