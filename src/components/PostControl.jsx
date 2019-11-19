import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';


class PostControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            postList: [
            {
                userName: 'dklsadjl',
                post: 'lorem ipsum dolor'
            }
          ]
        };
        this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
      }

      handleAddingNewPostToList(newPost) {
          var newPostList = this.state.postList.slice();
          newPostList.push(newPost);
          this.setState({postList: newPostList});
      }

    render(){
        return (
            <div>
                <NewPost onAddingNewPostToList={this.handleAddingNewPostToList}/>
                <hr />
                <PostList postList={this.state.postList} />
             </div>
        );
    }
    
}

export default PostControl;