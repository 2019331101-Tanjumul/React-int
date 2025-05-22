export const getPosts = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'GET',
 }); 
return await response.json(); 
}; 


/* 
 const getPosts = async ()=> { 
    
    const response = await fetch('https://torro.com/api/v1/posts',{ 
    method : 'GET', 
    
});
    return await response.json(); 
}; 
*/


