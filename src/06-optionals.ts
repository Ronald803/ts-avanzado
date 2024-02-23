export const createProduct = (
  id: string | number,
  isNew?: boolean,       // Los parametros opcionales van al final
  stock?: number,
) => {
  return {
    id,
    stock: stock ?? 10,         // el operador que solia utilizarse es ||, significa qeu si no existe (si es falso) se le asigna el siguiente
    isNew: isNew ?? true        // pero ese operador trae problemas ya que:
  }                             //   0 == false
}                               //   "" == false
                                //   false == false
                                // Es por eso que mejor se utiliza el operador ?? que sirve para lo mismo, pero no cae en esos errores
                                //   el nombre del operador ?? es nullish-coalescing
const p1 = createProduct(1,true,12)
console.log(p1);


const p2 = createProduct(1)
console.log(p2);

const p3  = createProduct(1,false,0)
console.log(p3);
