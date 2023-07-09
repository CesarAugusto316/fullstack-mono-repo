/* eslint-disable @typescript-eslint/no-unused-vars */
export class Product {
  constructor(
    public attributeOne?: string,
    public attributeTwo?: string,
    public attributeThree?: string,
    public attributeFour?: string
  ) { }
}


interface I_ProductBuilder {
  setAttributeOne(value: string): I_ProductBuilder;
  setAttributeTwo(value: string): I_ProductBuilder;
  setAttributeThree(value: string): I_ProductBuilder;
  setAttributeFour(value: string): I_ProductBuilder;

  build(): Product
}

export class ProductOneBuilder implements I_ProductBuilder {

  constructor(private product: Product) {
    // this.clear();
  }

  setAttributeOne(value: string): ProductOneBuilder {
    this.product.attributeOne = value;
    return this;
  }

  setAttributeTwo(value: string): ProductOneBuilder {
    this.product.attributeTwo = value;
    return this;
  }

  setAttributeThree(value: string): ProductOneBuilder {
    this.product.attributeThree = value;
    return this;
  }

  setAttributeFour(value: string): ProductOneBuilder {
    this.product.attributeFour = value;
    return this;
  }


  build(): Product {
    const product = this.product;
    // this.clear();
    return product;
  }

  // I dont like this clear method, it does not allows to change the kind
  // of object we are building
  private clear(): void {
    this.product = new Product();
  }
}

const pb = new ProductOneBuilder(new Product());
pb
  .setAttributeOne('carlotita')
  .setAttributeTwo('rivera')
  .setAttributeThree('esmeraldas')
  .setAttributeFour('ecuador');

const productOne = pb.build();

// export class ProductTwoBuilder implements I_ProductBuilder {


//   constructor(private product: Product) { }

//   setAttributeOne(value: string): ProductTwoBuilder {
//     this.product.attributeOne = value;
//     return this;
//   }  

//   setAttributeTwo(value: string): ProductTwoBuilder {
//     this.product.attributeTwo = value;
//     return this;
//   }

//   setAttributeThree(value: string): ProductTwoBuilder {
//     this.product.attributeThree = value;
//     return this;
//   }

//   setAttributeFour(value: string): ProductTwoBuilder {
//     this.product.attributeFour = value;
//     return this;
//   }


//   build(): Product {
//     return new Product();
//   }
// }


// export class ProductDirector {
//   buildProductOne(builder: I_ProductBuilder): Product {
//     return builder.build();
//   }

//   buildProductTwo(builder: I_ProductBuilder): Product {
//     return builder.build();
//   }
// }
