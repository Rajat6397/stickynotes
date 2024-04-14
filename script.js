let btn = document.getElementById("button");
let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let notes = document.getElementById("notes_container");
let hide = document.getElementById("hide");
console.log(btn, text, color);
function addNotes(){
    if(text.value==="")
    {
        alert("Enter some text");
        return;
    }
    hide.innerText="";

    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    div.appendChild(p);
    div.appendChild(cross_btn);
    cross_btn.innerText = "X";
    p.innerText=text.value;
    notes.appendChild(div);
    div.style.backgroundColor = color.value;
    console.log(div);
    text.value = "";
    cross_btn.addEventListener('click', function(){
        div.style.display = "none";
    })
    function colorChange(){
        console.log("color");
        text.style.backgroundColor = color.value
    }
    
    //console.log("Notes added");
}
btn.addEventListener('click', addNotes);
color.addEventListener('change', colorChange);