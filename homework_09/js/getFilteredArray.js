function getFilteredArray(arr, func) {
    var newArr = new Array();
    function sort(element) {
      if ( func (element) ) {
        newArr.push(element);
      }
    }
    forEach(arr, sort);
    return newArr;
  }