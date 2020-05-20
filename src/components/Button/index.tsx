import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props: any)=> {
    const { id, type, text, className, click, disabled } = props;
    
    return (
        <button id={id}
            type={type}
            className={className}
            disabled={disabled}
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
    disabled: PropTypes.bool,
    text: PropTypes.string.isRequired,
    click: PropTypes.func,
    children: PropTypes.node
};