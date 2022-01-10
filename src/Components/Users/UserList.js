import React from 'react';
import Card from '../UI/Card';
import classes from './UserList.css'

function UserList(props) {
    return (
        <Card className="users">
            <ul>
                {props.users.map(user=><li key={user.id}>Name:{user.name} Age:{user.age} </li>)}
            </ul>
        </Card>
    )
}

export default UserList;
