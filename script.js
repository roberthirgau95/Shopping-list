var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems=document.getElementsByTagName("li"); 

// se poate pune totul intro functie pentru a fi mai putin cod 
// ai exemplu aici jos :
// si dupa doar refolosesti codul prin intermediul functiei

// function addElement(){
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

button.addEventListener("click", function(){
	if(input.value === ""){
		return
	}else if (input.value !== ""){
		alert("Wow ,you just added to the list : " +input.value);

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
// adaugam buton de DELETE dupa fiecare "click"
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		li.appendChild(btn);
 		btn.onclick = removeParent;
	}
})

input.addEventListener("keypress", function(){
	if(input.value === ""){
		return
	}else if (input.value !== ""&& event.code ==="Enter"){
		alert("Wow ,you just added to the list : " +input.value);

		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
// adaugam buton de DELETE dupa fiecare "ENTER"
		var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
		li.appendChild(btn);
 		btn.onclick = removeParent;
	}

})	
//adaugare functie DONE sau "gata" la noi,sa poti taia de pe lista unele produse
	ul.onclick=function(gata){
	var target=gata.target;
	target.classList.toggle("done");
}

// // function listLength(){
// // 	return listItems.length;
// // }

for( i=0; i<listItems.length; i++){
	deleteButton();
}

function deleteButton(){
	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

// aici ai functia remove
function removeParent(evt){
	evt.target.parentNode.remove();
}
