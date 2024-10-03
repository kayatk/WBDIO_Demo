import SplashPage from "../samples/Splash.page";
import MailHogService from "../samples/MailHogService"; 

describe('Handle Application SignUp Process', () => {
    it('Verify SignUp Process', async () => {
        // Step 1: Trigger the email by interacting with the web UI
        await browser.maximizeWindow();
       // await browser.url('/?custom=yournearbycrush.com');
        await browser.url('/?custom=peachplaza.com');
        await SplashPage.clickSignupBtn()
        //For chicasconsecretos
        await SplashPage.selectGenderBtn('male')
        await SplashPage.selectGenderTargetBtn('female')
        await SplashPage.enterEmail('kayatst12+auto94@gmail.com');
        await SplashPage.enterUserName('Testauto94');
        await SplashPage.enterPassword('Test@2024');
        await SplashPage.enterCity('Chi');
        await SplashPage.enterBirthDate('10');
        await SplashPage.enterBirthMonth('10');
        await SplashPage.enterBirthYear('1998');
        console.info("Entered the DOB =====================> : ")
        console.info("browser waited for 2 minutes =====================> : ")
        await SplashPage.clickConfirmBtn();
        console.info("browser performed first confirm button click =====================> : ")
       console.info("browser waited for 2 minutes =====================> : ")
        await SplashPage.checkConsent();
        await  browser.pause(2000)
        console.info("browser clicked on  the consent =====================> : ")
      await SplashPage.clickRegisterConfirmBtn();
       // console.info("browser clicked on the register button =====================> : ")
        

       // const mailHogService = new MailHogService('kayatst12+auto84@gmail.com');
       await browser.pause(4000)
      await MailHogService.navigateToActivationURL('kayatst12+auto94@gmail.com')
      //  await SplashPage.clickNotificationDenyBtn()
      await browser.pause(3000)
        await SplashPage.acceptConsent1()
        await SplashPage.acceptConsent2()
        await SplashPage.acceptConsent3()
        await SplashPage.acceptConsent4()
        await SplashPage.acceptConsent5()
        await SplashPage.acceptConsent6()
       await browser.pause(2000);
        await SplashPage.clickNotificationDenyBtn()
        await browser.pause(2000)
        await SplashPage.clickLogoutBtn()

    });
});


