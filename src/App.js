import { useEffect, useState } from 'react';
import './App.css';

import User from './components/User';
import Post from './components/Post';


function App() {

  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [shUsers, setShUsers] = useState(true)

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



  const viewPost = (user_id) => {
    const URL=`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
    fetch(URL)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(data=>{
        setShUsers(false);
        setPosts(data);
      })
      .catch(err=>{
        console.error(err.message);
      })
  }

const Back = () => {
  setPosts(null)
  setShUsers(true)
}

  return (
    <div className='w3-content w3-panel'>
      <h1 className='w3-opacity w3-center'>CLIENT</h1>
        {
          shUsers &&
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
          <> 
            
            {
              posts.map((post)=>
              <Post 
              key={post['id']}
              title={post['title']}
              body={post['body']}
              />)
            }

            <div className='w3-center w3-padding'>
            <button className='w3-button w3-border w3-red w3-hover-green w3-round w3-center' onClick={Back}>Back</button>
            </div>

          </>
          
        }
    </div>
  );
}

export default App;
