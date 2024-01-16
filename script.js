const extendHex = (shortHex) => {
  // write your code here
	let new hexCode = ["#"];
	iscapital = false;

	shortHex = shortHex.replace("#", "");
	for(let i=0; i<shortHex.lenght; i++){
		if(
			shortHex.charAt(i) === shortHex.charAt(i).toUpperCase()&&
			shortHex.charAt(i) !== shortHex.charAt(i).toLowercase()
		){
			isCapital = true;
		    break;
	}
}
    for (let index = 0; index < shortHex.length; index++) {
		if(isCapital){
			hexCode.push(shortHex.charAt(i).toUpperCase());
			hexCode.push(shortHex.charAt(i).toUpperCase());
		}else{
			hexCode.push(shortHex.charAt(i));
			hexCode.push(shortHex.charAt(i));
		}
	}
    	return hexCode.join("");
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
