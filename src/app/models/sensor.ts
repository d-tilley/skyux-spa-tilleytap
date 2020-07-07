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
   * The sensor data
   */
  data?: number;

  /**
   * Timestamp of the sensor data upload
   */
  timestamp?: number;

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
