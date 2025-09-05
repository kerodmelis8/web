const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const increasebtn = document.getElementById("increasebtn");
const countladel = document.getElementById("countladel");
let count = 0;

increasebtn.onclick = function(){
    count++;
    countladel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countladel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countladel.textContent = count;
}
