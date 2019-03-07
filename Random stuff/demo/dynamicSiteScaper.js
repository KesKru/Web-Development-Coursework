const puppeteer = require('puppeteer');
// const cors = 'http://localhost:8080/';
// const $ = require('cheerio');

// const city = 'Berlin';
// const country = 'Germany';

// const city = 'Vilnius';
// const country = 'Lithuania';

const url = 'https://www.airbnb.com/s/Vilnius--Lithuania/homes?refinement_paths%5B%5D=%2Fhomes&adults=1&children=0&checkin=2019-03-14&price_max=19&checkout=2019-03-16&query=Vilnius%2C%20Lithuania&place_id=ChIJH4KkkAKi3UYRsNjpcIzRAAM&allow_override%5B%5D=&s_tag=bo1vjmGt';
// const url = `https://www.airbnb.com/s/${city}--${country}/homes?refinement_paths%5B%5D=%2Fhomes&adults=1&children=0&checkin=2019-03-14&price_max=19&checkout=2019-03-16&query=${city}%2C%20${country}&place_id=ChIJAVkDPzdOqEcRcDteW0YgIQQ&allow_override%5B%5D=&s_tag=RvvIlCWU`;
// const url = `https://www.airbnb.com/s/${city}--${country}/homes?refinement_paths%5B%5D=%2Fhomes&adults=1&children=0&checkin=2019-03-14&price_max=19&checkout=2019-03-16&query=${city}%2C%20${country}`;
// const url = `https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes&adults=1&children=0&checkin=2019-03-14&price_max=19&checkout=2019-03-16&query=${city}%2C%20${country}`;


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('._1p0spma2');

  const html = await page.evaluate(()=>{
    const selection = Array.from(document.querySelectorAll('._1p0spma2 span:nth-child(2)'));
    const selArray = selection.map((item)=>{return item.innerText})
    return selArray;
  });
  const loc = await page.evaluate(()=>{
    const selection = document.querySelector('._1cxn5bx2').value;
    // const selArray = selection.map((item)=>{return item.innerText})
    return selection;
  });

  console.log(html.length)
  console.log(loc)
  console.log(html)
  await browser.close();
})()


