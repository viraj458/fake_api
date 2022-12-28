import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState(null)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setUsers(data);
      })
      .catch(err=>{
        console.error(err.message);
      })
  },[])
  return (
    <div className='w3-content w3-center'>
        {
          users &&
          users.map((user)=><h1 key={user['id']}>{user['name']}</h1>)
        }
    </div>
  );
}

export default App;
