const withoutEnd = ()=>{
  while (true){
    console.log('nunca parar de aprender');
  }
}

const fail = (message: string)=>{
  throw new Error(message)
}

const example = (input:unknown)=>{
  if(typeof input === "string"){
    return "Es un string";
  } else if (Array.isArray(input)){
    return "Es un array";
  }
  return fail("not match")
}


console.log(example("hola"));
console.log(example([1,1,2,3]));
console.log(example(213));
console.log(example("Hola despues del fail"));




