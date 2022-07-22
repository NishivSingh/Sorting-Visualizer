const main = document.getElementById("main");
const infobtns = document.getElementById("infobtns");
const new_array = document.getElementById("new");
var arr_size = document.getElementById("size");
var algo_speed = document.getElementById("speed");
var stop = document.getElementById("stop");
let flag = true;

// Create a new array
function createarray(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(random_int(10, 120));
    }
    return arr;
}
// Function to get random values
function random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// Create bars from input size
function CreateBars(n) {
    const NewArray = createarray(n);
    for (let i = 0; i < n; i++) {
        const bar = document.createElement("div");
        bar.className = "bars";
        bar.style.height = `${NewArray[i] * 4.4}px`;
        main.appendChild(bar);
    }
    return NewArray;
}
// Utility function for swapping 2 bars
function swap(e1, e2) {
    const height1 = window.getComputedStyle(e1).getPropertyValue("height");
    const height2 = window.getComputedStyle(e2).getPropertyValue("height");
    e1.style.height = height2;
    e2.style.height = height1;
}
// Function to control speed of algorithm
async function waitFor(time){
    await new Promise((resolve) =>
        setTimeout(() => {
        resolve();
        }, 420 - time) // Here subtracted time to get more speed
    );
}
function enableSorting(){
    document.querySelector("#bubble").disabled = false;
    document.querySelector("#insertion").disabled = false;
    document.querySelector("#merge").disabled = false;
    document.querySelector("#quick").disabled = false;
    document.querySelector("#selection").disabled = false;
}
function disableSorting(){
    document.querySelector("#bubble").disabled = true;
    document.querySelector("#insertion").disabled = true;
    document.querySelector("#merge").disabled = true;
    document.querySelector("#quick").disabled = true;
    document.querySelector("#selection").disabled = true;
}
function enableNewArray(){
    document.querySelector("#new").disabled = false;
}
function disableNewArray(){
    document.querySelector("#new").disabled = true;
}
function enableSize(){
    document.querySelector("#size").disabled = false;
}
function disableSize(){
    document.querySelector("#size").disabled = true;
}
// Initialize a new array
function CreateNew(){
    main.innerHTML = "";
    infobtns.innerHTML = "";
    var no_of_bars = arr_size.value;
    CreateBars(no_of_bars);
}
function check(){
    return flag;
}
function SetColor(e){
    e.style.borderRadius = "10px";
    e.style.background = "white";
}
function UnsetColor(e){
    e.style.borderRadius = "15px";
    e.style.background = "transparent";
}
stop.addEventListener('click',(e)=>{
    flag = false;
})
arr_size.addEventListener('input',(e)=>{
    flag = true;
    CreateNew();
})
algo_speed.addEventListener('input',(e)=>{
    var val = algo_speed.value;
    waitFor(val);
})
new_array.addEventListener('click', (e) => {
    flag = true;
    enableSorting();
    enableSize();
    CreateNew();
})

// Initialization of the page
CreateNew();
