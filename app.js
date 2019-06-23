var cheerio = require("cheerio");
var axios = require("axios");
var results = [];

var item="car";
var city="orlando";

axios.get(`https://${city}.craigslist.org/search/sss?query=${item}`).then(function(response) {

  var $ = cheerio.load(response.data);

  $(".result-row").each(function(i, element) {

    var title = $(element).children().find(".result-title").text().trim();
    var price = $(element).children().find(".result-meta").find(".result-price").text().trim();
    var link=$(element).children().find("a").attr("href").trim();

        results.push({
        title: title,
        price:price,
        link:link
    });
        
  });

  console.log(results);
});

