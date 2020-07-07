/**
 * Represents a BreweryDB brewery
 */
export class Brewery {

  /**
   * The brewery id
   */
  public id?: string;

  /**
   * The brewery name
   */
  public name?: string;

  /**
   * The small brewery image url
   */
  public imageSmallUrl?: string;

  /**
   * The medium brewery image url
   */
  public imageMediumUrl?: string;

  constructor(init?: Partial<Brewery>) {
    Object.assign(this, init);
  }
}
