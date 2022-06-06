import React from "react";
import PropTypes from "prop-types";

const Title = ({ text }) => {
    return (
        <div>{text}</div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Title