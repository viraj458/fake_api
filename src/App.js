import { useEffect, useState } from 'react';
import './App.css';

import User from './components/User';
import Post from './components/Post';
import Comment from './components/comment';


function App() {

  const [users, setUsers] = useState(null)
  const [posts, setPosts] = useState(null)
  const [comments, setComments] = useState(null)
  const [shUsers, setShUsers] = useState(true)
  const [shPosts, setShPosts] = useState(true)

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


  const viewComments = (post_id) => {
    const URL = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`
    fetch(URL)
      .then(res=>{
        if(!res.ok) throw Error(res.statusText)
        return(res.json())
      })
      .then(data=>{
        setShPosts(false)
        setComments(data)
      })
      .catch(err=>{
        console.error(err);
      })
  }

const Back = () => {
  setPosts(null)
  setShUsers(true)
}

const Back2 = () => {
  
  setShPosts(true)
  setComments(null)
}

  return (
    <div className='w3-content w3-panel'>
      <h1 className='w3-opacity w3-center'>Fake API</h1>
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
          shPosts && posts &&
          <> 
            
            {
              posts.map((post)=>
              <Post 
              key={post['id']}
              id={post['id']}
              title={post['title']}
              body={post['body']}
              viewComments={viewComments}
              />)
            }

            <div className='w3-center w3-padding'>
            <button className='w3-button w3-border w3-red w3-hover-green w3-round w3-center' onClick={Back}>Back</button>
            </div>

          </>
          
        }

        {
          comments &&
          <> 
            <div className='w3-center w3-padding'>
              <button className='w3-button w3-border w3-red w3-hover-green w3-round w3-center' onClick={Back2}>Back</button>
            </div>
            {
              comments.map((comment)=>
              <Comment 
              key={comment['id']}
              name={comment['name']}
              email={comment['email']}
              body={comment['body']}
              />)
            }

          </>
          
        }


        
    </div>
  );
}

export default App;
