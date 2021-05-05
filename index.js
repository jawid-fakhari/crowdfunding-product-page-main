//*****Hamburger menu****/
// add an click listener to hamburger icon and toggle the css class "change"
let icon = document.querySelector('.hamburger-menu');
let dropMenu = document.querySelector('.nav-items');
let navbar = document.querySelector('.nav');

icon.addEventListener('click', () => {
    navbar.classList.toggle('change');
});

//*****active selection modal****/
let selectionPanel = document.querySelector('#blur-bg');

document.querySelectorAll('.back-btn').forEach(item => {
    item.addEventListener('click', showPanel => {
        selectionPanel.style.display = 'block';        
    });
});
//*****disactive selection modal by clicking ouside div selection-modal****/
let modal = document.querySelector(".modal");

window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none";
    }
}

//* selected pledge in modal show */
var divs = document.getElementsByClassName('selected-pledge');

function showDiv(divId) {
    var div = document.getElementById(divId);

    for (var i in divs) {
        divs[i];
    }
    div.className = "shown"; 
}
//*****active success****/
let successPanel = document.querySelector('#success');

document.querySelectorAll('.goToSuccess').forEach(item => {
    item.addEventListener('click', showPanel => {
        successPanel.style.display = 'block';        
    });
});
//*****disactive success and selsection panel****/
let gotItBtn = document.getElementById('gotIt');
gotItBtn.addEventListener('click', () => {
    successPanel.style.display = 'none';
    selectionPanel.style.display = 'none';
});

