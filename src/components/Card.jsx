import "./Card.css";

const Card = ({ name, details, priority }) => {
	const priorityClass =
		priority.toLowerCase() === "alta"
			? "high"
			: priority.toLowerCase() === "media"
			? "medium"
			: priority.toLowerCase() === "baja"
			? "low"
			: "";

	return (
		<section className={`card-container ${priorityClass}`}>
			<h3>Tarea: {name}</h3>
			<h4>Detalles: {details}</h4>
			<h4>Prioridad: {priority}</h4>
		</section>
	);
};

export default Card;
