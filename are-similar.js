function similar(a, b) {
    if (a.length !== b.length) return false;

    let map = [];

    for (let i = 0; i < a.length; i++) {
        let currentA = a[i];
        let currentB = b[i];

        if (currentA !== currentB) {

            if (map.length > 1) {
                return false;
            }

            map.push({
                index: i,
                values: { a: currentA, b: currentB }
            });
        }
    }

    if (map.length === 0){
        return true;        
    }

    if (map.length === 2) {
        let first = map[0];
        let second = map[1];
        if (first.values.a === second.values.b && first.values.b === second.values.a) {
            return true;
        }
    }

    return false;
}

let sim = similar([1, 1, 2], [1, 2, 3]);
console.log(sim);