import { useEffect, useState } from 'react';
import './App.css';

import User from './components/User';
import Post from './components/Post';


function App() {

  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')

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
        setError(err.message);
      })
  },[])



  const viewPost = (user_id) => {
    const URL=`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    fetch(URL)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setUsers(null);
        setPosts(data);
      })
      .catch(err=>{
        setError(err.message);
      })
  }



  return (
    <div className='w3-content w3-panel'>
      <h1 className='w3-opacity w3-center'>CLIENT</h1>
        {
          users &&
          users.map((singleUser)=>
          <User 
          key={singleUser['id']} 
          id={singleUser['id']} 
          username={singleUser['username']} 
          name={singleUser['name']} 
          email={singleUser['email']} 
          website={singleUser['website']} 
          viewPost={viewPost}
          />)
        }

{
          posts &&
          posts.map((post)=>
          <Post 
          key={post['id']}
          title={post['title']}
          body={post['body']}
          />)
        }
    </div>
  );
}

export default App;
