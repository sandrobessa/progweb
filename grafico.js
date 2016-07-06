botao = document.getElementById("grafico");
botao.onclick = function generateGraphic(){
	
	document.images[0].width=document.myform.largura.value;
	document.images[0].height=document.myform.barra1.value;

	document.images[1].width=document.myform.largura.value;
	document.images[1].height=document.myform.barra2.value;

	document.images[2].width=document.myform.largura.value;
	document.images[2].height=document.myform.barra3.value;

	document.images[3].width=document.myform.largura.value;
	document.images[3].height=document.myform.barra4.value;

	document.images[4].width=document.myform.largura.value;
	document.images[4].height=document.myform.barra5.value;

}