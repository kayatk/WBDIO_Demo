import Splash from "../samples/Splash.page";
import  {getSites, Site} from '../utils/readJson'

describe('Handle Application Login', () => {
    const sitesData: Site[] = getSites();  

    before(async () => {
      await browser.maximizeWindow();
    });

    sitesData.forEach((site: Site) => {
        describe(`Project: ${site.projectName}`, () => {
            it(`Verify Valid Login for site: ${site.url}`, async () => {
                await browser.url(`/?custom=${site.url}`);
                console.log(`navigating to the site ${site.url}`)
                // Perform the login process
               
               await Splash.clickLoginNavigationBtn();
                await Splash.enterLoginUserName("Testauto93");
                await Splash.enterLoginPassword('Test@2024');
                await Splash.clickLoginBtn();
                await Splash.collectConsent();
               // await Splash.clickNotificationDenyBtn()
                await browser.pause(2000);
                await browser.refresh();
                await Splash.navigateToProfile()
                await Splash.verifyMembersPage();
                await Splash.clickLogoutBtn();
                await Splash.verifySplashPage(); 
                console.log("===========================================================================================================================================================")
            });
        });
    });
});



