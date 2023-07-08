export class Singleton {

  private static instance: Singleton | null = null;

  private constructor() { }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  // other methods ...
  getUsers(): Promise<string[]> {
    return Promise.resolve(["Alex", "John", "Sarah"]);
  }
}

export default Singleton.getInstance();
