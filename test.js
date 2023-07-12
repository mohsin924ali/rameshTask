const { pause } = require("codeceptjs");
const { async } = require("rxjs");
const elements = require('./elements.js');

Feature('Cotton Traders');

Scenario('fill your cart', async ({ I }) => {
    await I.say('Navigating to Shop');
    for (let arrayLoop =0; arrayLoop < 9; arrayLoop++ ){
        const arrayLinks = ['shopButton','selectMen','clothing','kintwear','item','selectColor','addToBag','snackBar','viewBag'];
       await I.waitForElement(elements.objects[arrayLinks[arrayLoop]], 5);
       await I.tap(elements.objects[arrayLinks[arrayLoop]]);
       await I.wait(3);
    }

  });