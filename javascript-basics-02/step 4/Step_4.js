function func(){
    var x=window.confirm("Are you sure you want to reset the data fields?");
    var fields=document.getElementsByTagName("input");
    if (x){
        for (var i=0; i<fields.length;i++){
            fields[i].value="";
        }
    }
    else{
        alert("Ok, I won't reset the fields :D");
    }
}