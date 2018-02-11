window.onload = function () {
    
    var a = prompt('Type a:');
    var b = prompt('Type b:');
    var c = prompt('Type c:');
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    var square,typeTriangle;

    if(a+b>c && a+c>b && b+c>a){
        calc();
    }else{
        console.log('Incorrect data')
    }


function getType(){
    if(a!==b && b!==c && a!==c){
        if((a*a+b*b==c*c) || (a*a+c*c==b*b) || (b*b+c*c==a*a)){
            typeTriangle = 'Right triangle';
        }
        else{
            typeTriangle = 'Scalene';
        }
    }
    if(a==b && b==c){
        typeTriangle = "Equilateral";
    }
    if(a===b && a!==c || a===c && a!==b || b===c && b!==a){
        typeTriangle = 'Isosceles';
    }
    return typeTriangle;
}

    function calc(){
        getType();
        p = (a+b+c)/2;
        square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        square = Math.floor(square * 100)/100;
        console.log('Type: '+typeTriangle);
        console.log('Square = '+ square);
    }
}