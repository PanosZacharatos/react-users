import React , {useState,useRef} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button' ;
import classes from './UserForm.module.css';
import ErrorModal from '../UI/ErrorModal';

function UserForm(props) {
    const name = useRef();
    const age = useRef();
    const [error,setError] = useState(null);

   

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        
        if(name.current.value.trim().length === 0 || age.current.value.trim().length === 0){
            //console.log('Empty field');
            setError({headerTitle: "Empty Field" , contentTitle:"One or more fields are empty"});
            return;
        }
        if(age.current.value<=0){
            //console.log('Invalid Age');
            setError({headerTitle: "Invalid Age" , contentTitle:"User Rejected"});
            return;
        }
        const userDetails = {
            name: name.current.value,
            age : +(age.current.value)
        };

        props.addUser(userDetails);;

        name.current.value = '' ;
        age.current.value = '' ;
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
                    <input id="name" type="text" ref={name} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" ref={age} />
                    <Button type='submit'>Add user</Button>
                </form>
            </Card>
        </div>
    )
}

export default UserForm;
