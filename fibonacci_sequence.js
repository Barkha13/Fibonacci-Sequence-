function fib() {
    
    var fib_nacci = [0,1];
    var sum;
    function nacci() {
      
      sum = fib_nacci[fib_nacci.length-1] + fib_nacci[fib_nacci.length-2];
      fib_nacci.push(sum);
      console.log(fib_nacci);
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  fibCounter() 
  