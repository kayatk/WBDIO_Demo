export class Splash{

  constructor() {
    // initialization code
  }

  get signupBtn(){return $('[class="register button big"]')}
 // get signupBtn(){return $('(//a[@data-popup-ref="register-splash"])[1]')}
 // get signupBtn(){return $('(//button[@data-button="register"])[1]')}
  genderBtn(text:string){return $('label[for="gender1-'+text+'"]')}
  genderTargetBtn(text:string){return $('label[for="gender2-'+text+'"]')}
  get emailTxtBx(){return $('[id="email"]')}
  get userNameTxtBx(){return $('[id="username"]')}
  get passwordTxtBx(){return $('[id="password"]')} 
  get dateTxtBx(){return $('[data-dob="dateOfBirth.day"]')}
  get monthTxtBx(){return $('[data-dob="dateOfBirth.month"]')}
  get yearTxtBx(){return $('[data-dob="dateOfBirth.year"]')}
  get  cityTxtBx(){return $('[data-field="city"]')}
  //get cityDrpDwn(){return $('//li[@data-locality="Chicago"]'); }
  get cityDrpDwn(){return $('(//ul[@class="location-suggest"]//li)[1]'); }
 // get cityDrpDwn(){return $('[data-region3="Chialamberto"]'); }
  get inputUsername () {return $('[data-testid="username-login"]');}
  get inputPassword () {return $('[data-testid="password-login"]');}
  get loginBtn(){return $('[data-testid="button-login"]')}
  get loginNavigationBtn (){return $("[data-testid='login-splash-button']")}
  get homepageTitle(){return $('[class="menu-button mailbox column"]')}
  get confirmBtn(){return $('(//div[@class="button big"])[3]')}
  get consentCheckBx(){return $('//div[@id="termsAndConditions_declaredRead"]//input[@class="cc-tickbox-input"]')}
  get registerConfirmBtn(){return $('[data-register="submit"]')}
  get signUpBtn(){return $('[class="menu-button mailbox column"]')}
  get Consent1AgreeBtn(){return $('[for="termsAndConditions_typeOfInformation_radio_coudnfirm"]')}
  get Consent2AgreeBtn(){return $('[for="cookieStatement_analyticalCookies_radio_confirm"]')}
  get Consent3AgreeBtn(){return $('[for="termsAndConditions_content_radio_confirm"]')}
  get Consent4AgreeBtn(){return $('[for="privacyStatement_yourInformation_radio_confirm"]')}
  get Consent5AgreeBtn(){return $('[for="mediaGiantNL_permissionToGetUpdates_radio_confirm"]')}
  get Consent6AgreeBtn(){return $('[for="mediaGiantNL_permissionToGetUpsaleOffers_radio_confirm"]')}  
  get notificationDenyBtn(){return $("[data-testid='button-deny']")}
  get Logout(){return $(('=Logout'))}
  get notificationPopUp(){return $('[class="cc-popup-button-confirm"]')}


  async clickSignupBtn(): Promise<this> {
   // await this.signupBtn.waitForClickable()
    await this.signupBtn.click()
    return this;
   }

   async enterEmail(text: string): Promise<this> {
    await  this.emailTxtBx.waitForDisplayed()
    await this.emailTxtBx.setValue(text)
    return this
   }

//Gender Button 
//@param - To Define male/female
   async selectGenderBtn(text:string) {
    await this.genderBtn(text).waitForClickable()
    await this.genderBtn(text).click()
   }

//Gender-target button
//@param - To Define male/female
  async selectGenderTargetBtn(text:string) {
    await this.genderTargetBtn(text).waitForClickable()
    await this.genderTargetBtn(text).click()
  }

   async clickLoginNavigationBtn(): Promise<this>{
    await  this.loginNavigationBtn.waitForClickable()
    await this.loginNavigationBtn.click()
   return this
   }
   
   async enterUserName(text: string): Promise<this>{
    await this.userNameTxtBx.waitForDisplayed()
    await this.userNameTxtBx.setValue(text)
    return this
   }

   async enterPassword(text: string): Promise<this>{
    await this.passwordTxtBx.waitForDisplayed()
    await this.passwordTxtBx.setValue(text)
    return this
   }

   async enterCity(text: string): Promise<this>{
    await this.cityTxtBx.waitForDisplayed()
    await this.cityTxtBx.setValue(text)
    await this.cityDrpDwn.click() 
    return this
   }

   async enterBirthDate(text: string): Promise<this>{
    await this.dateTxtBx.waitForDisplayed()
    await this.dateTxtBx.setValue(text)
    return this
   }
   
   async enterBirthMonth(text: string): Promise<this>{
    await this.monthTxtBx.waitForDisplayed()
    await this.monthTxtBx.setValue(text)
    return this
   }

   async enterBirthYear(text: string): Promise<this>{
    await this.yearTxtBx.waitForDisplayed()
    await this.yearTxtBx.setValue(text)
    return this
   }
  
   async clickConfirmBtn(): Promise<this>{
    await this.confirmBtn.waitForClickable()
    await this.confirmBtn.click()
    return this
   }
  
   async checkConsent(): Promise<this>{
    await  this.consentCheckBx.waitForClickable()
    await this.consentCheckBx.click()
    return this
   }
    
   async clickRegisterConfirmBtn(): Promise<this>{
    await  this.registerConfirmBtn.waitForClickable()
    await  this.registerConfirmBtn.click()
    return this
   }
   
   async enterLoginUserName(text: string): Promise<this>{
    await this.inputUsername.waitForDisplayed()
     await this.inputUsername.setValue(text)
    return this
   }

   async enterLoginPassword( text: string): Promise<this>{
    await this.inputPassword.waitForDisplayed()
    await this.inputPassword.setValue(text)
    return this
   }

   async clickNotificationDenyBtn(): Promise<this>{
    await  this.notificationDenyBtn.waitForClickable()
    await this.notificationDenyBtn.click()
    return this
   }

   async clickLoginBtn(): Promise<this>{
    await  this.loginBtn.waitForClickable()
    await this.loginBtn.click()
    return this
   }
 
   async clickLogoutBtn(): Promise<this>{
    await  this.Logout.waitForClickable()
    await this.Logout.click()
    return this
   }
     
   async acceptConsent1(): Promise<this>{
    await  this.Consent1AgreeBtn.waitForClickable()
    await this.Consent1AgreeBtn.click()
    return this
   }

   async acceptConsent2(): Promise<this>{
      await  this.Consent2AgreeBtn.waitForClickable()
      await this.Consent2AgreeBtn.click()
    return this
   }

   async  acceptConsent3(): Promise<this>{
      await this.Consent3AgreeBtn.waitForClickable()
      await this.Consent3AgreeBtn.click()
    return this
   }

   async  acceptConsent4(): Promise<this>{
      await  this.Consent4AgreeBtn.waitForClickable()
      await this.Consent4AgreeBtn.click()
    return this
   }
 
   async  acceptConsent5(): Promise<this>{
      await  this.Consent5AgreeBtn.waitForClickable()
      await this.Consent5AgreeBtn.click()
    return this
   }

   async  acceptConsent6(): Promise<this>{
      await  this.Consent6AgreeBtn.waitForClickable()
      await this.Consent6AgreeBtn.click()
    return this
   }

   async verifyMembersPage(): Promise<this>{
    await expect(browser).toHaveUrl(expect.stringContaining('members'))
     return this
   }

   async verifySplashPage(): Promise<this>{
    await  expect(browser).toHaveUrl(expect.stringContaining('splash'))
    return this
  }

  async selectGender(): Promise<this>{
    const genderdropdown = $('[data-field="gender"]');
    await genderdropdown.selectByIndex(0);
    return this
  }

  async selectTargetGender(): Promise<this>{
    const genderdropdown = $('[data-field="gender-target"]');
    await genderdropdown.selectByIndex(1);
    return this
  }
  

}

export default new Splash()