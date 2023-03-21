import '../styles/MacrosCard.css'
import PropTypes from "prop-types";
import IconTile from './IconTile'

import cheeseburger from '../assets/cheeseburger.svg'
import chicken from '../assets/chicken.svg'
import apple from '../assets/apple.svg'
import energy from '../assets/energy.svg'

const macroIcons = {
    "Calories": energy,
    "Proteines": chicken,
    "Glucides": apple,
    "Lipides": cheeseburger
}

function MacrosCard({macro, value}){
    let abbreviation = "";
    macro === "Calories" ? abbreviation = "kCal" : abbreviation = "g";

    const iconSource = macroIcons[`${macro}`];
    return (
        <div className="MacrosCard">
            <IconTile source={iconSource} alt={""} iconData={`keyData-${macro}`}></IconTile>
            <div>
                <h3>{value}{abbreviation}</h3>
                <p>{macro}</p>
            </div>
        </div>
    )
}

MacrosCard.propTypes = {
    macro: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
}


export default MacrosCard