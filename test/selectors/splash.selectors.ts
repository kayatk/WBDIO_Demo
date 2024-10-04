export const splashSelectors = {
    splashPage: {
        login: {
            homepageTitle: '[class="menu-button mailbox column"]',
            loginNavigationBtnSelector: '[data-testid="login-splash-button"]',
            usernameFieldSelector: '[data-testid="username-login"]',
            passwordFieldSelector: '[data-testid="password-login"]',
            submitButtonSelector: '[data-testid="button-login"]',
            forgotPasswordSelector: '[href="#ForgotPassword"]'
        },
        signUp: {
            signupoverlaySelector: 'signup-container .signup-overlay',
            buttonSelector: '[class="register button big"]',
            usernameFieldSelector: "#username",
            emailFieldSelector: "#email",
            passwordFieldSelector: "#password",
            dateOfBirthDayFieldSelector: 'input[data-dob="dateOfBirth.day"]',
            dateOfBirthMonthFieldSelector: 'input[data-dob="dateOfBirth.month"]',
            dateOfBirthYearFieldSelector: 'input[data-dob="dateOfBirth.year"]',
            regionFieldSelector: 'select[data-field="region"]',
            cityFieldSelector: 'input[data-field="city"]',
            cityFieldDropDown: '(//ul[@class="location-suggest"]//li)[1]',
            zipcodeFieldSelector: 'input[data-field="postcode"]',
            confirmPasswordFieldSelector: '[data-testid="confirm-password-register"]',
            confirmButtonSelector: '[data-register="confirm"]',
            submitButtonSelector: '[data-register="submit"]',
            termsAndConditionsCheckboxSelector: '#termsAndConditions_declaredRead > .cc-tickbox-input',
            genderButton: 'label[for="gender1-male"]',
            genderTargetButton:'label[for="gender2-female"]',
            genderDropdown:'[data-field="gender"]',
            genderTargetDropdown: '[data-field="gender-target"]',


        },
        ageVerification: {
            containerSelector: '.cc-popup-content',
            confirmButtonSelector: 'button.cc-popup-button-confirm',
            refuseButtonSelector: 'button.cc-popup-button-refute'
        },

        collectConsent: {
            consent1AgreeBtn: '[for="termsAndConditions_typeOfInformation_radio_confirm"]',
            consent2AgreeBtn: '[for="cookieStatement_analyticalCookies_radio_confirm"]',
            consent3AgreeBtn: '[for="termsAndConditions_content_radio_confirm"]',
            consent4AgreeBtn: '[for="privacyStatement_yourInformation_radio_confirm"]',
            consent5AgreeBtn: '[for="mediaGiantNL_permissionToGetUpdates_radio_confirm"]',
            consent6AgreeBtn: '[for="mediaGiantNL_permissionToGetUpsaleOffers_radio_confirm"]',
        },  
    },
    membersPage: {
        unconfirmedPopupEmailSelector: '#nonConfirmed .email',
    },
};