function getMin(){
    let arr = [],i=0;
    while(i<arguments.length){
        arr[i]=arguments[i];
        i++;
    }
    return Math.min(...arr);
}