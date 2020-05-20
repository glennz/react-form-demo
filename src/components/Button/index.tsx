import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props: any)=> {
    const { id, type, text, className, click } = props;
    
    return (
        <button id={id}
            type={type}
            className={className}
            onClick={click}>
            {text}
        </button>
    );
};

Button.defaultProps = {
    type: "button",
};

Button.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    click: PropTypes.func,
    children: PropTypes.node
};