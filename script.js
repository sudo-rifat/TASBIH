
function increasing(){
    count++;
    update()
    console.log(count);
}

function reset(){
    count = 0;
    update()
    console.log(count);
}










let count = 0;

const update = () => document.querySelector(".count").innerText = count;
update()

document.querySelector(".tap-btn").addEventListener("click", increasing )
document.querySelector(".reset-btn").addEventListener("click", reset )