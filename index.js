let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
let note = "hereisat"

function buildHistogram(mag) {
  var arr = {}
  mag.forEach(e => arr[e] == null ? arr[e] = 1 : arr[e] = arr[e] + 1)
  return arr
}

function canBuildNote(mag, note) {
  var noteGram = buildHistogram(note.split(''))
  console.log(noteGram)
  var magGram = buildHistogram(mag)
  console.log(magGram)
}

canBuildNote(magazine, note)
