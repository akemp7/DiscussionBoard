import React from 'react';
import PostControl from './PostControl';
import Header from './Header';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [
                {
                    userName: "Jane",
                    post: "Her Post"
                }
            ],
        };

        this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    }

    handleAddingNewPostToList(newPost) {
        var newPostList = this.state.postList.slice();
        newPostList.push(newPost);
        this.setState({postList : newPostList});
    }

    render(){
        return (
            <div>
                <Header />
                <PostControl postList={this.state.postList} handleAddingNewPostToList={this.handleAddingNewPostToList}/>
            </div>
        )
    };
   
}

export default App;