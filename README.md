# Dragon Ball Z Memory Game

## Overview
Memory game created with React.

## Overview
We use media tags because we dont want any of our content to get cut out when you make your window smaller.
My portfolio is composed of three link pages in my Navbar:
* [About]() - Main index page/ landing page
* [Portfolio]() - Portfolio Page
* [Contact]() - Contact Page


Below is a following example of what my basic portfolio looks like with the different `@media screen tags` 
As you can see none of my content gets cut off even if I make the window smaller.

![alt text](assets/images/responsive.gif)

### Getting Started
You will need to create your HTML files, and in a separate folder create an `assets` folder where you will have two folders
`css and images` in your css folder that's where you want your CSS stylesheet `style.css`.
Your css file will be in charge of the front-end, you control and decide the styling of every part of your portfolio.
To make our portfolio responsive, the @media screen tags must be added in your CSS file.

Here is a code snippet of how my media screen tags and my styling looks like:

``` 
 @media screen and (max-width: 980px) {
    .container {
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      clear: both;
    }
    #masthead {
      position: fixed;
      z-index: 99;
      width: 100%;
      max-width: 960px;
      margin: 0 0 30px;
      overflow: auto;
      color: #ffffff;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      clear: both;
    }
    #masthead {
      position: fixed;
      z-index: 99;
      width: 100%;
      max-width: 768px;
      margin: 0 0 30px;
      overflow: auto;
      color: #ffffff;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
    }
  }

  @media screen and (max-width: 640px) {
    .container {
      width: 100%;
      max-width: 640px;
      margin: 0 auto;
      clear: both;
    }
    #masthead {
      position: static;
      z-index: 99;
      width: 100%;
      max-width: 640px;
      margin: 0 0 30px;
      overflow: auto;
      color: #ffffff;
      background: #ffffff;
      border-bottom: 2px solid #cccccc;
    }
  }

```

### Built With
* HTML
* CSS
* Node JS
* 
* [VSC](https) - Visual Studio Code, Editor
* [Github Pages](https) - Deployment

## Authors

* **Maira Jimenez** - *Initial work* - [Mairaaj14](https://github.com/Mairaaj14)


## Acknowledgments

* Jerome Chenette
* Sasha Patsel
* Jimmy Tu
