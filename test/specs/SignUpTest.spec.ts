import SplashPage from "../samples/Splash.page";
import MailHogService from "../samples/MailHogService"; // Import MailHogService

describe('Handle Application SignUp Process', () => {
    it('Verify Login Process', async () => {
        // Step 1: Trigger the email by interacting with the web UI
        await browser.maximizeWindow();
       // await browser.url('/?custom=yournearbycrush.com');
        await browser.url('/?custom=chicasconsecretos.com');
        await SplashPage.clickSignupBtn()
        //For chicasconsecretos
        await SplashPage.selectGenderBtn('male')
        await SplashPage.selectGenderTargetBtn('female')
        await SplashPage.enterEmail('kayatst12+auto80@gmail.com');
        await SplashPage.enterUserName('Testauto80');
        await SplashPage.enterPassword('Test@2024');
        await SplashPage.enterCity('Chi');
        await SplashPage.enterBirthDate('10');
        await SplashPage.enterBirthMonth('10');
        await SplashPage.enterBirthYear('1998');
        await browser.pause(2000);
        await SplashPage.clickConfirmBtn();
        await SplashPage.checkConsent();
        await browser.pause(4000);
        await SplashPage.clickRegisterConfirmBtn();
        

        const mailHogService = new MailHogService('kayatst12+auto80@gmail.com');
        mailHogService.navigateToActivationURL('kayatst12+auto80@gmail.com')
        await SplashPage.clickNotificationDenyBtn()
        await SplashPage.acceptConsent1()
        await SplashPage.acceptConsent2()
        await SplashPage.acceptConsent3()
        await SplashPage.acceptConsent4()
        await SplashPage.acceptConsent5()
        await SplashPage.acceptConsent6()
        await browser.pause(3000);
        await SplashPage.clickNotificationDenyBtn()
        

    });
});
