function callBack () {

}

function receivesAFunction (callBack) {
  callBack ();
}


function returnsANamedFunction () {

let fn = () => {};
   return fn;
}

function returnsAnAnonymousFunction() {


    return (function () {})
}