var eratosthenes = function(n) {
    var array = [], upperLimit = Math.sqrt(n), output1 = [], output2 = [];

    for (var i = 0; i < n; i++) {
        array.push(true);
    };

    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    };

    for (var i = 2; i < n; i++) {
        if(array[i]) {
           output1.push(i);
        }
    };

    for (var i=0; i<output1.length; i++){
        if(n%output1[i]===0){
            output2.push(output1[i]);
        }
    };

    if (output2.length===0){
        return "Prime!";
    } else {
        return output2;
    }
    
};
