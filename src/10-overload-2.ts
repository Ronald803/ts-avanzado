// ronald => [r,o,n,a,l,d]    ----------->    string => string[]
// [r,o,n,a,l,d] => ronald    ----------->    string[] => string

export function parseStr(input: string):string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown {
  if(Array.isArray(input)){
    return input.join(""); // return string
  } else if(typeof(input) === "string"){
    return input.split(''); // return string []
  } else if(typeof(input) === "number"){
    return true;
  }
}


const rtaArray = parseStr('ronald');           // Cuando se tiene una sobrecarga de argumentos, ts no tiene la certeza del tipo de respuesta
rtaArray.reverse();                               // razón por la cual necesita de que te asegures del tipo de respuesta que es para no mostrar error
// if(Array.isArray(rtaArray)){                      // en este caso fue necesario verificar que la respuesta sea un array para que no diera error
//   rtaArray.reverse();
// }
console.log("rtaArray ",rtaArray);

let rtaString = parseStr(['r','o','n','a','l','d']);     // Lo propio en este ejemplo, hasta no verificar el tipo de respuesta ts daba error
rtaString=rtaString.toUpperCase();                                      // al verificar que la respuesta era de tipo string nos permite usar los metodos de strings
// if(typeof rtaString === "string"){                            //
//   rtaString.toUpperCase();
// }
console.log("Rtastring ",rtaString);

let rtaBoolean = parseStr(12);
console.log("Rta boolean ",rtaBoolean);
