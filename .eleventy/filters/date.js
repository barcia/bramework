// Date filter to nunjucks.
// alternate is passed as a parameter.
// {{ myDate | date('OPTIONAL_FORMAT_STRING') }}
// List of supported tokens: https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens
// https://moment.github.io/luxon/docs/manual/formatting.html

const { DateTime } = require("luxon");

const gl = require("./modules/date-gl")


module.exports = (dateObj, format) => {
	const dt = DateTime.fromJSDate(dateObj, {zone: 'Europe/Madrid'});
	const month = gl.month[dt.toFormat("L")];
	const day = gl.day[dt.toFormat("c")];

	switch (format) {
		case 'ISO':
			return dt.toISO();
		case 'ISODate':
			return dt.toISODate();
		case 'ISOTime':
			return dt.toISOTime();
		case 'slug':
			return dt.toFormat(`yyyy'/'LL`);
		case 'date':
			return dt.toFormat(`dd '${month}' yyyy`);
		case 'datetime':
			return dt.toFormat(`dd '${month}' yyyy 'ás' T`);
		default:
			return dt.toFormat(`dd '${month}' yyyy`);
	}
};
