function cypherPhrase( obj, str ) {
    var arr = str.split('');

    for (var keys in obj) {
      function func( element ) {
        if ( element === keys ) {
          return obj[keys];
        } 
        else {
          return element;
        }
      }
      arr = getTransformedArray(arr, func);
    }
    
    let newArr = arr.join('');
    return newArr;
  }