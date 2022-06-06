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
                <GrLike />
                <Title text='some title' />
            </div>
        )
    }
}
Post.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Post