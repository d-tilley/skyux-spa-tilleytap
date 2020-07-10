/**
 * Represents a brewery
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
   * The brewery small image url
   */
  public imageSmallUrl?: string;

  /**
   * The brewery medium image url
   */
  public imageMediumUrl?: string;

  constructor(init?: Partial<Brewery>) {
    Object.assign(this, init);
  }
}
