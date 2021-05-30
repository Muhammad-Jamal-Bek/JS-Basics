function func(p,clicked){
    if(p.style.display=="inline" && clicked=="hide"){
        p.style.display="none";
    }
    else if(clicked=="show"){
        p.style.display="inline";
    }
}
