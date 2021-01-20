let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t"]
let note = "heeeeeeereisat"

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
  for (let i = 0; i < note.length; i++) {
      let noteChar = note[i];
      let noteCount = noteGram[noteChar]
      let magCount = magGram[noteChar];
      if (magCount - noteCount < 0) {
        console.log("HELL NO")
      }
      console.log("Letter:", noteChar, "Note Count:", noteCount, "Mag Count:", magCount)

  }
}

canBuildNote(magazine, note)
