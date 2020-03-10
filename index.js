var acc = document.getElementsByClassName("accordion")
var i;

for (i= 0; i< acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active")
        var panel = this.nextElementSiblings
        if (panel.styles.display === "block") {
            panel.styles.display = "none"
        }else{
            panel.styles.display = "block"
        }
    })
}
