// ronald => [r,o,n,a,l,d]    ----------->    string => string[]
// [r,o,n,a,l,d] => ronald    ----------->    string[] => string

function parseString(input: string | string []): string | string[] {
  if(Array.isArray(input)){
    return input.join(""); // return string
  } else {
    return input.split(''); // return string []
  }
}


const rtaArray = parseString('ronald');           // Cuando se tiene una sobrecarga de argumentos, ts no tiene la certeza del tipo de respuesta
rtaArray.reverse();                               // razón por la cual necesita de que te asegures del tipo de respuesta que es para no mostrar error
if(Array.isArray(rtaArray)){                      // en este caso fue necesario verificar que la respuesta sea un array para que no diera error
  rtaArray.reverse();
}
console.log("rtaArray ",rtaArray);

const rtaString = parseString(['r','o','n','a','l','d']);     // Lo propio en este ejemplo, hasta no verificar el tipo de respuesta ts daba error
rtaString.toUpperCase();                                      // al verificar que la respuesta era de tipo string nos permite usar los metodos de strings
if(typeof rtaString === "string"){                            //
  rtaString.toUpperCase();
}
console.log("Rtastring ",rtaString);


