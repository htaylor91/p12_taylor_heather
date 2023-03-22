
import useAxios from '../../hooks/useAxios';
import ActivityModel from '../../models/ActivityModel';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ActivityTooltip from './ActivityTooltip';

const ActivityStyles = {
  text : {
    fontSize: '15px',
    fontWeight: '600',
  }
}

function Activity(){
  
  const [loading, error, data] = useAxios('activityService');
  
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  if(data){
      const activityData = new ActivityModel(data);
      const graphData = activityData?.activity;

      return (
          <ResponsiveContainer 
            aspect="2.61"
            width={825}
            height={320}
          >

            <BarChart
            width={825}
            height={320}
            data={graphData}
            barGap={8}
            margin={{top: 5, right: 30, left: 20, bottom: 5,}}
            >

            <Legend
                verticalAlign="top"
                align="right"
                iconType="circle"
                iconSize="10"
                height={80}
              />
            <text
              x={30}
              y={38}
              fill="var(--color-blue-dark)"
              style={ActivityStyles.text}
            >
            <tspan>Activité quotidienne</tspan>
            </text>

              <CartesianGrid strokeDasharray="3 3" vertical={false}/>
              <XAxis 
                dataKey="day"
                tickLine={false}
                />

              <YAxis 
                dataKey="kilograms" 
                yAxisId="kilograms" 
                orientation='right'
                tickCount={3}
                domain={['dataMin - 2', 'dataMax + 1']}
                tickLine={false}
                axisLine={false}
                />

              <YAxis 
                dataKey="calories"
                yAxisId="calories" 
                hide/>

              <Tooltip
                offset={50}
                label={false}
                content={<ActivityTooltip />}
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
                radius={[3, 3, 0, 0]}
                fill="var(--color-gray-dark)" />

              <Bar 
                name="Calories brûlées (kCal)" 
                dataKey="calories" 
                yAxisId="calories" 
                barSize={7}
                radius={[3, 3, 0, 0]}
                fill="var(--color-red-dark)" />


            </BarChart>
          </ResponsiveContainer>
      );
  }
}

export default Activity;