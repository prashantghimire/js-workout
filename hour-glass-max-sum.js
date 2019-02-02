function hourglassSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        let i1 = i;
        let i2 = i + 1;
        let i3 = i + 2;
        for (let j = 0; j < arr[i].length - 2; j++) {
            let r1 = arr[i1][j] + arr[i1][j + 1] + arr[i1][j + 2];
            let r2 = arr[i2][j + 1];
            let r3 = arr[i3][j] + arr[i3][j + 1] + arr[i3][j + 2];
            let box = r1 + r2 + r3;
            result.push(parseInt(box));
        }
    }

    let max = result[0];
    for (let i = 0; i < result.length; i++) {
        if (result[i] > max) {
            max = result[i];
        }
    }

    return max;
}

let arr =
    [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

let arr2 = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
];

let arr3 = [
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
]

let sum = hourglassSum(arr3);

console.log(sum);
