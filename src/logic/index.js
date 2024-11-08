export const validateInputs = (currentTask) => {
	const nameRegex = /^[^\s].{2,}$/;
	const detailsRegex = /^.{6,}$/;

	if (!nameRegex.test(currentTask.name)) {
		alert("El nombre de la tarea es inválido");
		return false;
	}
	if (!detailsRegex.test(currentTask.details)) {
		alert("Los detalles deben tener al menos 6 caracteres");
		return false;
	}
	return true;
};
