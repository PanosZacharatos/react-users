import React , {useState} from 'react';

function UserForm() {
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
        console.log(name + " " + age)
        setName('');
        setAge('');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={name} onChange={handleNameChange} />
                <label htmlFor="age">Age</label>
                <input id="age" type="number" value={age} onChange={handleAgeChange} />
                <button type='submit'>Add User</button>
            </form>
        </div>
    )
}

export default UserForm;
