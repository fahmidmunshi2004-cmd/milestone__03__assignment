//================== Problem 04: Text Analyzer for an AI Company ====================//
function analyzeText(text) {
    if (typeof text !== "string") {
        return "Invalid";
    }
    if (text.length === 0) {
        return "Invalid";
    }
    let words = text.split(" ");
    let longestWord = "";
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    let token = text.split(" ").join("").length;
    return {
        longwords: longestWord,
        token: token
    };
}
