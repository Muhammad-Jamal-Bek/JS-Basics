
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace("e"," ");
}
const concatString = (text1, text2) => {
    return text1+text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    return text.slice(0,9);
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.slice(1,text.length-1);
}
const IsString = (text) => {
    return typeof text=="string";
}

const getExtension = (text) => {
    return text.substring (text.length - 3);}
const countSpaces = (text) => {
    return text.split(" ").length-1;
}
const InverseString = (text) => {
 return text.split("").reverse().join("");
}

const power = (x, y) => {
    return x**y;
}
const absoluteValue = (num) => {
    if (num<0){
        return num*-1;
    }
    else{
        return num;
    }
}
const absoluteValueArray = (array) => {
    arr=[];
    for(var i=0;i<array.length;i++){
        if(array[i]<0){
            arr.push(array[i]*-1);
        }
        else{
            arr.push(array[i]);
        }
    }
    return arr;
}
const circleSurface = (radius) => {
    return Math.round(3.14159*radius**2);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab,ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight/height**2).toFixed(2));
}

const createLanguagesArray = () => {
    
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}