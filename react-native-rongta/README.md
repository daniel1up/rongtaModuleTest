
# react-native-rongta

## Getting started

`$ npm install react-native-rongta --legacy-peer-deps`

### Mostly automatic installation

`$ react-native link react-native-rongta`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rongta` and add `RNRongta.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRongta.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRongtaPackage;` to the imports at the top of the file
  - Add `new RNRongtaPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rongta'
  	project(':react-native-rongta').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rongta/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rongta')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRongta.sln` in `node_modules/react-native-rongta/windows/RNRongta.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Rongta.RNRongta;` to the usings at the top of the file
  - Add `new RNRongtaPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRongta from 'react-native-rongta';

// TODO: What to do with the module?
// Find the devices
await RNRongta.getDevicesList(		(error, listDevice) => {
      this.setState({ isLoading: false });
      if (error) {
        alert(error)
      } else {
        console.log('_startScan', listDevice)
        if (listDevice.length > 0) {
          this.setState({ listPrinter: listDevice, isOpenModal: true });
        } else {
          alert("No device is searched")
        }
      }
    });
// connect to device in native
    await RNRongta.connectToDevice( item.id,
      (isSuccess) => {
        if(isSuccess == "1") {
          alert("Connect success")
          this.setState({ isConnect: true });
        } else {
          alert("connect failed")
          this.setState({ isConnect: false });
        }
      }
    );
// Print 
	RNRongta.print( "test print");
```
  
