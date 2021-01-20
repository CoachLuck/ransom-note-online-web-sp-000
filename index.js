let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
function buildHistogram(mag) {
  // define a new histogram
  // loop through the chars in the magazine
    // add/update the node in the historgram


  var arr = {}
  for (let i = 0; i < mag.length; i++) {
    arr[mag[i]] == null ? arr[mag[i]] = 1 : arr[mag[i]] = arr[mag[i]] + 1;
  }

  console.log(arr)
  return arr
}

function canBuildNote() {

}

buildHistogram(magazine)
