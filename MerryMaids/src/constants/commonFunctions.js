//import Moment from 'moment';
import { PermissionsAndroid } from 'react-native'
import SnackBar from "react-native-snackbar-dialog-options"
import Colors from './colors';

async function requestGalleryPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        'title': 'BUCKiTDREAM',
        'message': 'BUCKiTDREAM needs access to your external storage '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the gallery")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}
async function requestContactPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'BUCKiTDREAM',
        'message': 'BUCKiTDREAM needs access to your Contacts '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the gallery")
    } else {
      console.log("Camera permission denied")
    }
  } catch (err) {
    console.warn(err)
  }
}

const validateEmail = (email) => {
  var re = /^(([^<>()\[\]\\,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

 const isRequestComplete = (request) => {
   if(request === undefined){
    return false
   }else if ( (request.makeId === undefined || request.makeId == '') || request.issues == ''
    || request.firstDate === '' || request.firstDayTme === null  || request.secondDate === '' || request.secondDayTme === null) {
    return false
  } 
  return true 
}

const isFinalRequestComplete = (request) => {
  if(request === undefined){
   return false
  }else if ( (request.makeId === undefined || request.makeId == '') || request.issues == ''
   || request.firstDate === '' || request.firstDayTme === null  || request.secondDate === '' || request.secondDayTme === null
   || request.mechanicId == '') {
   return false
 } 
 return true 
}

export function showErrorMessage(text) {
  return SnackBar.show(text, {
    style: {
      flex: 1,
      marginBottom: 20
    },
    backgroundColor: Colors.WHITE,
    textColor: Colors.TEXT_INPUT_LABLE_COLOR,
    position: "top",
    duration: 3000,
    containerGradientStyle: { padding: 30, marginTop: 10 }
  });
}

export { validateEmail, requestGalleryPermission, requestContactPermission , isRequestComplete, isFinalRequestComplete};