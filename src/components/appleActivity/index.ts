import { Color } from 'react-native-svg';
import * as CustomActivityRings from './AppleActivity';

export interface IRing {
    start?: Color;
    end?: Color;
    bg?: Color;
    theta?: number;
    size?: number;
  }

const CustomActiviyRings = CustomActivityRings.default;

export {CustomActiviyRings};