var beautiful = require('beautiful-scrape')

const scrapping = async (url)=>{
    const topmate = await beautiful.scrape(url);

    // find first title
    // const title = reddit.find("a.title")
    // console.log(title)
    
    // find all titles
    // reddit.findAll("a.title").forEach(title =>{
    //   console.log(title)
    // });

    // get raw dom
    const one = topmate.dom[1].children
    const two = one[1].children;
    const three = two[1].children;
    const four = JSON.parse(three[0].raw)
    const services = four.props.pageProps.userData.services;
    
    const data = services.map((service)=>{
        return {title: service.title, price: service.charge, desc: service.description}
    })

    return data;

    // parse html
    // const html = await beautiful.parse('<div>hello</div><div>world</div>');

    // html.findAll("div").forEach(div =>{
    //   console.log(div)
    // });
}

module.exports = { scrapping }