import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PostPage () {

    const navigate = useNavigate();
    const [post , setPost] = useState(null)
    const { slug } = useParams();
    const url = `http://localhost:3001/posts/${slug}`
    console.log(url);
    

    useEffect(
        () => {
          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
    
              const keys = Object.keys(data)
              console.log(keys);
              if (keys.includes('error')) {
               
                navigate('/404')
    
              } else {
              
                setPost(data.data)
    
              }
    
    
             
    
            })
            .catch(err => {
              console.log(err);
            })
        },
        [])


return (
    
    <>
    {
        post ? (
            <div>
                <section>
                    <h2>{post.title}</h2>
                </section>
            </div>
        ) : (
            <p>Loading...</p> 
          )
    }
    </>
)
}