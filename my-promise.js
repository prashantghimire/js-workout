function MyPromise(task) {

    this.onThen = () => { };
    this.onError = () => { };

    let resolve = (arg) => {
        this.onThen(arg);
    };

    let reject = (err) => {
        this.onError(err);
    };

    task(resolve, reject);
}

MyPromise.prototype.then = function (onThen) {
    this.onThen = onThen;
    return this;
};


MyPromise.prototype.catch = function (onError) {
    this.onError = onError;
    return this;
};

const proms = new MyPromise(function (resolve, reject) {

    var random = Math.random();

    if (random > 0.5) {
        setTimeout(() => {
            resolve('done');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('my error');
        }, 2000);
    }

});

proms
    .then(function (res) {
        console.log('should be done', res);
        console.log('end');
    })
    .catch((err) => {
        console.log('error', err);
    });