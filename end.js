var head=document.getElementById("result-header")
var body=document.getElementById("result-body")

function reset(){
location.href="./index.html"
}

var points=sessionStorage.getItem("points")

if(points >=7){
head.innerText="You've got "+ points +" out of 10 right"
body.innerText="Woohoo! Seems like you're smarter than calculator :)!"
}
else{
head.innerText="You've got only "+ points +" out of 10 right"
body.innerText="Noooo! What happened?! Gotta do more practice :0"
}