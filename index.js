// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => {
  return Math.abs(blocks - 42)
}

const distanceFromHqInFeet = (distance) => {
  return distanceFromHqInBlocks(distance) * 264
}

const distanceTravelledInFeet = (a,b) => {
  return Math.abs(a-b) * 264
}

const calculatesFarePrice = (start, destination) => {
  let distance = distanceTravelledInFeet(start,destination)
  let cost = 0
  if (distance <= 400) {
    return 0
  } else if (distance <= 2000) {
    return ((distance - 400) * 0.02)
  } else if (distance >= 2000 && distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}
