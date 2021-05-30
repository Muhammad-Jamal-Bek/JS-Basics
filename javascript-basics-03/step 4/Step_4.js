function func(a,b) {
    if (a!="" && b!="" && a==b){
        document.getElementById('password').style.border="2px solid green";
        document.getElementById('confirmation').style.border="2px solid green";
    }
    else if (a=="" && b==""){
        alert("Feilds are empty!!")
        document.getElementById('password').style.border="2px solid red";
        document.getElementById('confirmation').style.border="2px solid red";
    }
    else{
        document.getElementById('password').style.border="2px solid red";
        document.getElementById('confirmation').style.border="2px solid red";
    }
}