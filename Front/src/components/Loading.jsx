import PropTypes from 'prop-types'

/**
 * @component
 */
function Loading({children = 'Chargement en cours...'}) {
    return (
        <div className="loading">{children}</div>
    );
}

Loading.propTypes = {
    /**
     * The message to display while the component is loading.
     */
    children: PropTypes.string
}

Loading.defaultProps = {
    children: 'Chargement en cours...'
}

export default Loading;