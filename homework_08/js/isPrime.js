function isPrime(num) {
    let prime;
    if (num == 1 || num == 2) {
        prime = true;
        return prime;
    }
    for (var i=2;i<num;i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
        if (num % i != 0 ) {
            prime = true;
        }
    }
    return prime;
} 