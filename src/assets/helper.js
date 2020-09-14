export const priceDecimal = (string) => {

	if (string !== null && string !== undefined) {
		string = string.toString().replace('.00', '');

		string += '';
		let x = string.split('.');
		let x1 = x[0];
		let x2 = x.length > 1 ? '.' + x[1] : '';
		let rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + '.' + '$2');
		}
		return x1 + x2;
	} else {
		return '-';
	}
};

export const formatDate = (date) => {
	let data = Date.parse(date);
	let newDate = new Date(data);
	let day = newDate.getDate();
	let months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	let month = months[newDate.getMonth()];
	let year = newDate.getFullYear();
	let hours = newDate.getHours();
	let minutes = newDate.getMinutes()
	return `${day}/${month}/${year} ${hours}:${minutes}`
}

export const onlyNumberKey = (evt) => {
	let ASCIICODE = (evt.which) ? evt.which : evt.keyCode;
	if (ASCIICODE > 31 && (ASCIICODE < 48 || ASCIICODE > 57))
		return false;
	return true;
}
