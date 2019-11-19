import React from 'react';
import PostControl from './PostControl';
import Header from './Header';


function App() {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         postList: [],
    //     };

    //     this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
    // }

    // handleAddingNewPostToList(newPost) {
    //     var newPostList = this.state.postList.slice();
    //     newPostList.push(newPost);
    //     this.setState({postList : newPostList});
    // }

    // render(){
        return (
            <div>
                <Header />
                <PostControl />
            </div>
        )
    // };
   
}

export default App;