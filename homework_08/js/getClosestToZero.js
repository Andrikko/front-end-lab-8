function getClosestToZero(){
    let i=1, close = 0;
    while( i < arguments.length){
        if(Math.abs(arguments[close]) > Math.abs( arguments[i] ) ){
            close = i;
        }
        i++;
    }
    return arguments[close];
}