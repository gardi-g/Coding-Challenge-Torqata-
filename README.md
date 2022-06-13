# Coding-Challenge-Torqata-
Coding Challenge assigned by Torqata
# What went wrong
 ```sh
- The authentication wasn't implemented because I couldn't retrieve the jwt token. 
I was sending the login credentitals to a localhost using docker (http://localhost:8000/api/register).
I was getting an error stating that: 
"The get method is not supported for this route. Supported methods:POST."
I also tried to use google firebase authentication but there was a small issue which I couldn't find.
So instead I just left it as it is and the login credentials are going to the firebase backend.

- The chart was implemented but unfortunately I was getting errors stating that "result.series is not iterable". 
All of the variables are array's so it should have work but I was wrong, couldn't find the error. 
I could have implemented manually but it ruins the purpose of this assesment.

- Was deploying the angular app on App Engine
but whenever the app was deployed and I clicked on the url I was getting a "502 Bad Gateway" error.
(https://endless-beach-353101.uk.r.appspot.com/)
 ```
# Installation 
  1. Clone the repo 
   ```sh
   git clone https://github.com/gardi-g/Coding-Challenge-Torqata-
   ```
  2. If you don't have Node.js https://nodejs.org/en/download/
 
  3. Install NPM packages
   ```sh
   npm install
   ```
   4. To run project (get data)
   ```sh
   npm start
   ```
   5. Run the development server
   ```sh
   ng serve
   ```
# Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.
# Running unit tests
```sh
Run ng test to execute the unit tests via Karma.
```
# Running linting
```sh
npm run lint
```
