let rocket: Rocket;

var rocket1 = [10,30,80];
var rocket2 = [30,40,50,50,30,10];

let rockets = document.querySelector("#rockets");
rockets.addEventListener("click", createRocket, false);

function createRocket(e){
    if(e.target !== e.currentTarget){
        let clickedItem = e.target.id;        
        $("#rocketInfo" +clickedItem).removeClass("d-none");        
    }
    e.stopPropagation();
}

function acelerateRocket(i){

    let speedRocket: any = document.getElementById('power' +i).innerHTML; 
    let speed = parseInt(speedRocket);   
    //let sum1 = 0; 
    //let sum2 = 0; 

    if(i==1){
              
        for(let e of rocket1){ 
                      
            if(e > speed){
                speed = speed + e;    
                console.log(speed);
                document.getElementById('power' +i).innerHTML = speed;
                break;
            }else{
                continue;
            }            
        }         
    } 
    
    if(i==2){      
        for(let e of rocket2){            
            if(e > speed){
                speed = speed + e;    
                console.log(speed);
                document.getElementById('power' +i).innerHTML = speed;
                break;
            }else{
                continue;
            }            
        }         
    }     
}

function breakRocket(i){

    let speedRocket: any = document.getElementById('power' +i).innerHTML; 
    let speed = parseInt(speedRocket);
    let rocket1Reverse = rocket1.reverse();    
    let rocket2Reverse = rocket2.reverse();    

    if(i==1){      
        for(let e of rocket1Reverse){            
            if(e < speed){
                speed = speed - e;    
                console.log(speed);
                document.getElementById('power' +i).innerHTML = speed;
                break;
            }else{
                continue;
            }            
        }         
    }     
}



/* function breakRocket(i){

    let speedRocket: any = document.getElementById('power' +i).innerHTML; 

    if(speedRocket <= 100 && speedRocket > 0){
    speedRocket = parseInt(speedRocket) - 10;
    document.getElementById('power' +i).innerHTML = speedRocket;    
    }   
} */