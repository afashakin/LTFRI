import LTFRI_Homepage_PO from "../page-objects/LTFRI_Homepage_PO.js";
import Postcode_Page_PO from "../page-objects/Postcode_Page_PO.js";

describe("Postcode Page", () => {
  beforeEach(function () {
    LTFRI_Homepage_PO.open();
    browser.setWindowSize(1800, 1200);
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("long-term-flood-risk");
    expect(pageDetails.title).to.contain("Check the long term flood risk");
    LTFRI_Homepage_PO.startNow();
  });

  it("Validate that all expected content is displayed on the Page", () => {
    expect(LTFRI_Homepage_PO.feedBackLink.isDisplayed()).to.be.true;
    expect(Postcode_Page_PO.viewMapAreasFloodingLink.isDisplayed()).to.be.true;
    expect(Postcode_Page_PO.royalMailPostcodeFinderLink.isDisplayed()).to.be
      .true;
    expect(Postcode_Page_PO.postCodePageContinueCommandButton.isDisplayed()).to
      .be.true;
    expect(Postcode_Page_PO.postcodeTextBox.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.cookiesFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.privacyNoticeFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.termsConditionsFooterLink.isDisplayed()).to.be
      .true;
    expect(LTFRI_Homepage_PO.contactFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.ordnanceSurveyFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.openGovernmentLicenceFooterLink.isDisplayed()).to
      .be.true;
  });

  it("Validate that the not a specific property text is displayed on the page", () => {
    expect(Postcode_Page_PO.notSpecificPropertyText.getText()).to.contain(
      "not a specific property"
    );
  });

  it("Validate that the Where do want to Check Heading text is displayed on the page", () => {
    expect(Postcode_Page_PO.whereDoYouWantToCheckHeader.getText()).to.contain(
      "Where do you want to check?"
    );
  });

  it("Validate that the Learn more about Flood Risk Page will be displayed after the View Map of Areas at Risk of Flooding Link is selected", () => {
    Postcode_Page_PO.viewMapAreasFloodingLink.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("map");
    expect(pageDetails.title).to.contain("Learn more about flood risk");
  });

  it("Validate that the Learn more about Flood Risk Page will be displayed after the View Map of Areas at Risk of Flooding Link is selected", () => {
    Postcode_Page_PO.viewMapAreasFloodingLink.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("map");
    expect(pageDetails.title).to.contain("Learn more about flood risk");
  });

  it("Validate that after the Use the Royal Mail Postcode Finder the appropriate page is displayed", () => {
    Postcode_Page_PO.royalMailPostcodeFinderLink.click();
    browser.switchWindow("https://www.royalmail.com/find-a-postcode");
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("postcode");
    expect(pageDetails.title).to.contain("Postcode Finder – Find an Address");
  });

  it("Validate that after a valid postcode is entered the search postcode page is displayed ", () => {
    Postcode_Page_PO.postcodeTextBox.setValue("CW5 5US");
    Postcode_Page_PO.postCodePageContinueCommandButton.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("search?");
    expect(pageDetails.title).to.contain("Select an address");
  });

  it("Validate that if a valid postcode is entered with two spaces the search postcode page is displayed ", () => {
    Postcode_Page_PO.postcodeTextBox.setValue("CW5  5US");
    Postcode_Page_PO.postCodePageContinueCommandButton.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("search?");
    expect(pageDetails.title).to.contain("Select an address");
  });

  it("Validate that if an invalid postcode is entered and then a valid postcode is entered the search postcode page is displayed ", () => {
    Postcode_Page_PO.postcodeTextBox.setValue(" ");
    Postcode_Page_PO.postcodeTextBox.setValue("CW5 5US");
    Postcode_Page_PO.postCodePageContinueCommandButton.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("search?");
    expect(pageDetails.title).to.contain("Select an address");
  });
  it("Validate that if an invalid postcode is entered the appropriate error message will be displayed", () => {
    Postcode_Page_PO.postcodeTextBox.setValue("CW% 5US");
    Postcode_Page_PO.postCodePageContinueCommandButton.click();
    expect(Postcode_Page_PO.errorPostCodeTextHeader.getText()).to.contain(
      "Enter a full postcode in England"
    );
  });

  it("Validate that if an invalid postcode is entered the appropriate error message will be displayed", () => {
    Postcode_Page_PO.postcodeTextBox.setValue(" ");
    Postcode_Page_PO.postCodePageContinueCommandButton.click();
    expect(Postcode_Page_PO.errorPostCodeTextHeader.getText()).to.contain(
      "Enter a full postcode in England"
    );
  });
});
