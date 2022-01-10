import React , {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button' ;
import classes from './UserForm.css';

function UserForm(props) {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(name==='' || age===''){
            console.log('Empty field');
            return;
        }
        if(age<=0){
            console.log('Invalid Age');
            return;
        }
        const userDetails = {
            name: name,
            age : +age
        };

        props.addUser(userDetails);

        setName('');
        setAge('');
    };
    return (
        <Card className="user-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={handleNameChange} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={age} onChange={handleAgeChange} />
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    )
}

export default UserForm;
