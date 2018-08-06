// Code your solution in this file!
function distanceFromHqInBlocks(location) {
  return Math.abs(location - 42);
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, stop) {
  return Math.abs(stop - start) * 264;
}

function calculatesFarePrice(start, stop) {
  const distance = distanceTravelledInFeet(start, stop);
  switch (true) {
    case distance > 2500:
      return 'cannot travel that far';
    case distance > 2000:
      return 25;
    case distance > 400:
      return (distance - 400) * 0.02;
    default:
      return 0;
  }
}
