

const durationInput = document.querySelector("#duration")
const startButton = document.querySelector("#start")
const pauseButton = document.querySelector("#pause")
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter)

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        console.log("timer started")
        duration = totalDuration;
    },

    onTick(timeRemaining){
        let offset = perimeter * timeRemaining / duration - perimeter
        circle.setAttribute('stroke-dashoffset',offset)       
    },

    onComplete(){
        console.log("completed")
    }
});

