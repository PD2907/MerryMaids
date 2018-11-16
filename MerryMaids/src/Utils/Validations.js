
import SnackBar from "react-native-snackbar-dialog-options";
import Colors from "../Constants/Colors";
import Strings from "../Constants/Strings";



    export function  validateEmail(email){
        var re = /^(([^<>()\[\]\\,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    export function validatePassword(password) {
        var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}/;
        
        return re.test(password);
    }

    export function validateName (text){
            var re = /^[a-zA-Z ]*$/;
            return re.test(text);
    }
    export function validateAboutMe (text){
            var re = /^[a-zA-Z _ '.,-]{0,500}$/;
            return re.test(text);
    }

      export function validateNumber (text){
            var re = /^[0-9]*$/;
            return re.test(text);
    }

    export function showErrorMessage (text){
            
        return SnackBar.show(text, {
          style: {
            flex: 1,
            marginBottom: 20
          },
          // backgroundColor: Colors.RED,
          textColor: "white",
          position: "top",
          duration: 3000,
          gradientColors: {
            gradient1: Colors.START_COLOR,
            gradient2: Colors.END_COLOR
          },
          gradient: true,
          containerGradientStyle: { padding: 30, marginTop: 10 }
        });

    }

    




