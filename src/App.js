import { Component } from 'react';
import Post from './Post/Post';
import s from './App.module.scss';
import PropTypes from 'prop-types'

// const imageUrl1 = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg'
// const imageUrl2 = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
// const imageUrl3 = 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'

class App extends Component {
  state = {
    // post1: {
    //   isLiked: false,
    //   count: 0
    // },
    // post2: {
    //   isLiked: false,
    //   count: 0
    // },
    // post3: {
    //   isLiked: false,
    //   count: 0
    // },
    posts: [
      {
        id: 1,
        isLiked: false,
        count: 0,
        url: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg'
      },
      {
        id: 2,
        isLiked: false,
        count: 0,
        url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
      },
      {
        id: 3,
        isLiked: false,
        count: 0,
        url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg'
      }
    ]
  };

  // onChange1 = () => {
  //   //     this.setState(prev => ({
  //   //         isLiked: !prev.isLiked
  //   //     }))
  //   //     this.setState(prev => ({
  //   //         count: prev.count + 1
  //   //     }))

  //   this.setState(prev => ({
  //     post1: {
  //       isLiked: !prev.post1.isLiked,
  //       count: prev.post1.count + 1
  //     }
  //   }))
  // }
  // onChange2 = () => {
  //   this.setState(prev => ({
  //     post2: {
  //       isLiked: !prev.post2.isLiked,
  //       count: prev.post2.count + 1
  //     }
  //   }))
  // }
  // onChange3 = () => {
  //   this.setState(prev => ({
  //     post3: {
  //       isLiked: !prev.post3.isLiked,
  //       count: prev.post3.count + 1
  //     }
  //   }))
  // }
  onChange = (id) => {
    this.setState(prev => {
      const prevPosts = prev.posts
      const currentPostIndex = prevPosts.findIndex(post => post.id === id)
      const oldPost = prevPosts[currentPostIndex]
      return {
        posts: [
          ...prevPosts.filter((_, index) => index < currentPostIndex),
          {
            id: oldPost.id,
            url: oldPost.url,
            isLiked: !oldPost.isLiked,
            count: oldPost.count + 1,
          },
          ...prevPosts.filter((_, index) => index > currentPostIndex)
        ]
      }
    })
    // this.setState(prev => ({
    //   post3: {
    //     isLiked: !prev.post3.isLiked,
    //     count: prev.post3.count + 1
    //   }
    // }))
  }

  getLikesCount() {
    const { posts } = this.state;
    return posts.reduce((result, post) => post.isLiked ? result + 1 : result, 0)
    // return 0
    // const { post1, post2, post3 } = this.state;
    // let result = 0;
    // if (post1.isLiked) {
    //   result++;
    // }
    // if (post2.isLiked) {
    //   result++;
    // }
    // if (post3.isLiked) {
    //   result++;
    // }
    // return result;
  }
  render() {
    const { posts } = this.state
    return (
      <div className={s.postsWrapper}>
        <div className={s.container} >
          {posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              imageUrl={post.url}
              imageAlt='placeholder'
              isLiked={post.isLiked}
              count={post.count}
              onChange={this.onChange}
            />
          ))

          /* <Post
            imageUrl={imageUrl1}
            imageAlt='placeholder'
            isLiked={this.state.post1.isLiked}
            count={this.state.post1.count}
            onChange={this.onChange1}
          />
          <Post
            imageUrl={imageUrl2}
            imageAlt='placeholder'
            isLiked={this.state.post2.isLiked}
            count={this.state.post2.count}
            onChange={this.onChange2}
          />
          <Post
            imageUrl={imageUrl3}
            imageAlt='placeholder'
            isLiked={this.state.post3.isLiked}
            count={this.state.post3.count}
            onChange={this.onChange3}
          /> */}
        </div>
        <br />
        <div>Likes count: {this.getLikesCount()}</div>
      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  // onChange: PropTypes.func.isRequired
}

export default App;
