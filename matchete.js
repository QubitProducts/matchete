function matchete (value, search) {
  var valueParts = String(value).toLowerCase().split(' ')
  var searchParts = String(search).toLowerCase().split(' ')
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

module.exports = matchete
