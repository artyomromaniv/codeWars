function checkAlive(health) {
	if (health <= 0 && health >= -10) {
		return false
	} else if (health > 0 && health <= 10) {
		return true
	}
}
console.log(checkAlive(0));