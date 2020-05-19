import Base_PO from "./Base_PO";

class Select_Address_PO extends Base_PO {
  open() {
    super.open(
     // "https://flood-warning-information.service.gov.uk/long-term-flood-risk/"
     "https://flood-warning-information.service.gov.uk/long-term-flood-risk/search?postcode=CW5%205US"
    );
  }


  //checks that the correct Page title is displayed
  get pageTitleLink() {
    return $("/html//div[@id='address-page']//h1[@class='govuk-heading-xl']");
  }
  //Link that asks the user to provide feedback
  get feedBackLink() {
    return $("//a[text()='feedback']");
  }
  // Text that should be displayed is This service will tell you the flood risk of an area, not a specific property.
  get floodRiskAreaText() {
    return $("//div[@class='govuk-inset-text']/p[1]");
  }

  //Link to change the postcode if the user wants to change the postcode
  get selectChangePostcodeLink() {
    return $("//a[text()='Change']");
   
  }
  //This is a reference to the continue command button
  get selectContinueCommandButton() {
    return $("//button[@type='submit']");
  }

  //List box that displays addresses linked to the post code the user has entered
  get selectAddressListBox() {
    return $("//select[@id='address']");
  }
  //postcode Text Displayed on page
  get postcodeTextHeader() {
    return $("//span[@class='govuk-label']");
  }
  //help link at footer of page
  get helpFooterLink() {
    return $("//a[@href='https://www.gov.uk/help']");
  }
  //cookies link at the footer of the page
  get cookiesFooterLink() {
    return $(
      "//a[@href='https://flood-warning-information.service.gov.uk/cookies']"
    );
  }
  //privacy notice at the footer of the page
  get privacyNoticeFooterLink() {
    return $(
      "//a[@href='https://flood-warning-information.service.gov.uk/privacy-notice']"
    );
  }
  //Terms and conditions link at the footer of the page
  get termsConditionsFooterLink() {
    return $(
      "//a[@href='https://flood-warning-information.service.gov.uk/terms-conditions']"
    );
  }
  //contactlink at the footer of the page
  get contactFooterLink() {
    return $("//a[@href='https://www.gov.uk/contact']");
  }
  //ordnance survey link at footer of the page
  get ordnanceSurveyFooterLink() {
    return $("//a[@href='http://www.ordnancesurvey.co.uk']");
  }
  //Open Government link at the footer of the page
  get openGovernmentLicenceFooterLink() {
    return $(
      "//a[@href='https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/']"
    );
  }

  startNow() {
    this.startNowCommandButton.click();
  }

  get callFloodlineText() {
    return $("//li[.='Call Floodline: 0345 988 1188']");
  }

  get typeTalkText() {
    return $("//li[.='Type talk: 0345 602 6340 (for the hard of hearing)']");
  }
  get findOutAboutCallChargesLink() {
    return $("//a[@title='Find out more about call charges']");
  }

  get whereDoYouWantToCheckHeader() {
    return $("//h1[@class='govuk-heading-xl']");
  }

  get mainContent(){
    return $("//main[@id='main-content']")
  }

  startNowPostcode() {
    browser.switchWindow(
      "https://flood-warning-information.service.gov.uk/long-term-flood-risk/postcode"
    );
  }
}

export default new Select_Address_PO();
