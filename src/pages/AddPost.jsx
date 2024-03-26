// eslint-disable-next-line no-unused-vars
import React from 'react';
import  PostForm  from '../components/post-form/PostForm.jsx';
import Container from '../components/container/Container.jsx';

function AddPost() {
  return (
    <div className='py-8'>
       <Container>
       <PostForm/>
       </Container>
    </div>
  )
}

export default AddPost