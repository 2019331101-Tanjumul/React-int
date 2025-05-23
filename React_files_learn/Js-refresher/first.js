console.log("hello Tanju"); 
let a =5; 

loop: for (let i =0 ; i<10; i++){ 
    console.log(i); 
    if(i%5){ 
        console.log("Paisi re"); 
    }
    else if(i/2){ 
        console.log("Pai nai re"); 
    }
    else{ 
        console.log("This is a loop "); 
        break loop; 
    }
} 
