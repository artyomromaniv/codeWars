function factorial(n){
	return (n !== 1 && n !== 0) ? (n * factorial(n - 1)) : 1;
}

