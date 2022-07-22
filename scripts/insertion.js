const insertion = document.querySelector("#insertion");

async function insertionSort(){
    let bars = document.querySelectorAll(".bars");
    let n = bars.length;
    for (let i=1; i<n; i++){
        let val = bars[i].style.height;
        let j = i-1;
        bars[i].style.background = "red";
        await waitFor(algo_speed.value);
        while (j>=0 && parseInt(bars[j].style.height) > parseInt(val)){
            if (!check()) return;
            bars[j].style.background = "red";
            bars[j + 1].style.height = bars[j].style.height;
            j--;
            await waitFor(algo_speed.value);
            for (let k=i; k>=0; k--){
                bars[k].style.background = "green";
            }
        }
        bars[j + 1].style.height = val;
        bars[i].style.background = "green";
    }
}
insertion.addEventListener('click',async function(){
    SetColor(insertion);
    disableSorting();
    disableSize();
    disableNewArray();
    CreateInfo();
    await insertionSort();
    UnsetColor(insertion);
    enableNewArray();
});