import './index.scss'

const quotes = [
    "There are no failures in life. There are only results. - Tony Robbins",
    "Fear is just an excuse. - Sue Bryce",
    "Become obsessed about the things you want. - Grant Cardone",
    "Never rest on past success! - MarrMaddix",
    "Assume that everyone around you has the best intentions. - Mel Robbins",
    "Resistance takes more energy than acceptance. - Christine Hassler",
    "Never explain your blessings. Never apologize for your blessings. Never feel quilty. Say thank you! - Matt Maddix"
]

let colors = ["teal-green", "green2", "orange", "red", "pink", "greener", "gray", "navy"]

let shuffled = shuffle(quotes)
let currentQuoteIndex = 0
let colorIndex = 0
const button = document.querySelector("button")
button.addEventListener("click", newQuote)

newQuote()

function newQuote(event) {
    document.body.className = colors[colorIndex]
    colorIndex = getNextIndex(colorIndex, colors)

    let quote = shuffled[currentQuoteIndex]
    currentQuoteIndex = getNextIndex(currentQuoteIndex, shuffled)

    document.getElementById("quoteDisplay").innerHTML = quote
}

function getNextIndex(index, arr) {
    if (index === arr.length - 1) {
        return 0
    } else {
        return index + 1
    }
}

function shuffle(arr) {
    let shuffledQuotes = []
    for (let i = arr.length - 1; i >= 0; i--) {
        let randomIndex = randomPosition(arr.length)
        // splice() adds/removes items to/from array
        let quoteArray = arr.splice(randomIndex, 1)
        // console.log("R", randomIndex, quoteArray)
        shuffledQuotes.push(quoteArray[0])
    }
    return shuffledQuotes
}

function randomPosition(length) {
    return Math.floor(Math.random() * length)
}
