const selection = document.querySelector("#selection");

async function selectionSort(){
    let bars = document.querySelectorAll(".bars");
    let n = bars.length;

    for(let i = 0; i < n; i++){
        let min_index = i;
        bars[i].style.background = "aqua";
        for(let j = i+1; j < n; j++){

            if (!check()) return;

            bars[j].style.background = "red";
            await waitFor(algo_speed.value);
            if(parseInt(bars[j].style.height) < parseInt(bars[min_index].style.height)){
                console.log(min_index);
                bars[min_index].style.background = "yellow";
                min_index = j;
                bars[min_index].style.background = "aqua";
            } 
            else{
                bars[j].style.background = "yellow";
            }   
        }
        await waitFor(algo_speed.value);

        swap(bars[min_index], bars[i]); 
        bars[min_index].style.background = "yellow";

        bars[i].style.background = 'green';
    }
}
function CreateSelectionInfo(){
    const info = document.createElement("div");
    info.className = "Info";
    info.innerHTML = `
            <p>Unsorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:yellow"></i>
            <p>Current Minimum</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:aqua"></i>
            <p>Comparison</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:red"></i>
            <p>Sorted</p>
            <i class="fa-solid fa-circle" fa-2x after" style = "color:green"></i>
    `
    infobtns.appendChild(info);
}

selection.addEventListener('click',async function(){
    SetColor(selection);
    CreateSelectionInfo();
    disableSorting();
    disableSize();
    disableNewArray();
    await selectionSort();
    UnsetColor(selection);
    enableNewArray();
});