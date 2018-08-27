var primeRange = function(low, high) {
	var tempArray = [];
	for (i=low; i <= high; i++) {
		if (checkPrime(i) == true) {
			tempArray.push(i);
		}
	}
	return tempArray;
	
}

var checkPrime = function(item) {
	if (item <= 3) {
		return true;
	}
	var isPrime = true;
	for (i=3; i<item; i++) {
		if (item % i == 0) {
			isPrime = false;
		}
	}
	return isPrime;
}

var testArray = (primeRange(100,200));
console.log(testArray);