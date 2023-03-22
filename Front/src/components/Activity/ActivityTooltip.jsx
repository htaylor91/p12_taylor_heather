//import '../styles/CustomTooltip.css';

function ActivityTooltip({ active, payload }){
    if (active && payload && payload.length) {
    return (
        <div className="ActivityTooltip">
            <p className='ActivityTooltip-label'>{`${payload[0].value} kg`}</p>
            <p className='ActivityTooltip-label'>{`${payload[1].value} kCal`}</p>
        </div>
    )
    }
    return null;
}

export default ActivityTooltip;