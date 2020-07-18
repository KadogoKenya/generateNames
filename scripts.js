var weekDay=["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"];
var maleName=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleName=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

function myForm(){
    var day=parseInt(document.getElementById("dd").value);
    var month=parseInt(document.getElementById("mm").value);
    var year=parseInt(document.getElementById("yy").value);

    if(dd<1 || dd>7)
    alert("invalid days value");
    if(mm<1 || mm>12);
    alert("re-enter the value of month");
    if(yy<1 || yy>31)
    alert("invalid months");

}