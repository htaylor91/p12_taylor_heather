import useAxios from '../../hooks/useAxios';
import ActivityModel from '../../models/ActivityModel';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ActivityTooltip from './ActivityTooltip';
import Loading from '../Loading';
import Error from '../Error'

/**
 * @external BarChart
 * @see {@link https://recharts.org/en-US/api/BarChart}
 */

const ActivityStyles = {
  text: {
    fontSize: '15px',
    fontWeight: '600',
  }
}

/**
 * @component
 * @see {@link external:BarChart}
 */
function Activity(){
  const {loading, error, data} = useAxios('activityService');
  
  if(loading) return <Loading/>
  if(error) return <Error/>
  if(data){
      const activityData = new ActivityModel(data);
      const graphData = activityData?.activity;

      return (
          <ResponsiveContainer
            width="100%"
            height="100%"
            >
            <BarChart
            alignSelf='center'
            data={graphData}
            barGap={8}
            margin={{top: 5, right: 0, left: 20, bottom: 5}}
            >

            <text
              x={20}
              y={20}
              fill="var(--color-blue-dark)"
              style={ActivityStyles.text}
            >
              <tspan>Activité quotidienne</tspan>
            </text>

            <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize={10}
                height={80}
                wrapperStyle={{right: 0, left: 20}}
              />

              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false}
              />

              <XAxis 
                dataKey="day"
                tickLine={false}
                height={50}
                tickMargin={16}
                />

              <YAxis 
                dataKey="kilograms" 
                yAxisId="kilograms" 
                orientation='right'
                tickCount={3}
                domain={['dataMin - 1', 'dataMax + 2']}
                tickLine={false}
                axisLine={false}
                width={50}
                tickMargin={16}
                />

              <YAxis 
                dataKey="calories"
                yAxisId="calories"
                orientation='left'
                domain={[0, 'dataMax + 20']}
                hide
                />

              <Tooltip
                offset={60}
                label={false}
                content={<ActivityTooltip/>}
                wrapperStyle={{outline: 'transparent'}}
                cursor={{
                  fill: 'var(--color-gray-semi-transparent)',
                  strokeOpacity: 0.2,
                }}
              />

              <Bar 
                name="Poids (kg)" 
                dataKey="kilograms" 
                yAxisId="kilograms" 
                barSize={7}
                radius={[20, 20, 0, 0]}
                fill="var(--color-gray-dark)" />

              <Bar 
                name="Calories brûlées (kCal)" 
                dataKey="calories" 
                yAxisId="calories" 
                barSize={7}
                radius={[20, 20, 0, 0]}
                fill="var(--color-red-dark)" />

            </BarChart>
          </ResponsiveContainer>
      );
  }
}

export default Activity;