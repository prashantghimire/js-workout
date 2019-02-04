/** 
 * a b k
    1 5 3
    4 8 7
    6 9 1
*/


function manipulate1(n, queries) {
    let array = new Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {
        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];
        for (let j = a; j <= b; j++) {
            array[j - 1] += k;
        }
    }

    console.log(array);

    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }


    return max;
}

function manipulate(n, queries) {

    queries = queries.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else {
            return 1;
        }
    });

    console.log(queries);



    let m = 0;

    let min_b = queries[0][1];
    let min_a = queries[0][0];

    let max_a = queries[0][0];
    let max_b = queries[0][1];

    for (let i = 0; i < queries.length; i++) {



        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];

        let next_a = queries[i + 1] && queries[i + 1][0];
        // console.log(`diff : ${b - next_a}`);


        if (next_a && next_a > b) {
            // not continuous
            console.log('not contin : ', k);
        } else {
            // continuous


            if (b < min_b) {
                min_b = b;
            }

            if (b > max_b) {
                max_b = b;
            }

            if (a < min_a) {
                min_a = a;
            }

            if (a > max_a) {
                max_a = a;
            }

            if (a > min_b) {
                // console.log('continue for : ', i);
                if (k > m) {
                    m = k;
                    continue;
                } else {
                    continue;
                }
            }

            m += k;
        }

    }

    // console.log(min_a, min_b);

    return m;
}

function manipulate2(n, queries) {

    let array = (new Array(n)).fill(0);

    for (let i = 0; i < queries.length; i++) {
        
        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];
        
        if (a - 1 >= 0 && a - 1 < array.length){
            array[a - 1] += k;
        }
        if (b >= 0 && b < array.length){
            array[b] -= k;
        }

    }

    for (let i = 1; i < array.length; i++){
        array[i] = array[i - 1] + array[i];
    }

    let max = array[0];

    for (let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    
    return max;
}

let arr = [
    [2, 3, 603],
    [1, 1, 286],
    [4, 4, 882],
];

let arr1 = [
    [1, 5, 3],
    [4, 8, 7],
    [6, 9, 1]
];

let arr3 = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15]
];


let arr4 = [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
];

let arr5 = [
    [29, 40, 787],
    [9, 26, 219],
    [21, 31, 214],
    [8, 22, 719],
    [15, 23, 102],
    [11, 24, 83],
    [14, 22, 321],
    [5, 22, 300],
    [11, 30, 832],
    [5, 25, 29], //
    [16, 24, 577],
    [3, 10, 905],
    [15, 22, 335],
    [29, 35, 254],
    [9, 20, 20],
    [33, 34, 351],
    [30, 38, 564],
    [11, 31, 969],
    [3, 32, 11],
    [29, 35, 267],
    [4, 24, 531],
    [1, 38, 892],
    [12, 18, 825],
    [25, 32, 99],
    [3, 39, 107],
    [12, 37, 131],
    [3, 26, 640],
    [8, 39, 483],
    [8, 11, 194],
    [12, 37, 502]
];

let max = manipulate2(40, arr5);
console.log(max);
