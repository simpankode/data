for (let i = 0; i < 10; i++) {
    if(i == 5){
        break;
    }
    console.log('Counter -> ' + i);
}

let j = 0;
while (j < 10) {
    if(j == 5){
        break;
    }
    console.log('Counter -> ' + j);
    j++;
}

let x = 0;
do {
    if(x == 5){
        break;
    }
    console.log('Counter -> ' + x);
    x++;
} while (x < 10);