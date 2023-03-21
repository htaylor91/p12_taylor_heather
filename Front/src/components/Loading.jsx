import PropTypes from 'prop-types'

function Loading({children = 'Chargement en cours...'}) {
    return (
        <div className="loading">{children}</div>
    );
}

Loading.propTypes = {
    children: PropTypes.string
}

export default Loading;