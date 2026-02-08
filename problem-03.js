//================== Problem 03:  BCS Final Score Calculator ====================//
function finalScore(result) {
    if (typeof result !== "object") {
        return "Invalid";
    }

    if (result === null) {
        return "Invalid";
    }

    if (Array.isArray(result)) {
        return "Invalid";
    }

    let right = result.right;
    let wrong = result.wrong;
    let skip = result.skip;
    if (right + wrong + skip !== 100) {
        return "Invalid";
    }

    let score = right - (wrong * 0.5);
    return Math.round(score);
}