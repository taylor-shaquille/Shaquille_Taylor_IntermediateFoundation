1.

function sigma(x){
    var sum = 0;
    for (var i = 1; i <= x; i++){
        sum += i;
    }
    return sum;
}

console.log(sigma(5))


2.

function factorial(x){
    var t = 1;
    for (var i = 1; i <= x; i++){
        t *= i;
    }
    return t;
}

console.log(factorial(5))


3.

function fibonacci(x){
    var arr = [0,1];
    var sum = 0;
    if ( x == 0){
        sum = 0;
    }
    else {
        for (i = 2; i <= x; i++){
            arr.push(arr[i - 2] + arr[i - 1]);
        }    
        sum = arr[arr.length - 1]
        console.log( sum )
    }
}

fibonacci(4)

4.

function secondtolast(arr){
    if ((arr.length - 2) < 1){
        return null;
    }
    else{
        return arr[arr.length - 2];
    }
}

console.log(secondtolast([42, true, 4, "Liam", 7]));


5.

function secondtolast(arr, y){
    
    if (arr.length - y < 0){
        return null;
    }
    else{
        return arr[arr.length - y];
    }
}

console.log(secondtolast([1,3,9,7],4))


6.

function secondoflarge(arr){
    if (arr.length < 2){
        return null;
    }
    else{
        max1 = arr.indexOf(Math.max(...arr));
        arr.splice(max1, 1);
        return Math.max(...arr);
    }
}

console.log(secondoflarge([1,3,9,7]))


7.


function doubletrouble(arr){
    for (var i = 0; i < arr.length; i+= 2){
        arr.splice(i, 0 , arr[i]);
    }
    return arr;
}

console.log(doubletrouble([1,3,9,7]))




Part 2


function fib(x){
    if ( x == 0  || x == 1){
        return x
    }
    fib = fib(x - 2) + fib(x - 1);
    return fib;
}