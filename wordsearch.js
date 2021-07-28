const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = transpose(letters).map(ls=> ls.join(""))
        for (l of verticalJoin) {
            if (l.includes(word)) return true
        
    }
    return false;
}

// transpose for verticalJoin
const transpose = function (matrix) {
    //assign new array
    const result = [];
    for (let i = 0; i< matrix[0].length; i++) {
        result.push([]);
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i]
        }
    } return result;
}

module.exports = wordSearch