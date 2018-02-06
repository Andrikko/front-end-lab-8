window.onload = function () {
    
    var a = +prompt('Type a:');
    var b = +prompt('Type b:');
    var c = +prompt('Type c:');

    var max,one,two,square = 0;


    function check(){
        if(a>=0 && b>=0 && c>=0){
            return true;
        }
    }

    function getType(){
        if(check()){
           if(a===b && b===c){
               console.log('Type: Equilateral');
           }
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
                   console.log('Type: Right triangle');
                   square = (one*two)/2;
                   console.log("Square = "+square);
               }
               else{
                   console.log('Type: Scalene');
               }
           }
           if(a===b || a===c || b===c){
            console.log('Type: Isosceles');
            if(a===b){
                square = (c/4)*Math.sqrt((4*(a*a)) - (c*c));
                console.log('Square = '+square);
            }
            else if(b===c){
                square = (a/4)*Math.sqrt((4*(b*b)) - (a*a));
                console.log('Square = '+square);
            }
            else if(a===c){
                square = (b/4)*Math.sqrt((4*(a*a)) - (b*b));
                console.log('Square = '+square);
            }
           }
        }
        else{
            console.log('error');
        }
    }

    getType();
}