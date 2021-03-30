/**
 * Represents a user
 */
export class User {

  /**
   * The user id
   */
  public id: string;

  /**
   * The sensor ids for the user
   */
  public sensorIds: string[];

  constructor(init: any) {
    Object.assign(this, init);
  }

  /**
   * Converts a database user object to client user
   */
  public static getUserFromDbObject(obj: any) {
    return new User({
      id: obj.id,
      sensorIds: obj.metadata.sensorIds
    });
  }
}
