import { useState,useEffect } from 'react';
import { getPosts } from './api';
import PostCard from './PostCard';
import "./App.css";

function App() {  

  const  [data , setData] = useState(null); 

useEffect(() =>{ 

  getPosts().then((posts)=> setData(posts));
}, []);
return (
<div className="App">
{
  data ? data.map((e) => <PostCard /> ) : <p> NO data</p>
}

</div>
); 
} 
export default App;