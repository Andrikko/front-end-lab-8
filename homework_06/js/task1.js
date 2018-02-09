window.onload = function () {
    
    var a = prompt('Type a:');
    var b = prompt('Type b:');
    var c = prompt('Type c:');
    
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    var max,one,two,square,half_per = 0;
    var typeTriangle = "";


    function check(){
        if(a>=0 && b>=0 && c>=0){
            return true;
        }
    }

    function getType(){
        if(check()){
           if(a!==b && b!==c && a!==c){
               if(a>b){
                   if(a>c){
                       max = a;
                       one = b;
                       two = c;
                   }
                   else if(c>a){
                       max = c;
                       one = a;
                       two = b;
                   }
               }
               else{
                   if(b>c){
                       max = b;
                       one = c;
                       two = a;
                   }
                   else if(c>b){
                       max = c;
                       one = b;
                       two = a;
                   }
               }
               if(max*max === (one*one)+(two*two)){
                   typeTriangle = 'Type: Right triangle'; 
                   square = (one*two)/2;
               }
               else{
                   typeTriangle = 'Type: Scalene'; 
                   half_per = (a + b + c)/2;
                   square = Math.sqrt(half_per*(half_per-a)*(half_per-b)*(half_per-c));
               }
           }
           if(a===b && b===c){
                typeTriangle = 'Type: Equilateral'; 
                square = ((a*a)*Math.sqrt(3))/4;
            }
           if(a===b && a!==c || a===c && a!==b || b===c && b!==a){
            typeTriangle = 'Type: Isosceles'; 
            if(a===b){square = (c/4)*Math.sqrt((4*(a*a)) - (c*c));}
            else if(b===c){square = (a/4)*Math.sqrt((4*(b*b)) - (a*a));}
            else if(a===c){square = (b/4)*Math.sqrt((4*(a*a)) - (b*b));}
           }
        }
        else{console.log('Incorrect data');}
        return square,typeTriangle;
    }

    function calc(){
        getType();
        square = square.toFixed(2);
        console.log(typeTriangle);
        console.log('Square = '+ square);
    }

    calc();
}