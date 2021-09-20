const loremIpsum = require('lorem-ipsum').LoremIpsum

const lorem = new loremIpsum({
    sentencesPerParagraph: {
        max: 16,
        min: 4
      },
      wordsPerSentence: {
        max: 32,
        min: 4
      }
})
module.exports = lorem

