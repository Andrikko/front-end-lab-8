function decypherPhrase( obj, str ){
    let myObj = {};

    for(keys in obj){
        myObj[obj[keys]] = keys;
    }
    return cypherPhrase(rev_obj, str);
}
