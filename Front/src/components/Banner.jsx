import PropTypes from "prop-types";

/**
 * @component
 */
function Banner({name}){
    return (
        <div className="Banner">
            <h2 style={{fontSize: '48px', fontWeight: '500'}}>
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