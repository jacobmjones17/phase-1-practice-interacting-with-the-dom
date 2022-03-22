// // "use strict";function _toConsumableArray(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var playing=!0,timer=function(){return setInterval(function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1},1e3)},interval=timer(),minus=document.getElementById("minus"),plus=document.getElementById("plus"),heart=document.getElementById("heart"),pause=document.getElementById("pause"),commentForm=document.getElementsByTagName("form")[0];minus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b-1}),plus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1}),heart.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText),c=document.querySelector(".likes"),d=void 0;if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}else(d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)}),pause.addEventListener("click",function(){playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});

const pause = document.getElementById("pause");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const minus = document.getElementById("minus");
const counter = document.getElementById("counter");
let like = parseInt();
const obj = {};
let val = parseInt()
let li; 
let interval;


// const seconds = 0
// let intervalID;


// document.addEventListener("DOMContentLoaded", (event) => {
//     intervalID = setInterval(startCount, 1000)
// })

function eventListeners() {
    document.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log("event", event)
        if(event.target.matches("#comment-form")) {
            const list = document.getElementById("list")
            const p = document.createElement("p")
            p.textContent = event.target[0].value
            list.append(p)
            event.target.reset()
        }
    });

    document.addEventListener("click", event => {
        
        if(event.target.matches("button#plus")) {
            plusButton()
        }
        if(event.target.matches("button#minus")) {
            minusButton()
        }
        if(event.target.matches("button#pause")) {
            console.log("event", event )
            pauseButton(event)
        }
        if(event.target.matches("button#heart")) {
            heartButton()
        }
    });


};


function plusButton() {
    counter.textContent = parseInt(counter.textContent, 10) + 1
};

function minusButton() {
    counter.textContent = parseInt(counter.textContent, 10) - 1
};

function heartButton() {
    const likes = document.querySelector(".likes")
    let like = parseInt(counter.innerText, 10);

    if(obj[like]) {
        obj[like] += 1
    } else {
        obj[like] = 1
        li = document.createElement("li")
    }


    li.textContent = `${counter.textContent} has been liked ${obj[like]} times`
    likes.append(li)

};

function pauseButton(event) {
    if(event.target.textContent === "pause") {
        clearInterval(interval)
        event.target.textContent = "resume"
    } else {
        counterBySecond()
        event.target.textContent = "pause"
    }

    minus.disabled = !minus.disabled;
    plus.disabled = !plus.disabled;
    heart.disabled = !heart.disabled;
};


function counterBySecond() {
    interval = setInterval(plusButton, 1000)
}





eventListeners();
// plusButton()
counterBySecond();