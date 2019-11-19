import React from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';

function PostList(props){
    console.log(props.postList);
    return(
        <div>
            <hr/>
            {props.postList.map((post, i) =>
                    <Posts userName={post.userName}
                    post={post.post}
                    likes = {post.likes}
                    index = {i}
                    key={i} 
                    onUpClick={post.onUpClick}
                    />
                )}
        </div>
    );
}

PostList.propTypes = {
    postList: PropTypes.array,
    likes: PropTypes.number,
    onUpClick: PropTypes.func
};

export default PostList;