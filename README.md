<h1>Garage Sailor</h1>

Live version: https://garage-sailor.herokuapp.com/
<hr></hr>

Authors: Michael Benefiel, Dustin Watkins, Billy Hodes, Josh Ragon


<hr></hr>

<h3> App demo </h3>

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/Iqr6_3PuALs/0.jpg)](https://youtu.be/sVho6BaKim8)

<h2> About Garage Sailor</h2>
Are you looking for a garage sale, or trying to promote your own? Well Garage Sailor is the app for you! Garage Sailor shows garage sales in your area with information about locations, items and prices. It is the perfect way to find that piece of furniture you've been looking for at a bargain price. Garage Sailor is easy to use: Just specify whether you are a buyer or seller and begin sailing! You can add items to your cart so you can keep track of which garage sales are on your radar.

<h2> Why use Garage Sailor? </h2>
- Sellers can advertise their garage sale to a greater audience

- Simple interface

- Buyers can see items at a garage sale without leaving home

- Keep track of the items you want and where they are

<h2> Future development </h2>
- Garage "Sailors" are the future. 

- The "Sailors" will bridge the gap between the traditional old-fashioned garage sale and the online shopping community.  Just because someone has a garage sale, doesn't mean they have the time, means, or even just the desire, to post all of their things online.  The "sailor" takes care of that for them by posting items they find while out garage sailing.  

- There is an opportunity to incentivize sailors to improve their skills once the app gains traction. 

- Buyers will be able to "follow" their favorite sellers or sailors, and even ask for them to be on the lookout for their specific treasures. 


<hr></hr>

<h2>Technologies used</h2>

[Bootstrap](http://getbootstrap.com/)

[Materialize](https://materializecss.com/)

[Node.js](https://nodejs.org/en/)

[Express](https://expressjs.com/)

[Handlebars](https://handlebarsjs.com/)

[MySQL](https://www.mysql.com/)

[Sequelize](http://docs.sequelizejs.com/)

[Heroku](https://heroku.com/)


<hr></hr>

<h4>Product Features</h4>

- config
    - connection.js
        - establish database connection
    - orm.js
        - object for all of our SQL statement functions
            - all selects all burgers from database
            - create creates a new burger and inserts it into the database
            - update updates a database change
            - delete removes burger from database

- controllers
    - burger_controllers.js
        - routing for our burger app
            - get pulls all burgers from database and displays on screen
            - post and create will post new burger on screen and in database      
            - put and update will update database and move burger to devoured after button click
            - delete will remove burger from screen and database

    - db
        - schema.sql
        - seeds.sql
      
- models
    - burger.js
        - importing orm.js to create functions that will interact with database
    
    - public
        - assets for images, css and simple js file
        - app.get to pull survey page

- views
    - handlebars functionality

- server.js
    - configuration of server and application
