// this is a comment
console.log("hello world")
var rangeSimple = function(low, high) {
	var tempArray = [];
	for (tempVar = low; tempVar <= high; tempVar++) {
		if (true /* todo  replace with stuff to check if prime*/) {
			tempArray.push(tempVar);
		}
	}
	return tempArray;
}

tempArray2 = rangeSimple(5,10);
console.log(tempArray2);