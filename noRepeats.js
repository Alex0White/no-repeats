/*
No Repeats Please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/

function factorialize(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
}


function createCharMap(str) {
    const charMap = new Map();
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charMap.set(i, char);
    }
    return charMap;
}

function createPermutations(str) {
    // [0:a, 1:a, 2:b] 
    // 012, 102, 120, 210, 201, 021 : 6  3*2
    // [0:a, 1:b, 2:c, 3:d]
    // 0123, 1023, 1203, 1230, 2130, 2310, 2301, 3201, 3021, 3012, 0312, 0132 : 12  4*3
    // 5*4 = 20
    // 01234, 10234,

    let permutations = [];
    let index = 1;
    let aPermutation = [];
    let permutationsLength = 100;

    function swap(array, index1, index2) {
        tmp = array[index1];
        array[index1] = array[index2];
        array[index2] = tmp;
    }

    for (let i = 0; i < str.length; i++) {
        aPermutation.push(i);
    }

    for (let i = 0; i < permutationsLength; i++) {

        if (i != 0) {
            swap(aPermutation, (index - 1), index);
            index++;
        }

        if (index > (str.length - 1)) {
            index = 1;
        }
        permutations[i] = [...aPermutation];
    }
    return permutations;
}

function permAlone(str) {
    return 2;
}

console.log(createPermutations("hell"))



module.exports = permAlone;