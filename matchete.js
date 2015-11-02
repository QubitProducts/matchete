function matchete (value, search, delim) {
  var valueParts = getParts(value, delim)
  var searchParts = getParts(search, delim)
  while (valueParts.length && searchParts.length) {
    if (valueParts[0].indexOf(searchParts[0]) > -1) {
      valueParts.shift()
      searchParts.shift()
    } else {
      valueParts.shift()
    }
  }
  // if we exhausted the list of our search parts
  // that means every part matches
  if (searchParts.length === 0) {
    return true
  }
  // otherwise, it means we didn't find what we're looking for
  return false
}

function getParts (value, delim) {
  return String(value).toLowerCase().split(delim || ' ').filter(rejectIfEmpty)
}

function rejectIfEmpty (value) {
  return String(value).length !== 0
}

module.exports = matchete
