var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function toggleBar(){
  let bar = document.getElementById('bar')
  let threeDot = document.getElementById('threeDot')
  bar.classList.toggle('online')
  if(bar.className == "online"){
    threeDot.style.left = "0px"
  }else{
    threeDot.style.left = "50px"
  }
}
