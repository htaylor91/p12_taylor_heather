import SessionsModel from '../../models/SessionsModel';
import useAxios from '../../hooks/useAxios';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import SessionsTooltip from './SessionsTooltip';
import Error from '../Error';
import Loading from '../Loading';

/**
 * @component
 */
function Sessions() {
  const {loading, error, data} = useAxios('sessionsService');

  if(loading) return <Loading></Loading>
  if(error) return <Error></Error>
  if(data){
    const sessionsData = new SessionsModel(data);
    const graphData = sessionsData?.sessions;

    const SessionsStyles = {
      LineChart: {
        background: 'var(--color-red-gradient)',
        borderRadius: '5px'
      },
      text: {
        fill: 'var(--color-white)',
        fontSize: '15px',
        opacity: '0.6',
        fontWeight: '550'
      }
    }

    return (
          <ResponsiveContainer width={258} height={263} >

            <LineChart
                data={graphData}
                style={SessionsStyles.LineChart}
                margin={{top: 20, right: 15, left: 15, bottom: 20}}
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
                style={{border: 'none', outline: 'none'}}
                cursor={false}
                wrapperStyle={{outline: 'none'}}
              />

              <Line
                type="natural"
                dataKey="sessionLength"
                stroke="var(--color-white)"
                strokeWidth={1.6} 
                dot={false}
              />

            </LineChart>

          </ResponsiveContainer>
    );
  }
  return null;
};

export default Sessions;
