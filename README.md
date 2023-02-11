# _Currency Exchange_


#### By _Mitchell Gantz_

#### _A code review project for basic API setup and calls._

## Technologies Used

- _JavaScript_
- _HTML_
- _CSS_
- _Webpack_
- _eslint_
- _babel_
- _API_


## Description/Objectives

- _A user should be able to enter an amount (in U.S. dollars), then specify another currency (such as the United Kingdom Pound Sterling), and submit a form. The user should then see the total amount they entered in converted currency._
- _Users should be able to convert U.S. currency into at least 5 other types of currency_.
- _If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)_
- _If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)_

_Lesson prompt:_ https://www.learnhowtoprogram.com/intermediate-javascript/asynchrony-and-apis/openweather-api-giphy-api

## Setup/Installation Requirements

- _Clone or download this repo to your local repository_
- _Update titles in package.json and webpack.config.js to reflect new project title_
- _Update README.md with correct project information_
- _Ensure proper files are disallowed in .gitignore_
- _Git init a new local directory and create a new repository in github_
- _Run npm install_
- _Npm run start to build and launch server_
- _Proceed to update files to reflect new project_

### Setup/Installation for using ExchangeRate-API

- _Visit [Exchangerate-Api](https://www.exchangerate-api.com/)_
- _Sign up for an account and free API key, and sign in._
- _Once you are signed in, API key should be displayed on Dashboard, if not click on the API keys tab._
- _Locate the API key called Active. You'll use this key in every request you make to the ExchangeRate-API._
- _Add .env file to .gitignore, commit and push (before touching .env)._
- _Touch .env and add API _ KEY=[YOUR API KEY], replacing brackets with your individual key and removing any spaces._
- _Install all packages with $ npm install_
- _Build the project using $ npm run build_
- _Start a live server with $ npm run start_

## Known Bugs

- _Prints 404 error and not custom error message_
- _If you find additional bugs not listed here, please email me at mgantz22@icloud.com with the subject_ **[_Repo Name_] Bug** _and include:_
  - _BUG: _A brief description of the bug_
  - _FIX: _Suggestion for solution (if you have one!)_
- _If you'd like to be credited, please also include your_ **_github user profile link_**

## Future implementations

## License
_MIT_

Copyright (c) _2023_  _Mitchell Gantz_