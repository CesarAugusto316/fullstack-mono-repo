/* eslint-disable @typescript-eslint/no-empty-interface */
interface I_ProductA { }
interface I_ProductB { }
interface I_ProductC { }

interface AbstractFactory {
  createProductA(): I_ProductA,
  createProductB(): I_ProductB,
  createProductC(): I_ProductC,
}
