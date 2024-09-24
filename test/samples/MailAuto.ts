import { remote } from 'webdriverio';
import axios from 'axios';
import SplashPage from './Splash.page';

const MailHogAPI = 'http://localhost:8025/api/v2/messages';

(async () => {
    // Initialize WebDriverIO
    const browser = await remote({
        capabilities: { browserName: 'chrome' }
    });

    // Step 1: Trigger the email by interacting with the web UI (e.g., filling out a form)
    await browser.maximizeWindow()
        await browser.url('/?custom=yournearbycrush.com');
        await SplashPage.clickSignupBtn();
        await SplashPage.enterEmail('kayatst12+aut07@gmail.com')
        await SplashPage.enterUserName('Testauto07')
        await SplashPage.enterPassword('Test@2024')
        await SplashPage.enterCity('Chicago') 
        await SplashPage.enterBirthDate('10')
        await SplashPage.enterBirthMonth('10')
        await SplashPage.enterBirthYear('1998')
        await browser.pause(2000)
        await SplashPage.clickConfirmBtn()
        await SplashPage.checkConsent()
        await browser.pause(4000)
        await SplashPage.clickRegisterConfirmBtn()
        await browser.pause(4000)


    // Step 2: Wait for the email to arrive in MailHog
    const getEmailFromMailHog = async (): Promise<any> => {
        const response = await axios.get(MailHogAPI);
        const messages = response.data.items;

        // Filter messages to find the one sent to the test email address
        const email = messages.find((message: any) => 
            message.Content.Headers.To[0] === 'kayatst12+aut07@gmail.com'
        );

        return email;
    };

    // Retry logic to wait for the email
    let email;
    let retries = 10;
    while (!email && retries > 0) {
        email = await getEmailFromMailHog();
        retries--;
        await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds before retrying
    }

    if (!email) {
        console.error('Email was not received.');
        await browser.deleteSession();
        process.exit(1);
    }

    // Step 3: Extract verification link or code from the email
    const emailBody = email.Content.Body;
    const verificationLink = emailBody.match(/https:\/\/your-app\.com\/verify\?token=\w+/);

    if (!verificationLink) {
        console.error('Verification link was not found in the email.');
        await browser.deleteSession();
        process.exit(1);
    }

    console.log('Verification link found:', verificationLink[0]);

    // Step 4: Use WebdriverIO to visit the verification link
    await browser.url(verificationLink[0]);

    // Perform any assertions if necessary, for example:
    const successMessage = await browser.$('#success');
    const isDisplayed = await successMessage.isDisplayed();

    if (isDisplayed) {
        console.log('Email verification successful!');
    } else {
        console.error('Email verification failed.');
    }

    // Close browser session
    await browser.deleteSession();
})();
