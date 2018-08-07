function distanceFromHqInBlocks(pickup){
  return Math.abs(pickup - 42)
}

function distanceFromHqInFeet(pickup){
   const blocks = distanceFromHqInBlocks(pickup)
   return blocks * 264
}

function distanceTravelledInFeet(start, end) {
  const distTravelled = Math.abs(start-end)
  return distTravelled * 264;
}

function calculatesFarePrice(start, end) {
  const traveled = distanceTravelledInFeet(start, end);
  if (traveled > 400 && traveled < 2000){
  		console.log(traveled)
  		return (traveled - 400) * 2 / 100
    } else if (traveled > 2000 && traveled < 2500) {
      return 25;
    } else if (traveled < 400) {
      return 0;
    } else if (traveled > 2500) {
      return "cannot travel that far";
    }
}
