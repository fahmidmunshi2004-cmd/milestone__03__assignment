//================== Problem 04:  Upcoming Gono Vote ====================//
function gonoVote(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    let haCount = 0;
    let naCount = 0;
    for (const vote of votes) {
        if (vote === "ha") {
            haCount++;
        } else if (vote === "na") {
            naCount++;
        }
    }
    if (haCount > naCount) {
        return true;
    } else if (haCount === naCount) {
        return "equal";
    } else {
        return false;
    }
}
