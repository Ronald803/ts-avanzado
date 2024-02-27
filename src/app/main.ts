import faker from '@faker-js/faker';
import {addProduct,products, updateProduct, findProduct} from './products/product.service';

for(let index=0; index<50 ; index++){
  addProduct({
    description: faker.commerce.productDescription(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    size: faker.random.arrayElement(['S','M','L','XL']),
    price: parseInt(faker.commerce.price(),10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElement(),
    stock: faker.datatype.number({min:10,max:100}),
    categoryId: faker.datatype.uuid()
  })
}

console.log(products);

const product = products[0];
updateProduct(product.id,{
  title: 'New title',
  stock: 80
});


findProduct({
  stock: 10,
  color: "red"
})
