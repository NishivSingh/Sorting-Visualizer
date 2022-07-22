async function merge(ele, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        if (!check()) return;
        await waitFor(algo_speed.value);
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        if (!check()) return;
        await waitFor(algo_speed.value);
        ele[mid + 1 + i].style.background = 'blue';
        right[i] = ele[mid + 1 + i].style.height;
    }
    await waitFor(algo_speed.value);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        if (!check()) return;
        await waitFor(algo_speed.value);
        if(parseInt(left[i]) <= parseInt(right[j])){
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lime';
            }
            
            ele[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
            }
            else{
                ele[k].style.background = 'lime';
            } 
            ele[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        if (!check()) return;
        await waitFor(algo_speed.value);
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lime';
        }
        ele[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        if (!check()) return;
        await waitFor(algo_speed.value);
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
        }
        else{
            ele[k].style.background = 'lime';
        }
        ele[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(ele, l, r){
    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(ele, l, m);
    await mergeSort(ele, m + 1, r);
    await merge(ele, l, m, r);
}

function CreateMergeInfo(){
    const info = document.createElement("div");
    info.className = "Info";
    info.innerHTML = `
            <p>Unsorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:yellow"></i>
            <p>Partially Sorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:lime"></i>
            <p>Left sorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:orange"></i>
            <p>Right sorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:blue"></i>
            <p>Sorted</p>
            <i class="fa-solid fa-circle" fa-2x after" style = "color:green"></i>
    `
    infobtns.appendChild(info);
}

const mergebtn = document.querySelector("#merge");
mergebtn.addEventListener('click', async function(){
    SetColor(mergebtn);
    CreateMergeInfo();
    let ele = document.querySelectorAll('.bars');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    console.log("clicked")
    disableSorting();
    disableSize();
    disableNewArray();
    await mergeSort(ele, l, r);
    UnsetColor(mergebtn);
    enableNewArray();
});
