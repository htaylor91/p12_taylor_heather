import PerformanceModel from '../models/PerformanceModel.js';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import useAxios from '../hooks/useAxios';
import Error from './Error';
import Loading from './Loading';

/**
 * @component
 */
function Performance() {
  const {loading, error, data} = useAxios('performanceService');

  if(loading) return <Loading />
  if(error) return <Error />
  if(data){

    const performanceData = new PerformanceModel(data);
    const graphData = performanceData?.performance;

    const PerformanceStyles = {
      RadarChart: {
        backgroundColor: 'var(--color-gray-dark)',
        borderRadius: '5px',
      },
      PolarAngleAxis: {
        padding: '10px', 
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
                startAngle={-150}
                endAngle={210}
                margin={{ top: 25, right: 30, left: 30, bottom: 25 }}
              >

                  <PolarGrid 
                    gridType="polygon"
                    radialLines={false}
                    />

                  <PolarAngleAxis 
                    dataKey="kind"
                    axisLine={false}
                    tick={{ fill: "var(--color-white)", padding: '10px'}}
                    style={PerformanceStyles.PolarAngleAxis}
                  />

                  <PolarRadiusAxis
                    tick={false}
                    tickCount={6}
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