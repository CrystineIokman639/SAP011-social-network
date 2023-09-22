const showOn = document.getElementById("showOn")
const showOff = document.getElementById("showOff")

showOn.addEventListener("click", () =>{
    document.getElementById("password").setAttribute("type", "text")
    showOn.style.visibility = "hidden";
    showOff.style.visibility = "visible";
})

showOff.addEventListener("click", () =>{
    document.getElementById("password").setAttribute("type", "password")
    showOn.style.visibility = "visible";
    showOff.style.visibility = "hidden";
})