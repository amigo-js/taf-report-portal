// import LoginPage from '../pageobjects/login.page'
// import SecurePage from '../pageobjects/secure.page'

// // const loginPage = new LoginPage()

// describe('My Login application', async () => {

//     before( async ()  => {
// 	// 	// await LoginPage.open()
//         await browser.url("https://demo.reportportal.io/")
// 		await LoginPage.login('default', '1q2w3e!')
// 	})

//     it('should login with valid credentials', async () => {
//         // browser.url("https://demo.reportportal.io/")
//         // loginPage.login()
//         await browser.pause(3000)
//         // await browser.execute()
//         // await LoginPage.open()

        
//         // await expect(SecurePage.flashAlert).toBeExisting()
//         // await expect(SecurePage.flashAlert).toHaveTextContaining(
//         //     'You logged into a secure area!')
//     })
// })


import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //act
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        //assert
        await expect(await SecurePage.flashAlert).toBeExisting();
        await expect(await SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});