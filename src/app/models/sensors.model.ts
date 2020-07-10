import { Sensor } from './sensor.model';

/**
 * Represents a collection of IoT sensors
 */
export interface Sensors {

  /**
   * The sensors collection
   */
  records?: Array<Sensor>;
}
