import React from 'react';
import Posts from './Posts';
import PropTypes from 'prop-types';

function PostList(props){
    console.log(props.postList);
    return(
        <div>
            <hr/>
            {props.postList.map((i, index) =>
                    <Posts userName={i.userName}
                    post={i.post}
                    key={index} />
                )}
        </div>
    );
}

PostList.propTypes = {
    postList: PropTypes.array
};

export default PostList;