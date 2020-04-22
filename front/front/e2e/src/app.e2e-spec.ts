import { browser, logging, by, element } from 'protractor';
import { AppPage } from './app.po'
describe('workspace-project App', () => {
  it('should navigate to login page', function () {
    browser.get("http://localhost:8182");
    expect(browser.getCurrentUrl()).toContain("login");
  })
  it('should login successfully', function () {
    var email = element(by.name("txtEmail"));
    var pass = element(by.name("txtPass"));
    email.sendKeys("kriti@gmail.com");
    pass.sendKeys("hello");
    var button = element(by.name("submit"));
    button.click();
    expect(browser.getCurrentUrl()).toContain("search");
  })
  it('should add item to cart', function () {
    element.all(by.name("add")).then(function (allButtons) {
      allButtons[0].click();
      allButtons[1].click();
      allButtons[3].click();
    })
    var viewCart = element(by.name("view"));
    viewCart.click();
    expect(browser.getCurrentUrl()).toContain("view");
  })
 

 
  