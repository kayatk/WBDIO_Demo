
class Locators {

    public get signupBtn(){
        return $('[class="register button big"]')
     }

     public get emailTxtBx(){
        // return $('["#email"]')
        return $('[id="email"]')
     }

     public get userNameTxtBx(){
        return $('[id="username"]')
    }
    public get passwordTxtBx(){
        return $('[id="password"]')
    } 

    public get dateTxtBx(){
        return $('[data-dob="dateOfBirth.day"]')
    }
    public get monthTxtBx(){
        return $('[data-dob="dateOfBirth.month"]')
    }
    public get yearTxtBx(){
        return $('[data-dob="dateOfBirth.year"]')
    }
     public get  cityTxtBx(){
         return $('[data-field="city"]');
     }

     public get cityDrpDwn(){
        return $('[data-region3="Chialamberto"]'); 
     }

    public get inputUsername () {
        return $('[data-testid="username-login"]');
    }

    public get inputPassword () {
        return $('[data-testid="password-login"]');
    }

    public get loginBtn(){
        return $('[data-testid="button-login"]')
    }

    public get loginNavigationBtn (){
       return $("[data-testid='login-splash-button']")
    }

    public get homepageTitle(){
        return $('[class="menu-button mailbox column"]')
     }
      
     public get confirmBtn(){
        return $('(//div[@class="button big"])[3]')
     }

        public get consentCheckBx(){
        return $('//div[@id="termsAndConditions_declaredRead"]//input[@class="cc-tickbox-input"]')
     }

     public get registerConfirmBtn(){
        return $('[data-register="submit"]')
     }

     
     public get signUpBtn(){
        return $('[class="menu-button mailbox column"]')
     }
     public get Consent1Btn(){
        return $('[for="termsAndConditions_typeOfInformation_radio_confirm"]')
     }

     public get Consent2Btn(){
        return $('[for="cookieStatement_analyticalCookies_radio_confirm"]')
     }
     
     public get Consent3Btn(){
        return $('[for="termsAndConditions_content_radio_confirm"]')
     }

     public get Consent4Btn(){
        return $('[for="privacyStatement_yourInformation_radio_confirm"]')
     }
  
     public get Consent5Btn(){
        return $('for="mediaGiantNL_permissionToGetUpdates_radio_confirm"]')
     }
     
     public get Consent6Btn(){
        return $('for="mediaGiantNL_permissionToGetUpsaleOffers_radio_confirm"]')
     }
     

}

export default new Locators()