import PropTypes from 'prop-types'

function Error({children = 'Une erreur s\'est produite'}) {
    return (
        <div className="error">{children}</div>
    );
}

Error.propTypes = {
    children: PropTypes.string
}

export default Error;