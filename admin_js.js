// To use Html5QrcodeScanner (more info below)
// import {Html5QrcodeScanner} from "html5-qrcode";
var data=[];
var audio = new Audio('/media/smb_coin.wav');
function check_inArray(xx){
    var count=data.length;
    for(var i=0;i<count;i++){
        if(data[i][3]===xx){return true;}
    }
    return false;
}
function onScanSuccess(decodedText) {
    let temp = (decodedText).split(','); 
    if(!check_inArray(temp[3])){
        let temparr = []
        for(i in temp){
            temparr.push(temp[i]);
        }
        data.push(temparr);
        audio.play();
        console.log(data[0]);
    }
}
let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: 1000 , facingMode: "environment" }, //verbose=true
);
html5QrcodeScanner.render(onScanSuccess);

function generateCSV() {
    var csv = 'Name, rollno, section, student id,campus\n';
    data.forEach(function(row) {
        csv += row.join(',');
        csv += "\n";
    });

    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    let date = new Date().toLocaleDateString();
    hiddenElement.download = `attendence_${date}.csv`;
    hiddenElement.click();
}
