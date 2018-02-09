window.onload = function(){
    var num = prompt('Type N (0 < N <= 20');

    function isInt() {
        if ( parseInt( num ) != num || isNaN(num) || num <=0 || num >20 ) {
            alert('Incorrect!');
            return false;
        } else {
            num = parseInt(num);
            return true;
        }
    }

    function makePiramide() {
        if(isInt()){
            let goLeft = num;
            let goRight = num;
    
            let line = "";
    
            for(let i = 1; i <= num; i++){
                for(let j = 1; j <= (2*num) - 1; j++){
                    if(j < goLeft || j > goRight){
                        line = line.concat("   ");
                    } else{
                        line = line.concat("[~]");
                    }
                }
                goLeft--;
                goRight++;
                line = line.concat("\n");
            }
        console.log(line);
        }
    }

    makePiramide();

}