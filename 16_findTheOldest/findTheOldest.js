function getAge(obj) {
	if ("yearOfDeath" in obj)
		return obj.yearOfDeath - obj.yearOfBirth;
	else
		return new Date().getFullYear() - obj.yearOfBirth;
}
const findTheOldest = function(arr) {
	return arr.reduce((accum, value) => {
		if (getAge(value) > getAge(accum))
			accum = value;
		return accum;
	});
};

// Do not edit below this line
module.exports = findTheOldest;
