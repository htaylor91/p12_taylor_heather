import '../styles/Toggle.css'
import PropTypes from "prop-types";

function Toggle({handleChange, labelText, toggleId, checked}){
    return (
        <>
        <input 
            className='toggle' 
            id={toggleId}
            name={toggleId}
            type="checkbox" 
            onChange={handleChange}
            checked={checked}/>
        <label htmlFor={toggleId}>{labelText}</label>
        </>
    )
}

Toggle.propTypes = {
    handleChange: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    toggleId: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
}

export default Toggle