function isPalindrome(word) {
	// Write your algorithm here
}

// Add your pseudocode here
function isPalindrome(string) {
	let rev = string.split("");
	console.log(rev);
	let reservedString = rev.reverse().join("");
	console.log(reservedString);
	if (string === reservedString) {
		return true;
	} else {
		return false;
	}
}

isPalindrome("madam");
//Add written explanation of your solution here

// You can run `node index.js` to view these console logs
if (require.main === module) {
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", isPalindrome("racecar"));

	console.log("");

	console.log("Expecting: false");
	console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
