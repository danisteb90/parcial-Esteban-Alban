import "./Form.css";

const Form = ({ currentTask, handleOnChange, handleOnSubmit }) => {
	return (
		<form onSubmit={handleOnSubmit} className="form-container">
			<div className="form-inputs">
				<label htmlFor="name">Nombre de la tarea</label>
				<input
					type="text"
					name="name"
					onChange={handleOnChange}
					value={currentTask.name}
					placeholder="Mínimo 3 caracteres"
				/>
				<label htmlFor="details">Detalles</label>
				<input
					type="text"
					name="details"
					onChange={handleOnChange}
					value={currentTask.details}
					placeholder="Mínimo 6 caracteres"
				/>
				<label htmlFor="priority">Prioridad</label>
				<select
					name="priority"
					onChange={handleOnChange}
					value={currentTask.priority}
				>
					<option value="">Selecciona una prioridad</option>
					<option value="Alta">Alta</option>
					<option value="Media">Media</option>
					<option value="Baja">Baja</option>
				</select>
			</div>
			<button>Agregar</button>
		</form>
	);
};

export default Form;
