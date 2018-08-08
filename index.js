function distanceTravelledInBlocks(start, end) {
  return Math.abs(start - end);
}

function distanceTravelledInFeet(start, end) {
  return (distanceTravelledInBlocks(start, end) * 264);
}

function distanceFromHqInBlocks(street) {
  return distanceTravelledInBlocks(street, 42);
}

function distanceFromHqInFeet(street) {
  return distanceTravelledInFeet(street, 42);
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start, end)
  if (distance < 400) {
    return 0;
  } else if (distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  }
}
