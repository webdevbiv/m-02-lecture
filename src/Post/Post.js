import React from "react";
import { GrLike } from 'react-icons/gr';
import Title from '../Title/Title';

const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg'

const Post = () => {
    return (
        <div>
            <img alt='nature' src={imageUrl} width={300} />
            <GrLike />
            <Title text='some title' />
        </div>
    )
}

export default Post