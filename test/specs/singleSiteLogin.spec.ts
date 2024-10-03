import Splash from "../samples/Splash.page";


describe('Handle Application Login', () => {

    before(async () => {
        await browser.maximizeWindow();
    });
        
            it(`Verify Valid Login for site:`, async () => {
                // Navigate to the site URL with custom query parameter
               // browser.pause(5000)
                await browser.url(`/?custom=frekkeforbindelser.com`);
                await Splash.clickLoginNavigationBtn();
                await Splash.enterLoginUserName("Testauto93");
                await Splash.enterLoginPassword('Test@2024');
                await Splash.clickLoginBtn();
                await Splash.collectConsent();
                await Splash.verifyMembersPage();
                await Splash.clickLogoutBtn();
                //await Splash.verifySplashPage();  
            });
        });


