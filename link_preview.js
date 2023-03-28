// To run this file, just run
// node link_preview.js
// in the terminal or cmd
import axios from "axios";
import { load } from "cheerio";
import getUrls from "get-urls";

// the function to get the meta details
// from the given text
function scrapeMessages(text) {
  const urls = Array.from(getUrls(text));
  const requests = urls.map(async (url) => {
    const res = await axios.get(url);
    const html = await res.data;

    // This is how we initialize cheerio
    const $ = load(html);

    // A general function to get the meta tag
    const getMetaTag = (name) =>
      $(`meta[name=${name}]`).attr("content") ||
      $(`meta[property=og:${name}]`).attr("content") ||
      $(`meta[property=twitter:${name}]`).attr("content");

    // Return the relavant data
    // By accessing the DOM elements
    return {
      url,
      title: $("title").first().text(),
      favicon: $('link[rel="shortcut icon"]').attr("href"),
      description: getMetaTag("description"),
      image: getMetaTag("image"),
    };
  });

  return Promise.all(requests);
}

// Call the function here with the proper text
const text =
  "This is a text about https://wikipedia.com and https://instagram.com";

// This is an IIFE ->
// Immediately invoked arrow function
// Since we cannot use await at the top level
(async () => {
  const scapredData = await scrapeMessages(text);
  console.log(scapredData);
})();
