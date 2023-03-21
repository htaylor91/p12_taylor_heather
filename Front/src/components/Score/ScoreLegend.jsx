import './ScoreLegend.css'
import PropTypes from 'prop-types';

function ScoreLegend({score}) {
    return (
        <div className="ScoreLegend" style={{maxWidth: '95px', margin: 'auto'}}>
            <p className='ScoreLegend-score'>{score}%</p>
            <p className='ScoreLegend-description'>de votre objectif</p>
        </div>
    );
};

ScoreLegend.propTypes = {
    score: PropTypes.number.isRequired
};

export default ScoreLegend;