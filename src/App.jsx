import Card from "./components/Card";
import { useState } from "react";
import Form from "./components/Form";
import { validateInputs } from "./logic";

function App() {
	const [currentTask, setCurrentTask] = useState({
		name: "",
		priority: "",
	});
	const [tasks, setTasks] = useState([]);

	const handleOnChange = (event) => {
		const { name, value } = event.target;
		setCurrentTask({ ...currentTask, [name]: value });
	};

	const handleOnSubmit = (event) => {
		event.preventDefault();

		if (!validateInputs(currentTask)) {
			return;
		}

		setTasks([...tasks, currentTask]);
		setCurrentTask({ name: "", details: "", priority: "" });
	};

	return (
		<main className="main-container">
			<h1>Lista de Tareas</h1>
			<Form
				currentTask={currentTask}
				handleOnChange={handleOnChange}
				handleOnSubmit={handleOnSubmit}
			/>
			<div className="cards-container">
				{tasks.map((task, index) => (
					<Card
						key={index}
						name={task.name}
						details={task.details}
						priority={task.priority}
					/>
				))}
			</div>
		</main>
	);
}

export default App;
