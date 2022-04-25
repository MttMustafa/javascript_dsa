//hash table used for instant access for set of values
//many programming language has them in default they ofrten called dictionary, map and object
//in a hash table there is a key and a value for the key and we instantly access for that value for that key
//in order to archive this we need to generate unique and deterministic value for every possible key.
//we do this with an hash function

//heres a simple hash function its not constant time but pretty close

class HashTable {
    constructor(size = 23) { //array size of prime numbers gives better distributed has numbers (its just math dont worry about it)
        this.keyMap = new Array(size); //this array will be our hash table
    }

    _hash(key) {
        let total = 0; //sum of all key codes 
        let primeNum = 23; //we use prime number in our calculations to better distribute the hash numbers
        //loop limits number of character will looked up to 100
        for (let i = 0; i < Math.min(key.length, 100); ++i) {
            let char = key[i]; //save the spesific character
            let value = char.charCodeAt(0) - 96; //charcodeat give the key code. keycodes starts from 97. we substract 96 to start them from 1
            total = (total * primeNum + value) % this.keyMap.length; //adding up all the values and taking the modulus with arrays length.
        }
        return total; //total will be hash number of the given key
    }

    set(key,value) {
        let index = this._hash(key);
         //there may be collusion in our hash table for that case we create an empty array in our calculated index and push into it. 
         //if there will be a key that has the same hash number(ergo the same index) they will be in the same index in created array array
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        //if the key already exist just change the value
        for (let i = 0; i < this.keyMap[index].length; i++) {
            if(this.keyMap[index][i][0] === key){
                this.keyMap[index][i][1] = value;
                return this.keyMap[index][i];
            }
        }
        this.keyMap[index].push([key,value]);
        return [key,value];
    }

    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){ //if index is not empty
            if(this.keyMap[index].length === 1) return this.keyMap[index][0][1]; //if there is only one element in the index return value of the key in the first array in the index
            else { //loop in the array inside the array and find the key then return the value
                for(let i = 0; i < this.keyMap[index].length; ++i){
                    if(this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
                };    
            }
        }
    }
    
    values(){
        //loops through the array and arrays inside the indexes gets the values in each of them saves them in an array and returns the array
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if(!valuesArr.includes(this.keyMap[i][j][i])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
            
        }
        return valuesArr;
    }
    keys(){
        //same with values but gets the keys
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[i]){
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keysArr.push(this.keyMap[i][j][0]);
                }
            }
        }
        return keysArr;
    }
}

