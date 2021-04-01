/**
 * Represents a user
 */
export class User {

  /**
   * The user id
   */
  public id: string;

  /**
   * The sensors for the user
   */
  public sensors: SensorMap[];

  constructor(init: any) {
    Object.assign(this, init);
  }

  /**
   * Converts a database user object to client user
   */
  public static getUserFromDbObject(obj: any) {
    return new User({
      id: obj.id,
      sensors: obj.metadata.sensors
    });
  }
}

export class SensorMap {
  /**
   * The sensor id
   */
  public sensorId: string;

  /**
   * The sensor type
   */
  public sensorType: number;
}
