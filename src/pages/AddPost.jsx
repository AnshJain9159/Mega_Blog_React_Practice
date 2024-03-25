// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PostForm as PostFormComponent , Container} from '../components';

function AddPost() {
  return (
    <div className='py-8'>
       <Container>
       <PostFormComponent/>
       </Container>
    </div>
  )
}

export default AddPost