const bubble = document.querySelector("#bubble");

async function bubbleSort() {
    let bars = document.querySelectorAll(".bars");
    let n = bars.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (!check()) return;
            bars[j].style.background = "red";
            bars[j + 1].style.background = "red";
            if (parseInt(bars[j].style.height)>parseInt(bars[j+1].style.height)) {
                await waitFor(algo_speed.value);
                swap(bars[j], bars[j + 1]);
            }
            bars[j].style.background = "yellow";
            bars[j + 1].style.background = "yellow";
        }
        bars[n - 1 - i].style.background = "green";
    }
    bars[0].style.background = "green";
}
function CreateInfo(){
    const info = document.createElement("div");
    info.className = "Info";
    info.innerHTML = `
            <p>Unsorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:yellow"></i>
            <p>Comparison</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:red"></i>
            <p>Sorted</p>
            <i class="fa-solid fa-circle" fa-2x after" style = "color:green"></i>
    `
    infobtns.appendChild(info);
}
bubble.addEventListener("click", async function() {
    SetColor(bubble);
    CreateInfo();
    disableSorting();
    disableSize();
    disableNewArray();
    await bubbleSort();
    UnsetColor(bubble);
    enableNewArray();
})