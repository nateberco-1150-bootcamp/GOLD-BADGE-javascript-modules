setTimeout(() => console.log('this is a test of timeouts!'), 1000);

let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        if (false){
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
})

promise
    .then(bla => console.log(bla)) //bla = 'success'
    .catch(err => console.log(err));

    console.log('this code is after our promise & .then chain!');

function playFunc(){
    return 5;
}

console.log(playFunc());