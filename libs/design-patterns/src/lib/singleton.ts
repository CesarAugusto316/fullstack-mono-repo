export class Singleton {

  private static instance: Singleton | null = null;

  private constructor() { }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

export default Singleton.getInstance();


export class UsersAPISingleton {
  private static instance: UsersAPISingleton;

  private constructor() { }

  static getInstance() {
    if (!UsersAPISingleton.instance) {
      UsersAPISingleton.instance = new UsersAPISingleton();
    } return UsersAPISingleton.instance;
  }

  getUsers(): Promise<string[]> {
    return Promise.resolve(["Alex", "John", "Sarah"]);
  }
}

const usersPromise = UsersAPISingleton.getInstance().getUsers();

usersPromise.then((res) => { console.log(res); });
