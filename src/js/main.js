var nameTest = $("#name-test");
var uploadTest = $("#upload-test");
var downloadTest = $("#download-test");
var latencyTest = $("#latency-test");

$(document).ready(function(){
	
	verificaLista();// Retira Mensagem
	
	$("#new-test").click(geraNumeros);
	
	$("#cancel-test").click(cancelaTeste);

	$("#save-test").click(verificaNome);
});


function geraNumeros(){// Gera os números aleatoriamente

	uploadTest.text(Math.round(Math.random() * (100 - 90) + 90));
	downloadTest.text(Math.round(Math.random() * (100 - 90) + 90));
	latencyTest.text(Math.round(Math.random() * (100 - 90) + 90));

	$(".number").each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 4000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
}

function cancelaTeste(){// Zera o teste
	
	nameTest.val("");
	uploadTest.text("0");
	downloadTest.text("0");
	latencyTest.text("0");
}

function verificaNome(){// Verifica se teste tem nome ou valores medidos
			
	if($("#name-test").val() == '')  {

		alert("Por favor dê um nome para o seu teste")
	
	} else if($("#upload-test").text() == "0") {

		alert("Você ainda não realizou nenhum teste")

	} else {

		saveTest();
		verificaLista();

	}
}

function verificaLista(){ // verifica se a lista está vazia
	
	if(!localStorage.recortTest){
		
		$(".listBox").append("<div class='listBox-msg'><i class='fa fa-exclamation-triangle'></i><span>Não há nenhum item salvo na lista</span></div>");

		
	} else {
		$(".listBox-msg").remove();
	}

}