// var msec = 0;
// var sec = 0;
// var min = 0;
// var hours = 0;
// var msecHead = document.getElementById("msec")
// var secHead = document.getElementById("sec")
// var minHead = document.getElementById("min")
// var hoursHead = document.getElementById("hours")
// var interVal;
// function timer(){
//     msec++
//     msecHead.innerHTML = msec
//     if(msec >= 100){
//         sec++
//         secHead.innerHTML = sec 
//         msec = 0
//     }else if(sec >= 60){
//         min++
//         minHead.innerHTML = min
//         sec = 0
//     }else if(min >= 60){
//         hours++
//         hoursHead.innerHTML = hours
//         min = 0
//     }
// }
// var btnStartDis = document.getElementById("startBtn")
// function start(){
//     interVal = setInterval(timer,10)
//     btnStartDis.disabled = true
// }
// function stop(){
//     clearInterval(interVal)
//     btnStartDis.disabled = false
// }
// function reset(){
//     msec = 0
//     sec = 0
//     min = 0
//     hours = 0
//     msecHead.innerHTML = msec
//     secHead.innerHTML = sec
//     minHead.innerHTML = min
//     hoursHead.innerHTML = hours
//     clearInterval(interVal)
// }



//Youtube

// var hr = 0;
// var min = 0;
// var sec = 0;
// var count = 0;
// var timer = false 

// function start(){
//     timer = true
//     stopWatch()
// }
// function stop(){
//     timer = false
// }
// function reset(){
//     timer = false
// hr = 0
// min = 0
// sec = 0
// count = 0
//     document.getElementById("hr").innerHTML = hr 
//     document.getElementById("min").innerHTML = min
//     document.getElementById("sec").innerHTML = sec
//     document.getElementById("count").innerHTML = count
    
// }
// function stopWatch(){
//     if(timer == true){
//         count++
//         if(count >= 100){
//             sec++
//             count = 0
//             if(sec >= 60){
//                 min++
//                 sec = 0
//                 if(min >= 60){
//                     hr++
//                     min = 0
//                 }
//             }
//         }

//         document.getElementById("hr").innerHTML = hr
//         document.getElementById("min").innerHTML = min
//         document.getElementById("sec").innerHTML = sec
//         document.getElementById("count").innerHTML = count; 
//         setTimeout("stopWatch()",10)
//     }
// }







// ek or

var hr = 0
var mn = 0
var sc = 0
var count = 0
var hrHead = document.getElementById("hr")
var mnHead = document.getElementById("mn")
var scHead = document.getElementById("sc")
var countHead = document.getElementById("count")
var startBtn = document.getElementById("startBtn")
var interVal
function timer(){
    count++
    countHead.innerHTML = count
    if(count >= 100){
        sc++
        scHead.innerHTML = sc
        count = 0
    }else if(sc >= 60){
        mn++
        mnHead.innerHTML = mn
        sc = 0
    }else if(mn >= 60){
        hr++
        hrHead.innerHTML = hr
        mn = 0
    }
}
function start(){
 interVal = setInterval(timer,10)
 startBtn.disabled = true
}
function stop(){
    clearInterval(interVal)
startBtn.disabled = false
}
function reset(){
    hr = "00"
    mn = "00"
    sc = "00"
    count = "00"
    hrHead.innerHTML = hr
    mnHead.innerHTML = mn
    scHead.innerHTML = sc
    countHead.innerHTML = count
    stop()
}




































