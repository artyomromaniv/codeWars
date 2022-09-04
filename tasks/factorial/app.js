function factorial(n) {
	//your code here
	return (n !== 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(6));