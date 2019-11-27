var rocket;
var rocket1 = [10, 30, 80];
var rocket2 = [30, 40, 50, 50, 30, 10];
var rockets = document.querySelector("#rockets");
rockets.addEventListener("click", createRocket, false);
function createRocket(e) {
    if (e.target !== e.currentTarget) {
        var clickedItem = e.target.id;
        $("#rocketInfo" + clickedItem).removeClass("d-none");
    }
    e.stopPropagation();
}
function acelerateRocket(i) {
    var speedRocket = document.getElementById('power' + i).innerHTML;
    var speed = parseInt(speedRocket);
    //let sum1 = 0; 
    //let sum2 = 0; 
    if (i == 1) {
        for (var _i = 0, rocket1_1 = rocket1; _i < rocket1_1.length; _i++) {
            var e = rocket1_1[_i];
            if (e > speed) {
                speed = speed + e;
                console.log(speed);
                document.getElementById('power' + i).innerHTML = speed;
                break;
            }
            else {
                continue;
            }
        }
    }
    if (i == 2) {
        for (var _a = 0, rocket2_1 = rocket2; _a < rocket2_1.length; _a++) {
            var e = rocket2_1[_a];
            if (e > speed) {
                speed = speed + e;
                console.log(speed);
                document.getElementById('power' + i).innerHTML = speed;
                break;
            }
            else {
                continue;
            }
        }
    }
}
function breakRocket(i) {
    var speedRocket = document.getElementById('power' + i).innerHTML;
    var speed = parseInt(speedRocket);
    var rocket1Reverse = rocket1.reverse();
    var rocket2Reverse = rocket2.reverse();
    if (i == 1) {
        for (var _i = 0, rocket1Reverse_1 = rocket1Reverse; _i < rocket1Reverse_1.length; _i++) {
            var e = rocket1Reverse_1[_i];
            if (e < speed) {
                speed = speed - e;
                console.log(speed);
                document.getElementById('power' + i).innerHTML = speed;
                break;
            }
            else {
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
