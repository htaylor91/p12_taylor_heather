import PropTypes from 'prop-types';

const ActivityTooltipStyles = {
    container: {
        backgroundColor: 'var(--color-red-dark)',
        color: 'var(--color-white)',
        padding: '5px',
        height: 'auto',
        maxWidth: '50px',
        fontSize: '11px',
        fontWeight: '500',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
    }
}

/**
 * @component
 */
function ActivityTooltip({ active, payload }){
    if(active && payload && payload.length){
    return (
        <div style={ActivityTooltipStyles.container}>
            <p>{`${payload[0].value}kg`}</p>
            <p>{`${payload[1].value}kCal`}</p>
        </div>
    )}
    return null
}

ActivityTooltip.propTypes = {
    /**
     * Whether the tooltip is active.
     */
    active: PropTypes.bool,
    /**
     * The tooltip data (kg and kCal).
     */
    payload: PropTypes.arrayOf(PropTypes.object)
}

export default ActivityTooltip;