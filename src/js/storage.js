
function saveSettings() {

    var stringTest = $('#name').text() + " - " + $('#date').text() + " - " +  $('#download').text() + " - " + $('#upload').text() + " - " + $("#latency").text();

    // var stringTest = JSON.stringify({
    //     Nome: $('#name').text(),
    //     Data: $('#date').text(),
    //     Upload: $('#upload').text(),
    //     Dowload: $('#download').text(),
    //     Latency: $("#latency").val()
    // });

    const now = "oi";

    localStorage.setItem = ("oi" , JSON.stringify(stringTest));
}




