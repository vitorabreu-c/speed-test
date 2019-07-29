
var uploadTest = $("#upload-test");
var downloadTest = $("#download-test");
var latencyTest = $("#latency-test");

$(document).ready(function(){
	verificaLista();
	$("#new-test").click(geraNumeros);
	$("#cancel-test").click(cancelaTeste);
	$("#save-test").click(verificaNome);

});


function geraNumeros(){// Gera os números aleatoriamente

	uploadTest.text(Math.round(Math.random() * (100 - 90) + 90));
	downloadTest.text(Math.round(Math.random() * (100 - 90) + 90));
	latencyTest.text(Math.round(Math.random() * (100 - 90) + 90));
}

function cancelaTeste(){// Zera o teste
	
	uploadTest.text("0");
	downloadTest.text("0");
	latencyTest.text("0");
}


function insereTeste(currentDateTest){// Cria os itens da lista do teste
	
	var dateTest = new Date();
	var currentDateTest = dateTest.getDate() + "/" + dateTest.getMonth() + "/" + dateTest.getFullYear();
	// var idTest = dateTest.getDate() + dateTest.getMonth() + dateTest.getFullYear() + dateTest.getMilliseconds();
	var nameTestVal = $("#name-test").val();
	var uploadTestVal = $("#upload-test").text();
	var downloadTestVal = $("#download-test").text();
	var latencyTestVal = $("#latency-test").text();

	// Criando itens da lista
	var listItem = $("<div class='listBox-item'>");
	var listItemName = $("<div class='dscp' id='name'>").text(nameTestVal);
	var listItemDate = $("<div class='dscp text-right' id='date'>").text(currentDateTest);
	var listItemInfo = $("<div class='test'>");
	var listItemInfoUpload = $("<div class='info' id='upload'>").text(uploadTestVal + " Mbps Upload");
	var listItemInfoDownload = $("<div class='info' id='download'>").text(downloadTestVal + " Mbps Download");
	var listItemInfoLatency = $("<div class='info' id='latency'>").text(latencyTestVal + " ms Latência");

	//add valores do test na lista
	listItemInfo.append(listItemInfoUpload);
	listItemInfo.append(listItemInfoDownload);
	listItemInfo.append(listItemInfoLatency);

	//lista montada
	
	listItem.append(listItemName);
	listItem.append(listItemDate);
	listItem.append(listItemInfo);	
	

	var listaTestes = $(".listBox");
	listaTestes.append(listItem);	
}


function verificaNome(){// Verifica se teste tem nome ou valores medidos
			
	if($("#name-test").val() == '')  {

		alert("Por favor dê um nome para o seu teste")
	
	} else if($("#upload-test").text() == "0") {

		alert("Você ainda não realizou nenhum teste")

	} else {

		insereTeste();
		verificaLista();
		saveSettings();
	}
}

function verificaLista(){// verifica se a lista está vazia
	
	if($.trim($(".listBox").html())==''){
		
		$(".listBox").append("<div class='listBox-msg'><i class='fa fa-exclamation-triangle'></i><span>Não há nenhum item salvo na lista</span></div>")

		
	} else {
		$(".listBox-msg").remove();
	}

}