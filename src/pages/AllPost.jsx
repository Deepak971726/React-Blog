import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'

const AllPost = () => {
    const [post, setPost] = useState([])
        
    useEffect(()=>{
        service.getPosts([])
        .then((posts)=>  {
            console.log("service wala post", posts)
            if(posts){
                setPost(posts)
                console.log("me hu post",(post))
            }
            
            console.log(post)   
        })
        
         
         
        
    },[])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className="flex flex-wrap">
                {post.map((posts)=>(
                    <div key={posts.$id} className='p-2 w-1/4' >
                        <PostCard $id={posts.$id} title={posts.title} featuredImage={post.featuredImage}/>
                    </div>
                ))}
            </div>
        </Container>
      
    </div>
  )
}

export default AllPost
