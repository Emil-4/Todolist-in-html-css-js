var input =document.getElementById("input")
var ul =document.getElementById("one")
function add(){
    var list =document.createElement("li")
    ul.append(list)
    list.innerHTML=input.value+"<button onclick='del(event)'>Delete</button>"

   

}

function del(event){
 
  event.target.parentElement.remove()
 
}