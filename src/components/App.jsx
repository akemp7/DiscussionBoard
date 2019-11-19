import React from 'react';
import PostControl from './PostControl';
import Header from './Header';


class App extends React.Component{


     constructor(props) {
            super(props);
            this.state = {
                postList: [],
                likes: 0
            };
            this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
            this.handleUpClick = this.handleUpClick.bind(this);
          }
          handleUpClick(i){
              console.log("testing");
            var newList = this.state.postList;
            newList[i].likes = newList[i].likes+1;
            this.setState({postList: newList});          
          }
    
          handleAddingNewPostToList(newPost) {
              var newPostList = this.state.postList.slice();
              newPostList.push(newPost);
              this.setState({postList: newPostList});
          }
          
        render(){
            return (
                <div>
                    <Header />
                    <hr />
                    <PostControl postList={this.state.postList} handleAddingNewPostToList={this.handleAddingNewPostToList} />
                 </div>
            );
   
}
}


export default App;