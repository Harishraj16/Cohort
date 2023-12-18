let count = 0;

function increment(){
    count++;
    updateCounter();
}

function decrement(){
    count--;
    updateCounter();
}

function updateCounter(){
    console.clear();
    console.log("Count: " + count);
}

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data',(key)=>{
    if(key == 'q' || key == 'Q'){
        process.exit();
    } else if(key == '+'){
        increment();
    } else if(key == '-'){
        decrement();
    }
});

updateCounter();
console.log('Press "+" to increment, "-" to decrement, and "Q" to quit');



/*

let count = 30;


function counter(){
    console.clear();
    console.log("Count: "+count);
    count--;

    if(count<0){
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(counter,1000);


*/