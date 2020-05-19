import Base_PO from "./Base_PO";

class Postcode_Page_PO extends Base_PO {
  open() {
    super.open(
      "https://flood-warning-information.service.gov.uk/long-term-flood-risk/"
    );
  }

  get feedBackLink() {
    return $("//a[text()='feedback']");
  }

  get notSpecificPropertyText() {
    return $("//div[@id='postcode-page']//div[@class='govuk-inset-text']/p");
  }

  get postcodeHintText() {
    return $("//span[@id='postcode-hint']");
  }

  get postcodeTextBox() {
    return $("//input[@id='postcode']");
  }

  get postCodePageContinueCommandButton() {
    return $("//form[@method='post']/button[@type='submit']");
  }

  get viewMapAreasFloodingLink() {
    return $("//a[@href='/long-term-flood-risk/map']");
  }

  get royalMailPostcodeFinderLink() {
    return $(
      "//div[@id='postcode-page']//a[@href='http://www.royalmail.com/find-a-postcode']"
    );
  }

  get helpFooterLink() {
    return $("//a[@href='https://www.gov.uk/help']");
  }

  get cookiesFooterLink() {
    return $(
      "//a[@href='https://flood-warning-information.service.gov.uk/cookies']"
    );
  }

  get privacyNoticeFooterLink() {
    return $(
      "//a[@href='https://flood-warning-information.service.gov.uk/privacy-notice']"
    );
  }

  get termsConditionsFooterLink() {
    return $(
      "//a[@href='https://flood-warning-information.service.gov.uk/terms-conditions']"
    );
  }

  get contactFooterLink() {
    return $("//a[@href='https://www.gov.uk/contact']");
  }

  get errorPostCodeTextHeader() {
    return $("//span[@id='postcode-error']");
  }

  get ordnanceSurveyFooterLink() {
    return $("//a[@href='http://www.ordnancesurvey.co.uk']");
  }

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

  startNowPostcode() {
    browser.switchWindow(
      "https://flood-warning-information.service.gov.uk/long-term-flood-risk/postcode"
    );
  }
}

export default new Postcode_Page_PO();
