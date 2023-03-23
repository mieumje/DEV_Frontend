function cal(n, pees) {
  if (n === 2) {
    return pees[0] - pees[1]
  }

  let result = 0
  let max = v[0]

  for (let i = 1; i < pees.length; i++) {
    max = Math.max(max, v[i])
    result = Math.max(result, max - v[i])
  }

  return result === 0 ? v[0] - v[1] : result
}

n = 4
pees = [1,2,3,4]
console.log(cal(n, pees))