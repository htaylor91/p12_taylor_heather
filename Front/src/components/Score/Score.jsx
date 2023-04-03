import { RadialBarChart, RadialBar, PolarAngleAxis, Legend, ResponsiveContainer } from 'recharts';
import ScoreLegend from './ScoreLegend';
import PropTypes from 'prop-types';

const ScoreStyles = {
  RadialBarChart: {
    backgroundColor: 'var(--color-gray-lightest)',
    borderRadius: '5px',
  },
  text: {
    color: 'var(--color-blue-dark)',
    fontSize: '15px',
    fontWeight: '600'
  }
}

/**
 * @component
 */
function Score({score}){
  const data = [{score: `${score}`, fill: 'var(--color-red)'}];

    return (
      <ResponsiveContainer 
        width={258}
        height={263}
      >
      <RadialBarChart
        style={ScoreStyles.RadialBarChart}
        innerRadius="60%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          dataKey="score"
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          label={false}
          background={false}
          dataKey="score"
          angleAxisId={0}
          cornerRadius={5}
        />
        <text 
          style={ScoreStyles.text}>
          <tspan x={29} y={34}>Score</tspan>
        </text>
        <Legend
          content={<ScoreLegend score={score} />}
          verticalAlign="middle"
        />
      </RadialBarChart>
    </ResponsiveContainer>
    );

}

Score.propTypes = {
  /**
   * The score of the user.
   */
  score: PropTypes.number,
};

export default Score;