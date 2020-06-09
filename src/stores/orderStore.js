import {observable,action} from 'mobx'
import {getCurrentDate} from '../globals/functions';

class orderStore {

    @observable  instructor = {
        identity:{
            fitstNameText:'',
            surNameText:'',
            profileUri:'',
            placeOfBirthText:'',
            frontUri:'',
            backUri:'',
            addressText:'',
            zipCodeText:'',
            cityText:'',
            emailText:'',
            phoneText:'',
            passwordText:'',
            confirmPasswordText:'',
            date:getCurrentDate(),
            selectedDropdownValue:'',
            complementText:'',
            secondEmailText:'',
            secondPhoneText:'',
        },
        details:{
            numberText: '',
            placeOfDeliveryText: '',

            dateOfObtaining: getCurrentDate(),
            validityDate: getCurrentDate(),
            drivingLicenseUri: '',
            
            liceneseObtained: false,

            licenseFor: null,
              licenseType: null,


            dateOfAuthorization: getCurrentDate(),
            expirationDate: getCurrentDate(),
            issuingAuthorityText: '',
            
            authorizationUri: '',

            serialNumberText: '',
  
            kblsUri: '',
 
            selectedDropdownValue: '',
            
            selectedLicenseForValue: '',
            selectedLicenseTypeValue: '',
      
            selectedLicenseIndex: 0,
              
            licenseForindex:0,
            licenseTypeIndex:0,
      
      
        },
        insurance:{
            insurerText:'',

            policeNumberText: '',
      
            insuranceExpirationDate: '',
            rcUri: '',
            vehicleInsurerText: '',
            vehicleNumberText: '',
      
            startDate: '',
            endDate: '',
            greenCardUri: '',
      

        },
        vehicle:{
            agreed:false,
        },
    };
    @observable splash = null;
    @observable plans = {};
    @observable locale = 'ur';
    @observable tabLoaded = false;    
    @observable clicked = false;

    setClicked(clicked){
        this.clicked = clicked;
    }
    setTabLoaded(tabLoaded){
        this.tabLoaded = tabLoaded;
    }

}


const store = new orderStore();

export default store;