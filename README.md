# Web Scraping

Web scraping is the process of extracting data from websites using `automated tools`. This data can then be used for a variety of purposes, such as `market research`, `data analysis`, and `lead generation`.
One of the main advantages of web scraping is that it can provide access to data that would otherwise be difficult or impossible to obtain. This data can be used to gain insights into customer behavior, track industry trends, and monitor competitor activity.
However, web scraping also has some disadvantages. One of the main drawbacks is that it can violate website terms of service or copyright laws.
We can do web scraping using Nodejs using npm packages like `cheerio` and `puppeteer`

## Why can't we do web scraping in the browser?

Web scraping involves automated data extraction from websites, and while libraries like Puppeteer and Cheerio provide easy and efficient ways of manipulating web pages, they are not designed for use in the browser. This is because web scraping requires access to the page's HTML source code, which cannot be accessed by client-side scripts in the browser due to browser security restrictions. Instead, web scraping tools like Puppeteer and Cheerio must be run on the server-side using a Node.js environment. This allows access to the HTML source code, and makes it possible to automate tasks like filling out forms, clicking buttons, and extracting data from web pages.

## Cheerio vs Puppeteer

|                      | Cheerio                                                              | Puppeteer                                                                              |
| -------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Purpose              | Library for parsing and manipulating HTML                            | Node.js library for controlling a headless Chrome browser                              |
| Platform             | Can be used in both browser and server-side environments             | Server-side only, requires Node.js                                                     |
| DOM manipulation     | Uses jQuery-like syntax for selecting and manipulating HTML elements | Provides a complete browser environment, allowing for full DOM manipulation            |
| Browser automation   | Not designed for browser automation                                  | Designed for browser automation, can interact with web pages and simulate user actions |
| JavaScript execution | Does not execute JavaScript code on web pages                        | Can execute JavaScript code on web pages                                               |
| Performance          | Lightweight and faster compared to Puppeteer                         | Slower compared to Cheerio due to the overhead of launching a headless Chrome browser  |
| Learning curve       | Easy to learn and use, especially for those familiar with jQuery     | More complex and requires knowledge of Node.js and Chrome DevTools                     |
| Use cases            | Parsing and manipulating HTML data                                   | Browser automation, web scraping, automated testing, and web crawling                  |

## How to install

You should have `nodejs` and `npm` installed on your system. To check, open the terminal and run the following commands:
`node -v`
`npm -v`
If they give an error, download nodejs from [here](https://nodejs.org/en/download)
To install cheerio, just run the following command in the terminal
`npm install cheerio`
To install puppeteer, run the following command,
`npm install puppeteer`

## Basic Project

Here is how you can create a basic project structure for using Cheerio and Puppeteer:

1. Create a new folder for your project.
2. Open your terminal or command prompt and navigate to the project folder.
3. Initialize a new Node.js project using the command `npm init`.
4. Install Cheerio and Puppeteer using npm by running the commands `npm install cheerio` and `npm install puppeteer`.
5. Create a new JavaScript file in the project folder, for example `index.js`.
6. In the JavaScript file, import the required libraries using the require/import function:
   ```
   const cheerio = require('cheerio');
   const puppeteer = require('puppeteer');
   ```
   OR
   ```(js)
   import cheerio from 'cheerio'
   import puppeteer from 'puppeteer'
   ```
7. Write your code using Cheerio or Puppeteer functions to accomplish your desired task, such as scraping data from a website or automating browser actions.
8. Run the code using Node.js by executing the command `node index.js` in your terminal or command prompt.

## Building a Link Preview System

A link preview is a snippet of information that appears when you share a link on social media or messaging apps. It typically includes a title, description, and image from the linked website. Web scraping can be used to extract this information and create link previews automatically for websites that don't provide them natively.

We will be building this using cheerio and see how it works in the nodejs environment

To run the link preview, in your terminal, run the following command:
`node link_preview.js`

## Taking a screenshot with puppeteer

Not exactly a use case of web-scraping, but puppeteer can do much more. It can be used to interact with a website, load content and even take screenshots. Now we will try to see how it works.
We can easily take the screenshot of a website using puppeteer by using the
`page.screenshot()` command.
We can edit the options by taking various options, like path.

To convert the page to pdf, we can use the `page.pdf()` command.
We can edit the options by using path and format to change where to store the pdf and the format

## Get product price

In this project, we are going to find prices of different items on various shopping websites, like amazon and myntra using the puppeteer library along with cheerio using what we learnt earlier.
We visit both the sites, enter the product we want in the search and select the first item and access the value using cheerio.
We can now see the price of the product in one place using our code
