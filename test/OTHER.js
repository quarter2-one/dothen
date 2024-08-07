var Man = function (loopfn) {
    console.log('loopfn', loopfn);
}


var Dave = Man.bind(null, "Davie");
var Clivia = Man.bind(null, "Clivie");
Dave()

// console.log(Dave);
// console.log(Clivia);

var dave =  new Dave();
var clive =  new Clivia();

//
// console.log(dave);
// console.log(clive);
