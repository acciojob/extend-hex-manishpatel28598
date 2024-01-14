const extendHex = (shortHex) => {
  // write your code here
	let new hex = "#"
    for (let index = 1; index < 4; index++) {
    	hex=shortHex[i]+shortHex[i];
    }
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
