import React from 'react';
import PropTypes from 'prop-types';

function Posts(props){
    function handleUpClick(){
        console.log(props);
        // props.onUpClick(props.index);
    }

    return(
        <div>
            <button onClick={handleUpClick}>Up</button>
            <p>{props.likes}</p>
            {/* <button>Down</button> */}
            <h4>{props.userName}</h4>
            <p>{props.post}</p>
            
            <hr/>
        </div>
    );
}

Posts.propTypes = {
    userName: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
    likes: PropTypes.number,
    index: PropTypes.number,
    handleUpClick: PropTypes.func
};

export default Posts;