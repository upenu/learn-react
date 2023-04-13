import { useState } from 'react'

const Statistics = (props) => {
	return (
	<div>
        	<p>good {props.good}</p>
        	<p>neutral {props.neutral}</p>
        	<p>bad {props.bad}</p>
        	<p>all {props.bad + props.neutral + props.good}</p>
        	<p>average {(props.good - props.bad)/(props.good+props.neutral+props.bad)}</p>
        	<p>positive {((props.good)/(props.good+props.neutral+props.bad)) * 100}%</p>
	</div>
	)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseGoodByOne = () => setGood(good + 1)
  const increaseNeutralByOne = () => setNeutral(neutral + 1)
  const increaseBadByOne = () => setBad(bad + 1)
  return (
    <div>
	<h1>give feedback</h1>
	<button onClick={increaseGoodByOne}>good</button>
	<button onClick={increaseNeutralByOne}>neutral</button>
	<button onClick={increaseBadByOne}>bad</button>

	<h1>statistics</h1>
	<Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

