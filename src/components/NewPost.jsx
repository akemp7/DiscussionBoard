import React from 'react';
import PropTypes from 'prop-types';

function NewPost(props){
    let _userNames = null;
    let _post = null;

    function onNewPostFormSubmission(event){
        event.preventDefault();
        props.onAddingNewPostToList({userName: _userNames.value, post: _post.value});
        _userNames.value='';
        _post.value='';
    }
    return(
        <div>
            <h2>Make A New Post</h2>
            <form onSubmit={onNewPostFormSubmission}>
                <input type="text"
                id='userName'
                placeholder='User Name'
                ref={(input) => {_userNames = input;}}/>
                <textarea
                id='post'
                placeholder='Type your text here'
                ref={(textarea) => {_post = textarea;}}/>
                <button type='submit'>Submit!</button>

            </form>
        </div>
    );
}

NewPost.propTypes = {
    onAddingNewPostToList: PropTypes.func
    
};

export default NewPost;