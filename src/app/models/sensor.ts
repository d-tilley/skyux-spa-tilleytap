import { SensorData } from './sensor-data';

/**
 * Represents an IoT sensor
 */
export interface Sensor {

  /**
   * The sensor id
   */
  id?: string;

  /**
   * The sensor type
   */
  type?: Sensor.SensorTypeEnum;

  /**
   * The data collected from the sensor
   */
  sensorData?: SensorData;

  /**
   * Metadata specific to the sensor type
   */
  metadata?: any;
}

export namespace Sensor {
  export type SensorTypeEnum = 0 | 1;
  export const sensorTypeEnum = {
      Weight: 0 as SensorTypeEnum,
      Temperature: 1 as SensorTypeEnum
  };
}
