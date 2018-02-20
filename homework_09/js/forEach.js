function forEach(arr, func){
    let i=0;
    while(i < arr.length){
        func(arr[i]);
        i++;
    }
}