import './SessionsTooltip.css';

function SessionsTooltip({ active, payload }){
    if (active && payload && payload.length) {
    return (
        <div className="SessionsTooltip">
            <p className='SessionsTooltip-label'>{`${payload[0].value} min`}</p>
        </div>
    )
    }
    return null;
}

export default SessionsTooltip;
