const h1s = document.querySelectorAll(".sidebar h1")
const inviting = document.querySelector(".inviteboard")
const firstTop = inviting.offsettop

h1s[0].onclick = function() {
    window.scroll({top:firstTop, behavior:"smooth"})
}