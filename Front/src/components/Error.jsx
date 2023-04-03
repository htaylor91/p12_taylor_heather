import PropTypes from 'prop-types'

/**
 * @component
 */
function Error({children = 'Une erreur s\'est produite'}) {
    return (
        <div className="error">{children}</div>
    );
}

Error.propTypes = {
    /**
     * The error message to display if the data is not found.
     */
    children: PropTypes.string
}

Error.defaultProps = {
    children: 'Une erreur s\'est produite'
}

export default Error;