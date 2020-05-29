// Add listeners to your chat head and recipient chat head if they already exist

var recipient_chat_head = document.getElementsByClassName("_6ynm")[0];
var your_chat_head = document.getElementsByClassName("_7sta _7stb _87u_")[0];

if(recipient_chat_head != undefined){
	addListener("show");
}
if(your_chat_head != undefined){
	addListener("hide");
}

// Observe changes in the webpage and update our properties and listeners accordingly
var observer = new MutationObserver(
	function(mutations, me){
		// Add listener to your new chat head
		if(your_chat_head != document.getElementsByClassName("_7sta _7stb _87u_")[0]){
			your_chat_head = document.getElementsByClassName("_7sta _7stb _87u_")[0];
			if(document.getElementsByClassName("_7sta _7stb _87u_")[0] != undefined){
				addListener("hide");
				your_chat_head.setAttribute("style", "cursor:pointer");
			}
		}

		// Add listener to new recipient's chat head
		if(recipient_chat_head != document.getElementsByClassName("_6ynm")[0]){
			recipient_chat_head = document.getElementsByClassName("_6ynm")[0];
			if(document.getElementsByClassName("_6ynm")[0] != undefined){
				addListener("show");
				recipient_chat_head.setAttribute("style", "cursor:pointer");
			}
		}
	}
);

var webpage = document.getElementById("facebook");
var config = {childList: true, attributes: true, subtree: true};
observer.observe(webpage, config);

// Does the work of adding/remove listeners
function addListener(listener){
	if(listener == "hide"){
		your_chat_head.onclick = function(){
			var chat_list = document.getElementsByClassName("_1enh _7q1s")[0];
			if(recipient_chat_head != undefined && chat_list != undefined){
				chat_list.style.display = "none";
			}
		};
	}else if(listener == "show"){
		recipient_chat_head.onclick = function(){
			var chat_list = document.getElementsByClassName("_1enh _7q1s")[0];
			if(chat_list != undefined){
				chat_list.style.display = "";
			}
		};
	}
}

