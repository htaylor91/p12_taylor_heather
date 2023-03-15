import '../styles/IconTile.css'
import PropTypes from "prop-types";

function IconTile({source, alt, iconData}) {
    return (
        <div className="IconTile" data-icon={iconData}>
            <img className='Icon' src={source} alt={alt} />
        </div>
    )
}

IconTile.propTypes = {
    source: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    iconData: PropTypes.string.isRequired
}

export default IconTile