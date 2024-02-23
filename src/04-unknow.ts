let anyVar: any;        // Al utilizar el tipo any, se desactivan los superpoderes de typescript
anyVar = true;          // entonces una variable puede ser de cualquier tipo
anyVar = undefined;     //
anyVar = null;
anyVar = 123;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;
anyVar.doSomething();
anyVar.toUpperCase();

//  ---------------------- tipo     U N K N O W N -----------------

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 123;
unknowVar = [];
unknowVar = {};

unknowVar.doSomething();    // como se puede observar ts nos muestra un error, ya que ts espera qeu se verifique el tipo de dato
unknowVar.toUpperCase();    // antes de que se ejecute un metodo del mismo

// verificamos el tipo de dato
if(typeof unknowVar === "string"){
  unknowVar.toUpperCase();            // Una vez que esta verificado que sea un string permite que se utilicen los metodos tipo string
}

// Cuando quieres flexibilidad ya que no sabes de que tipo sera una variable en vez de utilizar ANY
// es mejor utilizar UNKNOWN, ya que al menos nos obliga a verificar el tipo para utilizar bien sus metodos
