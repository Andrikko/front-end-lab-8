window.onload = function(){

    var a = +prompt('Type euro: ');
    var b = +prompt('Type dollar: ');
    a = parseFloat(a);
    b= parseFloat(b);

    let eu_hr = 33.85;
    let dol_hr = 27.46;

    if(a>=0 && b >=0 && !isNaN(a) && !isNaN(b) ){
        console.log(a+' euros are equal '+ Math.floor(a*eu_hr) + ' UAH, '+ b + ' dollars are equal '+ Math.floor(b*dol_hr) + ' UAH, one euro is equal '+ Math.floor((eu_hr/dol_hr)*1000)/1000 +' dollars');
    }
    else{
        console.log('Incorrect data');
    }
}   