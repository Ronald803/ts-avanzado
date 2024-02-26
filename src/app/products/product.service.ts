import {Product} from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  //data.id = "asdfasdf"        //   la propiedad id es de sólo lectura
  products.push(data);
}
