import SessionsModel from '../../models/SessionsModel';
import useAxios from '../../hooks/useAxios';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import SessionsTooltip from './SessionsTooltip';

function Sessions() {
  const [loading, error, data] = useAxios('sessionsService');

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  if(data){
    const sessionsData = new SessionsModel(data);
    const graphData = sessionsData?.sessions;

    const SessionsStyles = {
      LineChart: {
        backgroundColor: 'var(--color-red)',
        borderRadius: '5px'
      },
      text: {
        fill: 'var(--color-white)',
        fontSize: '15px',
        opacity: '0.5'
      }
    }

    return (
          <ResponsiveContainer width={258} height={263} >

            <LineChart
                data={graphData}
                style={SessionsStyles.LineChart}
                margin={{top: 5, right: 20, left: 20, bottom: 5}}
            >

              <text style={SessionsStyles.text}>
                <tspan x={34} y={35}>Durée moyenne des</tspan>
                <tspan x={34} y={55}>sessions</tspan>
              </text>

              <YAxis 
                domain={['dataMin-10', 'dataMax+10']} 
                hide={true}
              />

              <XAxis 
                dataKey="weekday"
                tickLine={false}
                axisLine={false}
                opacity='0.5'
                stroke='var(--color-white)'  
              />

              <Tooltip 
                content={<SessionsTooltip/>} 
                cursor={false}
              />

              <Line 
                type="natural"
                dataKey="sessionLength"
                stroke="var(--color-white)"
                strokeWidth={2} 
                dot={false}
              />

            </LineChart>

          </ResponsiveContainer>
    );
  }
};

export default Sessions;
