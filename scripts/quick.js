async function partition(ele, l, r){
    let i = l - 1;
    ele[r].style.background = 'aqua';
    for(let j = l; j <= r - 1; j++){
        if (!check()) return;
        ele[j].style.background = 'red';
        await waitFor(algo_speed.value);
        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            i++;
            swap(ele[i], ele[j]);
            ele[i].style.background = 'orange';
            if (i==j)
                ele[j].style.background = 'orange';
            await waitFor(algo_speed.value);
        }
        if (i!=j) ele[j].style.background = 'purple';
    }
    await waitFor(algo_speed.value);
    swap(ele[i+1], ele[r]);
    ele[i+1].style.background = 'green';
    await waitFor(algo_speed.value);
    for(let k = 0; k < ele.length; k++){
        if (!check()) return;
        if(ele[k].style.background != 'green')
            ele[k].style.background = 'yellow';
    }
    return i+1;
}

async function quickSort(ele, l, r){
    if(l < r){
        let pivot_index = await partition(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

function CreateQuickInfo(){
    const info = document.createElement("div");
    info.className = "Info";
    info.innerHTML = `
            <p>Unsorted</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:yellow"></i>
            <p>Pivot</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:aqua"></i>
            <p>Comparison</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:red"></i>
            <p>Smaller than pivot</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:orange"></i>
            <p>Larger than pivot</p>
            <i class="fa-solid fa-circle" fa-2x" style = "color:purple"></i>
            <p>Sorted</p>
            <i class="fa-solid fa-circle" fa-2x after" style = "color:green"></i>
    `
    infobtns.appendChild(info);
}
const quickbtn = document.querySelector("#quick");
quickbtn.addEventListener('click', async function(){
    SetColor(quickbtn);
    CreateQuickInfo();
    let ele = document.querySelectorAll('.bars');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSorting();
    disableSize();
    disableNewArray();
    await quickSort(ele, l, r);
    UnsetColor(quickbtn);
    enableNewArray();
});