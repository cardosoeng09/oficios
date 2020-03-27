import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://10.25.160.5/`;  // specify the start page

const redigir = Selector('#click-menu1-0-5')//.find('a')
const img_red = Selector('#click-menu1-0').find('img')
const frame_menu = Selector('frame').withAttribute('name','mainMenu')

    test('My first test', async t => {
        await t
            .typeText('#usuario', 'cardoso')
            .typeText('#senha', 'Cartoso')
            .click('#login')
            .switchToIframe(frame_menu)
            //.wait(5000)
            //.click('#click-menu1-0')
            //.click(img_red)
            .click(redigir)
            .click('#62')
          
            .wait(5000)
    
            // Use the assertion to check if the actual header text is equal to the expected one
            //.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });

    //npm config set proxy http://cardoso:78945678@10.25.160.10:2000