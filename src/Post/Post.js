import React, { Component } from "react";
import PropTypes from 'prop-types';
import { GrLike } from 'react-icons/gr';
import Title from '../Title/Title';
import s from './Post.module.scss'

// const Post = ({ imageUrl, imageAlt }) => {
//     return (
//         <div>
//             <img
//                 className={s.image}
//                 alt={imageAlt}
//                 src={imageUrl} />
//             <GrLike />
//             <Title text='some title' />
//         </div>
//     )
// }
class Post extends Component {
    state = {
        isLiked: false,
        count: 0
    }
    toggleLike = () => {
        this.setState(prev => ({
            isLiked: !prev.isLiked
        }))
        this.setState(prev => ({
            count: prev.count + 1
        }))
    }

    render() {
        const { imageUrl, imageAlt } = this.props;
        console.log(this.state);
        return (
            <div>
                <div>Toggle count: {this.state.count}</div>
                {this.state.isLiked ? 'liked' : 'unliked'}
                <div>
                    <img
                        className={s.image}
                        src={imageUrl}
                        alt={imageAlt}
                    />
                </div>
                <div onClick={this.toggleLike}>
                    <GrLike
                        className={s.like}

                    />
                </div>
                <Title text='some title test' />
            </div>
        )
    }
}
Post.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
}

export default Post