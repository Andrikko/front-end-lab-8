window.onload = function(){

    var newA,newB,eu_dol;
    var a = +prompt('Type euro: ');
    var b = +prompt('Type dollar: ');

    function converter(one,two){
        let eu_hr = 33.85;
        let dol_hr = 27.46;

        if(one>=0 && two >=0){
            newB = two * dol_hr;
            newA = one * eu_hr;
            eu_dol = eu_hr/dol_hr;
        }
        return newA,newB,eu_dol;
    }

    function output(){
        converter(a,b);
        newA = newA.toFixed(2);
        newB = newB.toFixed(2);
        eu_dol = eu_dol.toFixed(2);

        console.log(a+' euros are equal '+ newA + ' UAH, '+ b + ' dollars are equal '+ 
        newB + ' UAH, one euro is equal '+ eu_dol +' dollars');
    }

    output();
}