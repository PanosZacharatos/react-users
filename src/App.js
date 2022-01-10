import React,{useState} from "react";
import UserForm from "./Components/Users/UserForm";
import UserList from './Components/Users/UserList';




function App() {
  const [userInfo,setUserInfo] = useState([]);
  
  const addUserInfo  = (details) => {
    //console.log(details.name + " " + details.age);
    setUserInfo(prev=>{
      const current = {
        name : details.name,
        age : details.age,
        id : 'u' + (Math.random()*10).toString()
      };
      return [current,...prev];
    })
  };

  return (
    <div>
      <UserForm addUser={addUserInfo} />
      <UserList users={userInfo} />
    </div>
  );
}

export default App;
