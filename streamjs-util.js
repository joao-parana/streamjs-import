//  Tenho que garantir que o streamjs está Pronto
var ensureStreamJSIsReady = function(callback) {
  var streamJSNotReady = function() {
    if ('undefined' != (typeof Stream) &&
        'undefined' != (typeof Stream.range)) {
      return false;
    }
    return true;
  }
  var count = 0;
  var delaySubscribe = function(){
    if (streamJSNotReady()) {
      // verifica num intervalo de 10 milisegundos
      setTimeout(delaySubscribe, 10);
      count++;
    } else {
      console.log('Stream JS is ready in ' + (count * 10) + ' milliseconds.');
      setTimeout(callback, 50);
    }
  }
  delaySubscribe();
};
