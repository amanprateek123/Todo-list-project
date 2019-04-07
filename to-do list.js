//to change decoration by clicking
$("ul").on("click","li",function(){
	if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
     color: "black",
     textDecoration: "none"
	});
	}
	else{
		$(this).css({
     color: "gray",
     textDecoration: "line-through"
	});
	}
	
});
//click on X to delete todos
$("ul").on("click","span",function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	e.stopPropogation()
})
//input todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todo = $(this).val();
	$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todo + "</li>")
	}

});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});