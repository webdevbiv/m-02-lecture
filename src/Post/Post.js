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
        isLiked: false
    }
    render() {
        const { imageUrl, imageAlt } = this.props;
        return (
            <div>
                <div>
                    <img
                        className={s.image}
                        src={imageUrl}
                        alt={imageAlt}
                    />
                </div>
                <GrLike
                    className={s.like}
                    onClick={() => console.log('click')}
                />
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