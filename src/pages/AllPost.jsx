// eslint-disable-next-line no-unused-vars
import React from 'react';
import Container from '../components/container/Container.jsx';
import PostCard from '../components/PostCard.jsx';
// import { Container, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useState,useEffect } from 'react';

function AllPost() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
    return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div key={post.$id} className='p-2 w-1/4'> 
                        <PostCard {...post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost