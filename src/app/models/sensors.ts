import { Sensor } from './sensor';

/**
 * Represents a collection of IoT sensors
 */
export interface Sensors {

  /**
   * The sensors collection
   */
  records?: Array<Sensor>;
}
