import React, {useEffect, useState} from "react";

function DictionaryAPI(){

    const [users, setUsers] = useState(false)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(res => {
            if(res.ok && res.status === 200){
                return res.json();
            }
        })
        .then(data => {setUsers(data);})
        .catch(err => {console.log(err);})
    }, []);

    return(
        <div>
            {users && users.map(user =>(
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </div>
    );
}

export default DictionaryAPI;