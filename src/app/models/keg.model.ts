/**
 * Represents a keg
 */
export class Keg {

  /**
   * The full weight measurement when new keg was added
   */
  public fullWeight: number;

  /**
   * The current weight measurement of the keg
   */
  public currentWeight: number;

  /**
   * The type (size) of keg
   */
  public kegType: number;

  /**
   * The long name of the keg type
   */
  public kegTypeName: string;

  /**
   * The short name of the keg type
   */
  public kegTypeLabel: string;

  /**
   * The capacity of the keg type
   */
  public kegTypeCapacity: number;

  constructor(init?: Partial<Keg>) {
    Object.assign(this, init);
  }

  // Get remaining percent of the keg
  public getPercentRemaining(): number {
    let remaining = this.getOuncesRemaining();
    return Math.floor(remaining / this.kegTypeCapacity * 100);
  }

  // Get number of pints remaining
  public getPintsRemaining(): number {
    let remaining = this.getOuncesRemaining();
    return Math.floor(remaining / 16);
  }

  // Get number of ounces remaining
  public getOuncesRemaining(): number {
    let consumed = (this.fullWeight - this.currentWeight) * 16;
    return Math.floor(this.kegTypeCapacity - consumed);
  }
}

// An enum of available keg types
export enum KegType {
  Cornelius = 0,
  SixthBbl = 1,
  QuarterBbl = 2,
  HalfBbl = 3
}

// A model of the keg type's label names and capacity
export class KegTypeLabel {
  public name: string;
  public label: string;
  public capacity: number;

  constructor(name: string, label: string, capacity: number) {
    this.name = name;
    this.label = label;
    this.capacity = capacity;
  }
}

// A mapping of keg types to its keg properties
export const KEG_MAPPING = {
  map: new Map<number, KegTypeLabel>([
    [KegType.Cornelius, new KegTypeLabel('Cornelius Keg', 'Corny Keg', 640)],
    [KegType.SixthBbl, new KegTypeLabel('Sixth Barrel', '1/6 BBL', 661)],
    [KegType.QuarterBbl, new KegTypeLabel('Quarter Barrel', '1/4 BBL', 992)],
    [KegType.HalfBbl, new KegTypeLabel('Half Barrel', '1/2 BBL', 1984)]
  ])
};
