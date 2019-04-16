var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  name = kittens.push('Ralph')
  return name
}
function destructivelyPrependKitten (name) {
  name = kittens.unshift('Bob')
  return name
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}
function appendKitten(name) {
  name = [...kittens, ]
}