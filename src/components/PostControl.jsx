import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';
import PropTypes from 'prop-types';


function PostControl(props) {

  
        return (
            <div>
                <NewPost onAddingNewPostToList={props.handleAddingNewPostToList}/>
                <hr />
                <PostList postList={props.postList} />
             </div>
        );
    }
    

export default PostControl;