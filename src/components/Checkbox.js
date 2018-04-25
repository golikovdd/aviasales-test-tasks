import React from 'react'
import PropTypes from 'prop-types'
import './checkbox.css'

const Checkbox = ({id, label, checked, onChange}) => (
    <div className="checkbox">
        <input type="checkbox" checked={!!checked} id={id} onChange={(ev) => {
            onChange(ev.target.checked)
        }}/>
        <label htmlFor={id}>
            {label}
        </label>
    </div>
);

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Checkbox
