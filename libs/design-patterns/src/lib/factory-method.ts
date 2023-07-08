/* eslint-disable @typescript-eslint/no-unused-vars */


// PROBLEM
interface Product {
  getProperty(): void
}


class ConcreteProductOne implements Product {
  public getProperty(): void {
    console.log('property');
  }
}


class ConcreteProductTwo implements Product {
  getProperty(): void {
    console.log('property');
  }
}



// FACTORY METHOD v1
interface ProductFactory {
  create(): Product
}

class ProductOneFactory implements ProductFactory {
  create(): Product {
    return new ConcreteProductOne();
  }
}

class ProductTwoFactory implements ProductFactory {
  create(): Product {
    return new ConcreteProductTwo();
  }
}


const productOne = new ProductOneFactory();
const productTwo = new ProductTwoFactory();

// ussage
productOne.create();
productTwo.create();



// FACTORY METHOD v2
interface I_ProductFactoryV2 {
  create(type: ProductTypes): Product
}

export const enum ProductTypes {
  PRODUCT_ONE,
  PRODUCT_TWO
}

class ProductFactoryV2 implements I_ProductFactoryV2 {
  create(type: ProductTypes): Product {

    switch (type) {
      case ProductTypes.PRODUCT_ONE:
        return new ConcreteProductOne();

      case ProductTypes.PRODUCT_TWO:
        return new ConcreteProductTwo();
    }
  }
}

const productV2 = new ProductFactoryV2();

productV2.create(ProductTypes.PRODUCT_ONE);
productV2.create(ProductTypes.PRODUCT_TWO);

// Real - world examples
// We saw some usages of the Factory method in Chapter 2, 
// TypeScript Core Principles.The DOM API, for example, 
// is a really good use case and it offers several types of 
// create methods:

const divElement = document.createElement("div"); // p, input, etc...
const content = document.createTextNode("Hello");
const event = document.createEvent('Event');


export default { productOne, productTwo, productV2, };
