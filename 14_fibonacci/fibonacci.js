const fibonacci = function(a) {
	let num = Number(a);
	if (Number.isNaN(num) || !Number.isFinite(num) || num < 0)
		return "OOPS";
	if (num === 0)
		return 0;
	a = 0;
	b = 1;
	for (let i = 1; i < num; i++) {
		let tmp = b;
		b = a + b;
		a = tmp;
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
