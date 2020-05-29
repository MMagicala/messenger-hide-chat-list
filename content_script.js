// Wait for the your chat head to exist
var observer = new MutationObserver(
	function(mutations, me){
		var your_chat_head = document.getElementsByClassName("_7sta _7stb _87u_")[0];
		if(your_chat_head){
			// Once it does, we can add a listener to it
			inject(your_chat_head);
			me.disconnect();
			return;
		}
	}
);

var config = {childList: true, attributes: true, subtree: true};

// Start looking for the changes in the webpage we need
var webpage = document.getElementById("facebook");
observer.observe(webpage, config);

function inject(your_chat_head){
	your_chat_head.onclick = function(){
		// Get the recipient's chat head and the chat list
		var recipient_chat_head = document.getElementsByClassName("_6ynm")[0];
		var chat_list = document.getElementsByClassName("_1enh _7q1s")[0];
		
		// If the recipient chat head or the chat list aren't available at the moment, return
		if(recipient_chat_head == undefined || chat_list == undefined){
			return;
		}
		
		// Add a listener where double clicking the recipient's chat head shows the chat list again
		recipient_chat_head.onclick = function(){
			chat_list.style.display = "";
		}

		// Hide the chat list
		chat_list.style.display = "none";
	};
}
