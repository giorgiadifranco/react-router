import { useState } from 'react'
import { useEffect } from 'react'

export default function Posts(){



    const [postsData, setPostsData] = useState({})

  /*function handleClick(e){

    fetchData()
  }*/

  function fetchData (url = 'http://localhost:3001/posts'){

    fetch(url)
    .then(resp =>resp.json())
    .then(data =>{
      console.log(data);
      setPostsData(data)
      
    })
  }

  useEffect(fetchData, [])



  {/*function handleFormSubmit(e){
    e.preventDefault()
    console.log('Form sent', articles);


    
    setNewArticle({
      title: '',
    image: '',
    content: '',
    category: '',
    tags: [],
    published: false,
    })

console.log(articles);


  }*/}

    return(

        <>
            <h1>Posts</h1>

             <section className='recipes'>
                <div className="container">
                <div
                    class="row justify-content-center align-items-center g-3"
                >
                    {postsData.data ?
                    postsData.data.map(post =>(
                    <div class="col" key={post.slug}>
                        <div className="card">
                        <img src={`http://localhost:3001/images/${post.image}`} alt =''/>
                        <h1>{post.title}</h1>
                        <p>
                            {post.content}
                        </p>
                        </div>
                    </div>
                    )): <p>No results yet</p>} 
                    
                    
                </div>
                
                </div>

             </section>
      </>
    )


}