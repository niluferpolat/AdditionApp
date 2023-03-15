import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

function App() {
	//initial states
	const [firstValue, setFirstValue] = useState(0);
	const [secondValue, setSecondValue] = useState(0);
	const [result, setResult] = useState(0);

	//input handle events
	const handleFirstValue = (event) => {
		setFirstValue(event.target.value);
	};
	const handleSecondValue = (event) => {
		setSecondValue(event.target.value);
	};
	//button handle events
	const handleCalculate = () => {
		setResult(parseInt(firstValue) + parseInt(secondValue));
	};
	const handleClear = () => {
		setResult(0);
		setFirstValue(0);
		setSecondValue(0);
	};
	const handleRandom = () => {
		setFirstValue(Math.floor(Math.random() * 100) + 1);
		setSecondValue(Math.floor(Math.random() * 100) + 1);
	};
	return (
		<div>
			<h4 className="title">RESULT</h4>
			<p className="title">{result}</p>
			<div className="total-container">
				<div className="input-container">
					<input
						type="number"
						value={firstValue}
						onChange={handleFirstValue}
						style={{ marginRight: "1rem" }}
					/>
					<AddIcon />
					<input
						type="number"
						value={secondValue}
						onChange={handleSecondValue}
						style={{ marginLeft: "1rem" }}
					/>
				</div>
				<div className="button-container">
					<button onClick={handleRandom} className="random-button">
						RANDOM
					</button>
					<button onClick={handleClear} className="clear-button">
						CLEAR
					</button>
					<button onClick={handleCalculate} className="calculate-button">
						CALCULATE
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
