function collectIds( arr ) {
    function sortByRating( arr ) {
      if ( arr.rating > 3 ) {
          return arr.id;
        }
    }

    function sortArr( arr ) {
        if( arr ){
            return arr;
        }
    }

    return getFilteredArray(getTransformedArray(arr, sortByRating), sortArr);
  }