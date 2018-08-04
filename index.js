// Code your solution in this file!
function distanceFromHqInBlocks(block){
	return Math.abs(block - 42)
}

function distanceFromHqInFeet(block){
	const blocks = distanceFromHqInBlocks(block)
	return blocks*264
}

function distanceTravelledInFeet(start, end){
	const blocksTravelled = Math.abs(start-end)
	return blocksTravelled*264
}

function calculatesFarePrice(start, destination){
	const howManyfeet = distanceTravelledInFeet(start, destination);
	if (howManyfeet > 400 && howManyfeet < 2000){
		console.log(howManyfeet)
		return (howManyfeet - 400) * 2 / 100
	} else if (howManyfeet > 2000 && howManyfeet < 2500){
		return 25
	} else if (howManyfeet < 400){
		return 0;
	} else if (howManyfeet > 2500){
		return 'cannot travel that far'
	}
}