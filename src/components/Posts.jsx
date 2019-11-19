import React from 'react';
import PropTypes from 'prop-types';

function Posts(props){
    return(
        <div>
            <h4>{props.userName}</h4>
            <p>{props.post}</p>
        </div>
    );
}

Posts.propTypes = {
    userName: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired
};

export default Posts;