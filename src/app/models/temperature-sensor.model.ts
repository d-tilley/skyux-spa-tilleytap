/**
 * Represents an IoT sensor measuring temperature
 */
 export class TemperatureSensor {

  /**
   * The sensor id
   */
  public id: string;

  /**
   * The latest temperature measurement
   */
  public temperature: number;

  /**
   * The measurement timestamp
   */
  public timestamp: number;

  constructor(init: any) {
    Object.assign(this, init);
  }

  /**
   * Converts a database sensor object to client user
   */
   public static getTemperatureSensorFromDbObject(obj: any) {
    return new TemperatureSensor({
      id: obj.id,
      temperature: +obj.metadata.temperature,
      timestamp: +obj.metadata.timestamp
    });
  }
}
