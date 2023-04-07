import PropTypes from 'prop-types'

/**
 * @component
 */
function Error({children = 'Une erreur s\'est produite lors de la connexion au serveur'}) {
    return (
        <div style={{display: 'grid', placeContent: 'center', fontSize: '2em'}}>{children}</div>
    );
}

Error.propTypes = {
    /**
     * The error message to display if the data is not found.
     */
    children: PropTypes.string
}

Error.defaultProps = {
    children: 'Une erreur s\'est produite lors de la connexion au serveur'
}

export default Error;