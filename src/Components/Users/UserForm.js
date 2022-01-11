import React , {useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button' ;
import classes from './UserForm.module.css';
import ErrorModal from '../UI/ErrorModal';

function UserForm(props) {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [error,setError] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(name.trim().length === 0 || age.trim().length === 0){
            //console.log('Empty field');
            setError({headerTitle: "Empty Field" , contentTitle:"One or more fields are empty"});
            return;
        }
        if(age<=0){
            //console.log('Invalid Age');
            setError({headerTitle: "Invalid Age" , contentTitle:"User Rejected"});
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

    const handleError = () =>{
        setError(null);
    };

    return (
        <div>
            {error && <ErrorModal error={error} handleError={handleError} />}
            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" value={name} onChange={handleNameChange} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={age} onChange={handleAgeChange} />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserForm;
