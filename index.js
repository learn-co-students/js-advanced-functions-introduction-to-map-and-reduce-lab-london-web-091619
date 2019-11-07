function mapToNegativize(sourceArray) {
  const result = []
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] * -1)
  }
  return result
}

function mapToNoChange(sourceArray) {
  const result = []
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i])
  }
  return result
}

function mapToDouble(sourceArray) {
  const result = []
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] * 2)
  }
  return result
}

function mapToSquare(sourceArray) {
  const result = []
  for (let i = 0; i < sourceArray.length; i++) {
    result.push(sourceArray[i] ** 2)
  }
  return result
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let memo = startingPoint
  for (let item of sourceArray) {
    memo += item
  }
  return memo
}

function reduceToAllTrue(sourceArray) {
  for (let item of sourceArray) {
    if (!item) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(sourceArray) {
  for (let item of sourceArray) {
    if (item) {
      return true
    }
  }
  return false
}
