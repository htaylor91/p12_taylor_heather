import PropTypes from 'prop-types';

const ScoreLegendStyles = {
    container: {
        maxWidth: '95px',
        margin: 'auto',
    },
    score: {
        fontSize: '1.625rem',
        fontWeight: '700',
        color: 'var(--color-black)',
        textAlign: 'center',
    },
    description: {
        fontSize: '1rem',
        fontWeight: '600',
        color: 'var(--color-gray)',
        textAlign: 'center',
    }
}

/**
 * @component
 */
function ScoreLegend({score}) {
    return (
        <div style={ScoreLegendStyles.container}>
            <p style={ScoreLegendStyles.score}>{score}%</p>
            <p style={ScoreLegendStyles.description}>de votre objectif</p>
        </div>
    );
};

ScoreLegend.propTypes = {
    /**
     * The score to display in the legend.
     */
    score: PropTypes.number.isRequired
};

export default ScoreLegend;