# The Weekend breaker
[link to the "weekend breaker"](https://zolske.github.io/project-1_weekend-break/index.html)
## An Overview

The website offers 3 different weekend break packages for the user to choose from. The packages change every month.

The site targets users who need a break from work and want to get away for a weekend to recharge.

<img src="assets/images/doc/weekend-breaker-website-mockup.webp">

*the mockup shows the side in different sizes ( [techsini.com](http://techsini.com/multi-mockup/index.php "opens a new page (in a new tab) to techsini") )*
<hr>

## Main Features
- **navigation bar**
    ![nav bar](assets/images/doc/nav-bar.gif)
    - intuitive icons
    - hover effect changes font color and shows hint
    - "hamburger" menu expanse when there is enough width
    - nav bar moves with the page down
    - unique design *(buttons float over the page)*
- **mobile first** design
    ![nav bar](assets/images/doc/column-1-2-3.gif)
    - images are loaded by the browser according to the screen width  
    *(saves download time for mobile phones)*
    - responsive layout  
    *("product card" column changes from 1 to 3)*
    - changing the browser font-size dose not break the design  *(media queries are in **em** and length units are in **rem** or **%**)*
- **animations**
    - the images in the "product card" change every 10 seconds  *(to keep the user engaged)*
    - user reviews change in intervals through slides  
    *(with the help of Bootstrap)* 
    - the price on the "booking" page uses CSS animation to create an flash effect
- image **sprite**
    ![nav bar](assets/images/doc/sprite-screenshot.webp)
    - three image sprites have been used to display together 24 images  
    *(increase performance by reducing the requests the browser needs to make to the server)*
- **form validation**
    - has been used on all input elements  
    *(avoids bad data and hacker attacks to the server)*

***
# 1. User Experience (UX)
## The User Stories  
Are the stories about the **values** the user and the owner are looking for.  

- **the visitor stories :** As a visitor to the site ...  
    1. ... I want to know what the site is about.  
    *(the first text the user reads is an overview of the side)*
    2. ... I want to know if I can trust the site.  
    *(user feedback, the "about us" and "contact" section should build up user trust)*
    2. ... get inspired.  
    *(images and slogans should inspire the user)*
    3. ... find an easy way to navigate the side.  
    *(the navigation bar is fixed to the viewport and uses intuitive icons)*
    4. ... keep up to date with changes.  
    *(the user can subscribe)*
    5. ... get help if I need it.  
    *("contact us" and "faq" section)*
    6. ... I want to enjoy a fast and responsive site.  
    *(site is build mobile first and has a very good performance)*  
    <br>

- **the business stories :** As a business owner of the site ...  
    1. ... I want to offer my clients the possibility to stay up to date  
    *(user can subscribe)*
    2. ... keep my clients engaged with animations and images  
    *(the site has moving elements which should help to draw attention, a wide selection of pictures)*
    3. ... present my product in an easy to understand form  
*(the user gets the landing page an overview of the package and can get more detailed information on an separate page)*
    4. ... make sure that my data base gets not hacked or filled with invalid information  
    *(form validation is used on the booking page and on the subscribe input element)*  
***
# 2. The Scoop
## Future release :
- user login account
- current weather at holiday location widget
- shopping cart
- chatbot
***
# 3. The Structure
How the user is navigating the side.
## Information Architecture (IA)
#### **Navigation menu on mobile :**
- two main navigation buttons which are consistent on every page  
    1. home button, which takes the user always back to the landing page
    2. "hamburger menu" which contains the remaining navigation buttons  
- buttons are lager so they can be accessed 
- buttons contain easy to understand icons
- the "faq", "about us", "contact us" leading to section on the landing page but can be accessed from any of the other sites
- the navigation bar is also working as locator for sections on the landing page
- "book" and "package" have there own individual sites  
- navigation bar is fixed to the top section of the viewport (any time accessible)
#### **Navigation menu on tablet, desktop :**
- works the same way to make it easier for the user
- only differences are :
    - when there is enough space, the navigation bar unfolds from the "hamburger menu"
    - the following features are also working for mobile but require a mouse :
        - on hover the text color changes to indicate, that it is a clickable button
        - on hover a text appears to give more explanation

***
# 4. The Skeleton
The wireframes have been created with "Balsamiq".
- The original wireframes can be found here [mobile](assets/docs/wireframe_mobile_weekend-break.pdf) and here [desktop](assets/docs/wireframe_desktop_weekend-break.pdf) .

***
# 5. The Surface (the design)
## Color Scheme

The site uses colors which remained the user on summer.
- orange, like the sun when she rises or sets
- blue, like the see or sky
- yellow like the beach or sun  

![color palette](assets/images/doc/color-palaete-vertical.JPG)  

*(the palette has been created with [coolors](https://coolors.co/))*  

The colers are not too intense, to get the user in a more relaxed mood.

The site also uses gradients, to mix the main colors together.
![color palette](assets/images/doc/gradient.jpg)  

*(the gradient was created with [cssgradient](https://cssgradient.io/))*

This style creates a easy summery look.

## Font Style
Standard fonts have been used, to increase maximum compatibility and give the user a font-style he is familiar with.  

There is a "cursive" font used beneath the product cards to create a handwritten style. 

---
# Testing
## HTML validation - Nu Html Checker
- **home page (index.html):** link to html validator site "Nu Html Checker" [with index.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fzolske.github.io%2Fproject-1_weekend-break%2Findex.html)
- **book page (booking.html):** link to html validator site "Nu Html Checker" [with booking.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fzolske.github.io%2Fproject-1_weekend-break%2Fbooking.html)
- **package page (more_info.html):** link to html validator site "Nu Html Checker" [with more_info.html](https://validator.w3.org/nu/?doc=https%3A%2F%2Fzolske.github.io%2Fproject-1_weekend-break%2Fmore_info.html)

- **no errors or warnings**  

![nu html checker](assets/images/doc/html-validator.jpg)

***
## CSS validation - W3C CSS Validator
- **home page (index.html):** link to W3C CSS Validator site [with index.html](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fzolske.github.io%2Fproject-1_weekend-break%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- **book page (booking.html):** link to W3C CSS Validator site [with booking.html](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fzolske.github.io%2Fproject-1_weekend-break%2Fbooking.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- **package page (more_info.html):** link to W3C CSS Validator site [with more_info.html](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fzolske.github.io%2Fproject-1_weekend-break%2Fmore_info.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- **no errors but 240 (244 on package) warnings**
    - the warnings are related to bootstrap and normalize.css  

![css checker](assets/images/doc/css-validator.jpg)

![css badge](assets/images/doc/vcss.gif) ![css-blue badge](assets/images/doc/vcss-blue.gif)
## lighthouse validator
- **home page (index.html): - mobile**  
![index.html mobile](assets/images/doc/lighthouse-index-mobile.jpg)
- **home page (index.html): - desktop**  
![index.html desktop](assets/images/doc/lighthouse-index-desktop.jpg)

# Credits
## code
### w3schools
Is a very usefully side to look basics up and to get inspiration for layouts / elements.
- the idea for the nav bar came from the side but originally it was stick but changed later changed to fixed  

    see link: [How TO - Sticky/Affix Navbar](https://www.w3schools.com/howto/howto_js_navbar_sticky.asp)
- the idea for the slide show for the product card is from here, but I adjusted the source code  
see link: [How TO - Slideshow](https://www.w3schools.com/howto/howto_js_slideshow.asp)

- the idea for the responsive image grid is from here (used on package page) but I needed to change code because images are not as a sprite  
see link: [How TO - Responsive Image Grid](https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp)  
### coding with Mosh
He makes very good videos, to the point, motivating voice, essential.  
- I have watched the html / css course, the idea for the sprites and the performance boost is from here  
see link: [Complete HTML5/CSS3 Course from Zero to Hero](https://codewithmosh.com/p/the-ultimate-html-css)
### bootstrap
Has a lot of elements which can be used. How ever, I experienced some issues with bootstrap and normalize.css.
- I used an image carousel for the user comments.
see link: [With indicators](https://getbootstrap.com/docs/5.0/components/carousel/)

***
## tools

### Responsive CSS Sprites
Creates **responsive** sprites! Is a free online tool,
- I used the tool to create the responsive sprites from the "package" page  
see link: [Responsive CSS Sprites](https://responsive-css.spritegen.com/)

### Coolors
- to create the color palette.  

    see link: [coolors](https://coolors.co/)

### cssgradient
- very good tool to create gradients.  

    see link: [cssgradient](https://cssgradient.io/)
***
## Icons
- are provided by [Font Awesome](https://fontawesome.com/)
***
## Logo
- inspired by an icon I found in the internet, but I have changed it
***
## Media
- all images have been taking from [unsplashed](https://unsplash.com/)
***
## Acknowledgements
- My special thanks to ...
    - my mentor, Mr. Spencer Barriball for his motivation and advise
    - [code institute](https://codeinstitute.net/), for there support and leaning material
***
## Disclaimer
- The information provided on this website is only an demonstration of my skills, the company "the weekend breaker" dose not exist.

