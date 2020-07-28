# Burger Sequelized

## Bootcamp HW 15 - Sequelize

### HW Instructions

* Remove all references to your vanilla MySQL queries and replace them with Sequelize queries.

* That means:

  * Replacing your MySQL `Burger` model with a Sequelized equivalent.

    * Don't forget to edit the model and initial migration file to make the burger's devoured field carry a default value of false -- otherwise you might encounter bugs.
      * There's no option to include that default in the command line, so you'll need to open up your editor to make this change. 
    * Don't forget to sync the models!

    * Edit your new `config.json` file to include your database configurations. Place your JawsDB details in the `production` property of your json file; the details of your local database go in the `developer` property.

    * Remove your old ORM file, as well as any references to it in `burgers_controller.js`. Replace those references with Sequelize's ORM methods.

* When you finish, your site should function just like your last one:

### **Description**

[Burger Sequelized](https://burger-sequelized-28078.herokuapp.com/) is the sequel to [Burger](https://floating-retreat-94058.herokuapp.com/) and functions the same.  Sequelize is used instead of the custom ORM used in the original Burger to query the database. Postgres is used for the database and the site is hosted on Heroku. ESLint is used for code linting configured to the Airbnb JavaScript style guide. 

### **Usage**
* Enter your burger of choice in the blank text field (plain, deluxe, supreme, etc.)
* Click the Submit button to add it to the Burgers section
* Click the Devour it! button to move it to the Burgers Devoured section

### **Tech**
* [Express](https://github.com/expressjs/express)
* [Sequelize](https://github.com/sequelize/sequelize)
* [Postgres](https://github.com/postgres/postgres)
* [JQuery](https://github.com/jquery/jquery)
* [Express Handlebars](https://github.com/ericf/express-handlebars)
* [Node-Sass](https://github.com/sass/node-sass)
* [ESLint](https://github.com/eslint/eslint)

### **Setup**
Install dependencies:
```
$ npm install
```
Start the server with auto-update:
```
$ npm start:watch
```
Run Sass compiler with auto-update:
```
$ npm sass:watch
```
Run ESLint with auto-fix:
```
$ npm lint:fix
```