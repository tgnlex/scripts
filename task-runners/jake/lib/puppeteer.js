import puppeteer from 'puppeteer';

const newPage = async () => {
  const browser = await puppeteer.launch();
  const puppet = await browser.newPage();
  return puppet;
}

const pupNav = async(url, puppet) =>{
  await puppet.goto(`${url}`); 
  await puppet.setViewport({width: 1000, height: 1024});
  return puppet;
}

export {newPage, pupNav};

