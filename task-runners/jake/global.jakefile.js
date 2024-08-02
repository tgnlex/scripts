import {task, , desc} from 'jake';
import {openBrowser, pupNav} from './helpers/puppeteer.js`';
import {readline} from 'readline';
/** TODO
 * 1. Move the browser tasks to a seperate file, possibly under a namespace. 
 * 2. Get a shell library in here, to automate things I do on the command line. 
 * 3. Automate some build tasks. 
 * 4. See which web worker library I could integrate to run my tasks more efficiently
 * **/
desc('This is the default task.');
task('default', function () {
  console.log(`[JAKE] Says: Hello Alex!`);
  console.log(`[JAKE] Current Time: ${Date.now}`);
});

desc('Opens a web browser and sets the viewport')
task('browser', async function () {
  console.log('[Jake] Says: Opening browser...')
  const puppet = openBrowser();
  await puppet.setViewport({width: 1000, height: 1024});
  return 1;w
})

desc('Starts a web browser, opens a new page and sets the viewport')
task('goto-url', async function () {  
  const url = readline('[Jake] Says: Enter the url you would like to visit')
  console.log(`[JAKE] Says: Opening browser...`)
  const puppet = await openBrowser();
  await pupNav(puppet, url);
  return 1;
})

