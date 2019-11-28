let rocket: Rocket;

var rocket1 = [10,30,80];
var rocket2 = [30,40,50,50,30,10];

let rockets = document.querySelector("#rockets");
rockets.addEventListener("click", createRocket, false);

function createRocket(e){
    if(e.target !== e.currentTarget){
        let clickedItem = e.target.id;        
        $("#rocketInfo" +clickedItem).removeClass("d-none"); 
        let rocketId: string = document.getElementById('rocketId'+clickedItem).textContent;
        let rocketPw: any = document.getElementById('rocketPw'+clickedItem).textContent;
        rocket = new Rocket(rocketId, rocketPw);   
        console.log(rocket);    
    }
    e.stopPropagation();
}

let a = 0;
let b = 0;
let sum1 = 0; 
let sum2 = 0;

function acelerateRocket1(){

    let speedRocket1: any = document.getElementById('power1').innerHTML; 
    let speed1 = parseInt(speedRocket1);  

    if(a < rocket1.length){    
        if(speed1 >= sum1){
            sum1 = sum1 + rocket1[a];
            document.getElementById('power1').innerHTML = sum1;           
            a++               
        }                    
    }    
}

function acelerateRocket2(){
    let speedRocket2: any = document.getElementById('power2').innerHTML; 
    let speed2 = parseInt(speedRocket2);  

    if(b < rocket2.length){    
        if(speed2 >= sum2){
            sum2 = sum2 + rocket2[b];
            document.getElementById('power2').innerHTML = sum2;           
            b++               
        }                    
    }         
}

function breakRocket1(){
    let speedRocket1: any = document.getElementById('power1').innerHTML; 
    let speed1 = parseInt(speedRocket1);  

    if(a <= rocket1.length && a > 0){    
        if(speed1 <= sum1){
            a-- 
            sum1 = sum1 - rocket1[a];
            document.getElementById('power1').innerHTML = sum1;           
                          
        }                    
    }    
}

function breakRocket2(){
    let speedRocket2: any = document.getElementById('power2').innerHTML; 
    let speed2 = parseInt(speedRocket2);  

    if(b <= rocket2.length && b > 0){    
        if(speed2 <= sum2){
            b-- 
            sum2 = sum2 - rocket2[b];
            document.getElementById('power2').innerHTML = sum2;           
                          
        }                    
    }  
}

