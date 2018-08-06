// Code your solution in this file!

// one block is 264 feet

function distanceFromHqInBlocks(block) {
  return Math.abs(block - 42)
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264

}

function distanceTravelledInFeet(starting, ending) {
  return (Math.abs(starting - ending)) * 264
}

function calculatesFarePrice (starting, ending) {
  let travelled = distanceTravelledInFeet(starting, ending)
  if (travelled <= 400) {
    return 0
  }
  else if (travelled < 2000) {
    return (travelled - 400) * 0.02
  }
  else if (travelled > 2500){
    return 'cannot travel that far'
  }
  else if (travelled > 2000) {
    return 25
  }
}
