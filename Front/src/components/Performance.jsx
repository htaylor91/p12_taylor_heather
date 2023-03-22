
import PerformanceModel from '../models/PerformanceModel.js';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import useAxios from '../hooks/useAxios';


function Performance() {

  const [loading, error, data] = useAxios('performanceService');

  if(loading) return <div>Loading...</div>
  if(error) return <div>Error</div>
  if(data){
    const performanceData = new PerformanceModel(data);
    const graphData = performanceData?.performance;

    const PerformanceStyles = {
      RadarChart: {
        backgroundColor: 'var(--color-gray-dark)',
        borderRadius: '5px'
      },
      PolarAngleAxis: {
        padding: '5px', 
        fontSize: '12px'
      }
    }

    return (
        <ResponsiveContainer width={258} height={263} aspect={1} >
              <RadarChart 
                width={258} 
                height={263} 
                outerRadius={90}
                data={graphData} 
                style={PerformanceStyles.RadarChart}
                startAngle={30}
                endAngle={390}
                margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
              >

                  <PolarGrid 
                    gridType="polygon"
                    radialLines={false}/>

                  <PolarAngleAxis 
                    dataKey="kind"
                    axisLine={false}
                    tick={{ fill: "var(--color-white)", padding: '5px'}}
                    style={PerformanceStyles.PolarAngleAxis}
                  />

                  <PolarRadiusAxis
                    tick={false} 
                    axisLine={false}
                  />

                  <Radar 
                    dataKey="value"
                    stroke="var(--color-red)" 
                    fill="var(--color-red)" 
                    fillOpacity={0.7} 
                  />

              </RadarChart>
          </ResponsiveContainer>
    );
  }
}

export default Performance;