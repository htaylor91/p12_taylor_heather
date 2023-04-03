import '../styles/IconTile.css'
import PropTypes from "prop-types";

/**
 * @component
 */
function IconTile({source, alt, iconData}) {
    return (
        <div className="IconTile" data-icon={iconData}>
            <img className='Icon' src={source} alt={alt} />
        </div>
    )
}

IconTile.propTypes = {
    /**
     * The path to the source of the icon.
     */
    source: PropTypes.string.isRequired,
    /**
     * The alt text for the icon.
     */
    alt: PropTypes.string.isRequired,
    /**
     * The data attribute for the icon's css styling.
     */
    iconData: PropTypes.string.isRequired
}

export default IconTile