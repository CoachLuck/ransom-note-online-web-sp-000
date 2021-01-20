let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
function buildHistogram(mag) {
  // define a new histogram
  // loop through the chars in the magazine
    // add/update the node in the historgram

  let start = mag[0]
  let hist = `{${mag[0]}: 0 }`
  console.log(hist)
  for (let i = 0; i < mag.length; i++) {
    let current = mag[i]
    console.log(hist[current])
  }
}

function canBuildNote() {

}

buildHistogram(magazine)
