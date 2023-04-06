import PropTypes from "prop-types";
import "../styles/Banner.css"
/**
 * @component
 */
function Banner({name}){
    return (
        <div className="Banner">
            <h2>
                <span>Bonjour </span>
                <span style={{color: 'var(--color-red)'}}>{name}</span>
            </h2>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

Banner.propTypes = {
    /**
     * The name of the user.
     */
    name: PropTypes.string.isRequired
}

export default Banner