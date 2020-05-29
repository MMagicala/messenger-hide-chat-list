// Retrieve the other user's chat head on the top of the chat window and the chat list
var chat_head = document.getElementsByClassName("_6ynm")[0];
var chat_list = document.getElementsByClassName("_1enh _7q1s")[0];
// Toggle the visibility of the chat list by double-clicking on the chat head
chat_head.ondblclick = function(){
	var newDisplayValue = chat_list.style.display == "" ? "none" : "";
	chat_list.style.display = newDisplayValue;
};
