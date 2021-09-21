function receivesAFunction(cb) {
 console.log(cb());
}
receivesAFunction(function () {return "Spy"});
function returnsANamedFunction () {
    return function name() {

    }
   }
   function returnsAnAnonymousFunction () {
    return function () {
        
    }
   }

