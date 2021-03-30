/**
 * Represents an IoT sensor measuring weight (of a beer keg)
 */
 export class WeightSensor {

  /**
   * The sensor id
   */
  public id: string;

  /**
   * The latest weight measurement
   */
  public weight: number;

  /**
   * The full weight measurement
   */
  public fullWeight: number;

  /**
   * The keg size enum
   */
  public kegType: number;

  /**
   * The last beer last poured date (epoch)
   */
  public lastBeerPour: number;

  /**
   * The BreweryDb beer id
   */
  public breweryDbId: string;

  constructor(init: any) {
    Object.assign(this, init);
  }

  /**
   * Converts a database sensor object to client user
   */
   public static getWeightSensorFromDbObject(obj: any) {
    return new WeightSensor({
      id: obj.id,
      weight: +obj.metadata.weight,
      fullWeight: +obj.metadata.fullWeight,
      kegType: +obj.metadata.kegType,
      lastBeerPour: +obj.metadata.lastBeerPour,
      breweryDbId: obj.metadata.breweryDbId
    });
  }
}
