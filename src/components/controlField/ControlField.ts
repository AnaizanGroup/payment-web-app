/* eslint-disable @typescript-eslint/no-unused-vars */
function animeSpan(id: string): void {
	const span: any = document.getElementById(id);

	span.style.animation = 'dongle 1s';
	setTimeout(() => {
		span.style.animation = 'none';
	}, 1000);
}

// function qui permet de vérifier la validité des champs
export function ControlField(
	value: any,
	idError: string,
	type: string
): boolean {
	const regex = /^[a-zA-ZéèêïÏ-]*$/;
	const regexTel = /[0-9]*$/;
	const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
	const regexAlphaN = /^[a-zA-Z0-9]*$/;
	const regexAlphaN2 = /[0-9]{2}$/;
	const regexAn = /^[0-9]*$/;
	const regexC = /^[A-Z]*$/;
	const regexArea = /^[a-zA-Z0-9_.'\s]*$/;
	const error: any = document.getElementById(idError);
	let output = false;
	if (type === 'text') {
		if (value === '') {
			error.textContent = 'Ce champ est vide...';
			animeSpan(idError);
			output = false;
		} else if (value.length < 3) {
			error.textContent = 'Ce champs est trop court...';
			animeSpan(idError);
		} else if (!regex.test(value)) {
			error.textContent = 'format invalide...';
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'tel') {
		if (value === '') {
			error.textContent = 'Ce champ est vide...';
			animeSpan(idError);
		} else if (value.length < 9) {
			error.textContent = 'le numéro est trop court...';
			animeSpan(idError);
		} else if (!regexTel.test(value)) {
			error.textContent = 'format du numéro invalide...';
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'email') {
		if (value === '') {
			error.textContent = 'Ce champ est vide...';
			animeSpan(idError);
		} else if (!regexEmail.test(value)) {
			error.textContent = "format de l'email est invalide...";
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'date') {
		if (value === '') {
			error.textContent = 'Ce champ est vide...';
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'pwd') {
		if (value === '') {
			error.textContent = 'Respecter le format...';
			animeSpan(idError);
		} else if (value.length < 6) {
			error.textContent = 'Respecter le format...';
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'alpha') {
		if (value === '') {
			error.textContent = 'Ce champ est vide...';
			animeSpan(idError);
		} else if (value.length < 3) {
			error.textContent = 'numéro trop court...';
			animeSpan(idError);
		} else if (!regexAlphaN.test(value)) {
			error.textContent = 'le numéro de table doit ètre alphanumérique...';
		} else {
			error.textContent = '';
		}
	} else if (type === 'number') {
		if (value === '') {
			error.textContent = 'Sélectionné un année..';
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'serie') {
		if (value === '') {
			error.textContent = 'Sélectionné une série..';
			animeSpan(idError);
		} else {
			error.textContent = '';
		}
	} else if (type === 'file') {
		if (value.files[0].length === '') {
			error.textContent = 'Veuillez sélectionnez un fichier...';
		} else {
			error.textContent = '';
		}
	} else if (type === 'nb') {
		if (value === '') {
			error.textContent = 'Ce champ est vide...';
		} else if (!regexAn.test(value)) {
			error.textContent = 'Format invalide...';
		} else {
			error.textContent = '';
		}
	} else if (type === 'textArea') {
		if (value === '') {
			error.textContent = 'le champs est vide...';
		} else if (value.length < 6) {
			error.textContent = 'message trop court...';
		} else if (!regexArea.test(value)) {
			error.textContent = 'Format invalide...';
		} else {
			error.textContent = '';
		}
	}
	return output;
}

// function qui permet de voir mot de passe en clair
export const changeType = (e: any, id: string): void => {
	e.preventDefault();
	const pwd: any = document.getElementById(id);

	if (pwd.type === 'password') {
		pwd.type = 'text';
	} else {
		pwd.type = 'password';
	}
};
