let getSecondLargest = nums => {
    let largest = 0;
    for (let i = 0; i <= nums.length - 1; i++) {
        if (largest < nums[i]) {
            largest = nums[i];
        }
    }
    let secondLargest = 0;
    for (j = 0; j <= nums.length - 1; j++) {
        if (secondLargest < nums[j] && nums[j] < largest) {
            secondLargest = nums[j];
        }
    }
    return secondLargest;
}

let input = [2, 3, 10, 6, 100, 100];

console.log(getSecondLargest(input));


// another solution

// let getSecondLargest = nums => {
//     let removeDuplicate = [];
//     for (let i = 0; i <= nums.length - 1; i++) {
//         if (removeDuplicate.indexOf(nums[i]) === -1) {
//             removeDuplicate.push(nums[i]);
//         }
//     }
//     let descendingSort = removeDuplicate.sort(function (a, b) { return b - a });
//     return descendingSort[1];
// }