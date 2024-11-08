import "./Card.css";

const Card = ({ name, details, priority }) => {
	return (
		<section className="card-container">
			<h3>Tarea: {name}</h3>
			<h4>Detalles: {details}</h4>
			<h4>Prioridad: {priority}</h4>
		</section>
	);
};

export default Card;
