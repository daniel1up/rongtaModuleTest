import { NativeModules } from 'react-native';
const { RNRongta } = NativeModules
module.exports = {
  getDevicesList: RNRongta.getDevicesList,
  print: RNRongta.print,
  connectToDevice: RNRongta.connectToDevice,
};