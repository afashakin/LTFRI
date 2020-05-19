
import LTFRI_Homepage_PO from "../page-objects/LTFRI_Homepage_PO.js";

describe("Test LTFRI Homepage", () => {
  beforeEach(function () {
    LTFRI_Homepage_PO.open();
    browser.setWindowSize(1800, 1200);
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("long-term-flood-risk");
    expect(pageDetails.title).to.contain("Check the long term flood risk");
  });

  it("Validate that all expected URL's are displayed on the Page", () => {
    expect(LTFRI_Homepage_PO.feedBackLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.walesScotlandIrelandLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.startNowCommandButton.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.otherWaysGettingInformationLink.isDisplayed()).to
      .be.true;
    expect(LTFRI_Homepage_PO.cookiesFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.privacyNoticeFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.termsConditionsFooterLink.isDisplayed()).to.be
      .true;
    expect(LTFRI_Homepage_PO.contactFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.ordnanceSurveyFooterLink.isDisplayed()).to.be.true;
    expect(LTFRI_Homepage_PO.openGovernmentLicenceFooterLink.isDisplayed()).to
      .be.true;
  });

  it("Validate that the appropriate page is displayed if the Feedback link is Selected", () => {
    LTFRI_Homepage_PO.feedBackLink.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("feedback");
    expect(pageDetails.title).to.contain(
      "Provide feedback about this service - GOV.UK"
    );
  });

  it("Validate that the appropriate page is displayed when the Wales,Scotland Ireland Link is selected", () => {
    LTFRI_Homepage_PO.walesScotlandIrelandLink.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("england-only");
    expect(pageDetails.title).to.contain("Check your long term flood risk");
  });

  it("Validate that call Floodline text is displayed when the Other ways of getting Information Link is selected", () => {
    LTFRI_Homepage_PO.otherWaysGettingInformationLink.click();
    expect(LTFRI_Homepage_PO.callFloodlineText.getText()).to.contain(
      "Call Floodline"
    );
  });

  it("Validate that the Find out more about call charges link is displayed ", () => {
    LTFRI_Homepage_PO.otherWaysGettingInformationLink.click();
    expect(LTFRI_Homepage_PO.findOutAboutCallChargesLink.isDisplayed()).to.be
      .true;
  });

  it("Validate that the Call Charges page is displayed after it's linkk is selected ", () => {
    LTFRI_Homepage_PO.otherWaysGettingInformationLink.click();
    LTFRI_Homepage_PO.findOutAboutCallChargesLink.click();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.title).to.contain("Call charges and phone numbers");
  });

  it("Validate that the Start Now command button will navigate the user to the Postcode Page", () => {
    LTFRI_Homepage_PO.startNow();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("postcode");
    expect(pageDetails.title).to.contain("Where do you want to check?");
  });

  it("Validate that the Start Now command button will switch activity to the postcode page", () => {
    LTFRI_Homepage_PO.startNow();
    LTFRI_Homepage_PO.startNowPostcode();
    const pageDetails = browser.getUrlAndTitle();
    expect(pageDetails.url).to.contain("postcode");
    expect(pageDetails.title).to.contain("Where do you want to check?");
    browser.pause(10000);
  });
});


   