import LTFRI_Homepage_PO from "../page-objects/LTFRI_Homepage_PO.js";
import Postcode_Page_PO from "../page-objects/Postcode_Page_PO.js";
import Select_Address_PO from "../page-objects/Postcode_Page_PO.js";

describe("Validate the functionality of the Select an Address Page", () => {
  beforeEach(function () {
    LTFRI_Homepage_PO.open();
    LTFRI_Homepage_PO.startNow();
    Postcode_Page_PO.postcodeTextBox.setValue("CW5 5US");
    Postcode_Page_PO.postCodePageContinueCommandButton.click();
    browser.switchWindow("Select an address - GOV.UK");
  });

  it("Validate that the feedback link is displayed on the Select an Address Page", () => {
    expect(Select_Address_PO.feedBackLink.isDisplayed()).to.be.true;
    expect(Select_Address_PO.helpFooterLink.isDisplayed()).to.be.true;
    expect(Select_Address_PO.cookiesFooterLink.isDisplayed()).to.be.true;
    expect(Select_Address_PO.termsConditionsFooterLink.isDisplayed()).to.be
      .true;
    expect(Select_Address_PO.contactFooterLink.isDisplayed()).to.be.true;
    expect(Select_Address_PO.ordnanceSurveyFooterLink.isDisplayed()).to.be.true;
    expect(Select_Address_PO.openGovernmentLicenceFooterLink.isDisplayed()).to
      .be.true;
  });
});
