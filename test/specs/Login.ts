import { setValue } from "webdriverio/build/commands/element";
import  Locators from "../samples/Locators";

/*describe('Running the first test',()=>{
    it('should have', async () => {
        await browser.maximizeWindow()
        await  browser.url('http://mydailyfling.com/')
        await browser.pause(2000)
        await Locators.loginNavigationBtn.click()
        await  browser.pause(2000)
        await Locators.inputUsername.setValue('Test')
        await Locators.inputPassword.setValue('Test@2024')
        await Locators.loginBtn.click()
        await browser.pause(2000)
        await expect(browser).toHaveUrl(expect.stringContaining('members'))
      //  await expect(Locators.homepageTitle).toBeExisting();
      await $("[data-testid='button-deny']").click()
        await $(('=Logout')).click()
        await expect(browser).toHaveUrl(expect.stringContaining('splash'))
    });
})*/

describe('SignUp flow', () => {
    it('signuo',  async() => {
        await browser.maximizeWindow()
        await  browser.url('/')
        await browser.pause(2000)
        await Locators.signupBtn.click()
        await browser.pause(2000)
        await Locators.emailTxtBx.setValue('kayatst12+aut05@gmail.com')
        await Locators.userNameTxtBx.setValue('Test05')
        await Locators.passwordTxtBx.setValue('Test@2024')
        await Locators.cityTxtBx.setValue('Chialamberto') 
        await Locators.cityDrpDwn.click() 
        await Locators.dateTxtBx.setValue('10')
        await Locators.monthTxtBx.setValue('10')
        await Locators.yearTxtBx.setValue('19998')
        await Locators.confirmBtn.click()
        await browser.pause(2000)
        await Locators.consentCheckBx.click()
        await browser.pause(2000)
        await Locators.registerConfirmBtn.click()
        await browser.pause(5000)
    });
});


