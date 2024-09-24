import Splash from "../samples/Splash.page";


describe('Handle Application Login', () => {
    it('Verify Valid Login function', async() => {
        
        const splashPage = new Splash();
        await browser.maximizeWindow()
        await browser.url('/')
        await splashPage.clickLoginNavigationBtn()
                        .enterLoginUserName("Test57")
                        .enterLoginPassword('Test@2024')
                        .clickLoginBtn()
                        .verifyMembersPage()
                        .clickNotificationDenyBtn()
                        .clickLogoutBtn()
                        .verifySplashPage()
    });
});