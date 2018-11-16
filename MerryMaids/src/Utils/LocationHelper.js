import { PermissionsAndroid, Platform } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';

export const getLocation = (title, message, callback) =>{
    if(Platform.OS === 'ios'){
      this.getCurrentPosition(callback);
    }else{
      this.requestLocationPermission(title, message, callback);
    }
}

async function requestLocationPermission(title, message, callback){
  try {
    let _this = this;
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        'title': title,
        'message': message
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      _this.getCurrentPosition(callback);
    }
  } catch (err) {
    alert(err.message);
  }
}

getCurrentPosition = (callback) =>{
  let _this = this;
  navigator.geolocation.getCurrentPosition(
    (position) => {
      _this.getCurrentPlace(callback);
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
  );
}

getCurrentPlace = (callback) =>{
    RNGooglePlaces.getCurrentPlace()
    .then((results) => {
      callback(results);
    })
    .catch((error) => console.log(error.message));
}