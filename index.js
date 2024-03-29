const { Builder, By, Key, until } = require ("selenium-webdriver");
const credentials = require ("./credentials.js");
var xlsx = require ("xlsx");
var driver;

async function openExcel(){
    var workbook = xlsx.readFile('./example/Prueba.xlsx');
    var sheets = workbook.SheetNames;
    const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheets[0]],{raw:true});
    for ( let i = 0; i < data.length; i++){
        const person = data[i];
        await addUser(`${person.Nombre} ${person.Nick}`, person.Email);
    }
}
async function openBrowser() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.sorteoamigosecreto.com/sorteos/1901310?step=2");
    return driver;
}

async function loginToPage(user, pass){
    await driver.findElement(By.name("email")).sendKeys(user);
    await driver.findElement(By.name("password")).sendKeys(pass,Key.RETURN);
    await driver.wait(until.urlIs('https://www.sorteoamigosecreto.com/sorteos'),2000)
    await driver.get("https://www.sorteoamigosecreto.com/sorteos/1901310?step=2");
}

async function addUser(name, email){
    await driver.findElement(By.name("name")).sendKeys(name);
    await driver.findElement(By.name("email")).sendKeys(email,Key.RETURN);
}

async function ready(){
    const btnNext = await driver.findElement(By.id('btn-next'));
    await driver.wait(until.elementIsEnabled(btnNext), 2000);
    await btnNext.click();

    const btnready = await driver.findElement(By.className('raffle-wizard-next-button btn btn-primary ng-binding ng-isolate-scope'));
    await driver.wait(until.elementIsEnabled(btnready), 6000);
    await btnready.click();
}

async function main(){
    driver = await openBrowser();
    await loginToPage(credentials.user, credentials.pass);
    await openExcel();
    await ready();
}

main();