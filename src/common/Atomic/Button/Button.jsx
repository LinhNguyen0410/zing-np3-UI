import React from 'react';
import PropTypes from 'prop-types';
import "./button.scss";

export const Button = ({ primary, backgroundColor, color, size, label, onClick, disable = false }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            onClick={onClick}
            type="button"
            disabled={disable}
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ 'color': color, 'backgroundColor': backgroundColor }}>
            {label}
        </button>
    );
};

