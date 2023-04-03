import '../styles/Toggle.css'
import PropTypes from "prop-types";

/**
 * @component       
 */
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
    /**
     * The function to call when the toggle is clicked.
     */
    handleChange: PropTypes.func.isRequired,
    /**
     * The text to display next to the toggle.
     * "Service:" or "Utilisateur:"
     */
    labelText: PropTypes.oneOf(['Service:', 'Utilisateur:']).isRequired,
    /**
     * The id of the toggle's input element.
     * "toggle-service" or "toggle-user"
     */
    toggleId: PropTypes.oneOf(['toggle-service', 'toggle-user']).isRequired,
    /**
     * The checked state of the toggle's input element.
     */
    checked: PropTypes.bool.isRequired
}

export default Toggle