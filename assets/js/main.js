$(document).ready(function() {
	var chats = $(".perfil-contacto");
	$(".perfil-contacto").click(function(){
		var persona = (this.childNodes[3].innerHTML);
		var hora = (this.childNodes[5].innerHTML);
		console.log(hora);
		$(".conv").remove();
		$(".chat-cont").append('<div class="conv"><div class="person x-person-uno">' +  persona  + hora + '</div></div>')
	})

	$(".fa-microphone").click(function(){
		var mensaje = $("#new").val();
		$(".conv").append('<div class="you"><p class="text">'+ mensaje +'</p></div>')
	})
	
});