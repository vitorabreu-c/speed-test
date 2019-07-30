
$(document).ready(function(){
	
	getTest();
	
});


var testArray = []; // Cria array com dados do teste

function getTest(){ // Busca no localStorage se há testes
    if (localStorage.recortTest){
    
        testArray = JSON.parse(localStorage.recortTest);
        
        for(var i = 0; i < testArray.length; i ++){
            
            geraLista(saveName = testArray[i].Nome, saveDate = testArray[i].Data, SaveDownload = testArray[i].Download, saveUpload = testArray[i].Upload, saveLatency = testArray[i].Latency);
        }
    }
}

function saveTest() { // Salva teste no localStorage

    var dateTest = new Date();
	var currentDateTest = dateTest.getDate() + "/" + dateTest.getMonth() + "/" + dateTest.getFullYear();

    var saveName = $('#name-test').val();
    var saveDate = currentDateTest
    var saveDownload = $('#download-test').text()
    var saveUpload = $('#upload-test').text()
    var saveLatency = $("#latency-test").text();

    var stringTest =  {Nome: saveName, Data: saveDate, Download: saveDownload, Upload: saveUpload, Latency: saveLatency}; 
    testArray.push(stringTest);

    localStorage.recortTest = JSON.stringify(testArray);

    geraLista(saveName, saveDate, saveDownload, saveUpload, saveLatency);
}

function geraLista(saveName, saveDate, saveDownload, saveUpload, saveLatency){// Cria os itens da lista do teste
	
	// Criando itens da lista
	var listItem = $("<div class='listBox-item'>");
	var listItemName = $("<div class='dscp' id='name'>").text(saveName);
	var listItemDate = $("<div class='dscp text-right' id='date'>").text(saveDate);
	var listItemInfo = $("<div class='test'>");
	var listItemInfoUpload = $("<div class='info' id='upload'>").text(saveUpload + " Mbps Upload");
	var listItemInfoDownload = $("<div class='info' id='download'>").text(saveDownload + " Mbps Download");
	var listItemInfoLatency = $("<div class='info' id='latency'>").text(saveLatency + " ms Latência");

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