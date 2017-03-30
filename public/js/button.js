function buttonAction(value) {
	var lastestResponse = Api.getResponsePayload();
	var context = lastestResponse.context;
	Api.sendRequest(value, context);
}

function removeButtons() {
	[].forEach.call(document.querySelectorAll('.button-inner'), function (elem) {
	  elem.parentNode.removeChild(elem);
	});
}