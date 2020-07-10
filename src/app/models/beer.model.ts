import { Brewery } from './brewery.model';
import { Keg } from './keg.model';

/**
 * Represents a beer!
 */
export class Beer {

  /**
   * The beer id
   */
  public id?: string;

  /**
   * The beer name
   */
  public name?: string;

  /**
   * The beer description
   */
  public description?: string;

  /**
   * The beer abv
   */
  public abv?: number;

  /**
   * The beer ibu
   */
  public ibu?: number;

  /**
   * The beer style
   */
  public style?: string;

  /**
   * The beer brewery
   */
  public brewery?: Brewery;

  /**
   * The beer keg data
   */
  public keg?: Keg;

  constructor(init?: Partial<Beer>) {
    Object.assign(this, init);
  }
}
