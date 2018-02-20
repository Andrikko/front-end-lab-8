function getTransformedArray(arr, func ) {
    var newArr = new Array();
    function edit(element){
        newArr.push(func(element));
    }
    forEach( arr, edit );
    return newArr;
}