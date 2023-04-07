import PropTypes from 'prop-types'

/**
 * @component
 */
function Loading({children = 'Chargement en cours...'}) {
    return (
        <div style={{display: 'grid', placeContent: 'center', fontSize: '2em'}}>{children}</div>
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