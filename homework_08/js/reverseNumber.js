function reverseNumber(num){
    let str = num.toString();
    if(num< 0){
        return parseInt("-"+str.split("").reverse().join(""));
    }
    else{
        return parseInt(str.split("").reverse().join(""));
    }
}