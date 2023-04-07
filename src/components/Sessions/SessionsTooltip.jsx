import PropTypes from 'prop-types';

const SessionsTooltipStyles = {
    container: {
        border: 'none', 
        outline: 'none', 
        backgroundColor: 'var(--color-white)',
        fontWeight: '600',
        color: 'var(--color-black)',
        padding: '.5rem',
        fontSize: '.5rem',
    },
    text: {
        fontSize: '.5rem',
        fontWeight: '600',
    }
}

/**
 * @component
 */
function SessionsTooltip({ active, payload }){
    if (active && payload && payload.length) {
        return (
            <div style={SessionsTooltipStyles.container}>
                <p style={SessionsTooltipStyles.text}>{`${payload[0].value} min`}</p>
            </div>
        )
    }
    return null;
}

SessionsTooltip.propTypes = {
    /**
     * Whether the tooltip is active.
     */
    active: PropTypes.bool,
    /**
     * The tooltip data (minutes).
     */
    payload: PropTypes.array,
}

export default SessionsTooltip;
