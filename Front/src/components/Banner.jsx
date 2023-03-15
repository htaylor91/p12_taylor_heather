import React from "react";
import PropTypes from "prop-types";

function Banner({name}){
    return (
        <div className="Banner">
            <h2 style={{fontSize: '48px', fontWeight: '500'}}><span>Bonjour </span><span style={{color: 'var(--color-red)'}}>{name}</span></h2>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

Banner.propTypes = {
    name: PropTypes.string.isRequired
}

export default Banner