// Code your solution in this file!
function distanceFromHqInBlocks(end, origin){
  origin = (typeof origin !== 'undefined') ?  origin : 42;
 return Math.abs(origin-end);
}

function distanceFromHqInFeet(end, origin){
  return (distanceFromHqInBlocks(end, origin)*264);
}

function distanceTravelledInFeet(origin, end){
  return distanceFromHqInFeet(end, origin);
}

function calculatesFarePrice(origin, end){
  const dist = distanceTravelledInFeet(origin, end)
  switch (true) {
    case (dist <= 400):
        return 0
        break;
    case (400< dist && dist <=2000):
        return (dist - 400) * .02
        break;
    case (dist >= 2500):
        return 'cannot travel that far'
        break;
    case (dist >= 2000):
        return 25
        break;
  }
}
