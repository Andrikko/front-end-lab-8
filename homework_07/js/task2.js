window.onload = function(){

    var start = confirm('Do you want to play a game?');
    var price = [10,5,2];
    var i = 0;
    var win = 0;
    var winN = 0;
    var won= 0;
    var max = 5;
    let end;

    if(start){
        game();
    }else{
        console.log('You did not become a millionaire');
    }

    function getPrice(guesst){
        let res = 0;
        switch(guesst){
            case 0: 
                res = price[0];
                break;
            case 1: 
                res = price[1];
                break;
            case 2: 
                res = price[2];
                break;
        }
        return res;
    }

    function game(){
        i=0; win = 0;
        while(i!==3 && end !== true){
            let range = Math.floor(Math.random()*(max+1));
            let num = prompt('Enter a number from 0 to '+max+'\nAttempts left: '+i+"\nTotal prize: "+winN+'$\n'+'Possible prize on current attempt: '+price[i]+'$' );

            if(range==num){
                win = getPrice(i);
                let cont = confirm('You guessed it!\nDo you want to continue a game?');
                if(cont){
                    max = max * 2;
                    for(let j=0; j<price.length; j++){
                        price[j] = price[j] * 3;
                    }
                    i=0; winN+= win;
                    game();
                }else{
                    winN+= win;
                    end = true;
                    won += winN;
                    console.log('Thank you for a game. Your prize is: '+ won);
                    alert('Thank you for a game. Your prize is: '+ won);
                    break; 
                }
            }
            
            i++;
            if(i==3){
                let again = confirm('Do you want to play again?');
                if(again){
                    price = [10,5,2];
                    end = false;
                    game();
                }
                else{
                    end = true;
                    won += winN;
                    console.log('Thank you for a game. Your prize is: '+ won);
                }
            }
        }
    }
    
    
    
        
}