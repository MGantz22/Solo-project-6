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

### Setup/Installation Requirements for using ExchangeRate-API

- _Clone or download this repo to your local repository_
- _Visit [Exchangerate-Api](https://www.exchangerate-api.com/)_
- _Sign up for an account and free API key, and sign in._
- _Once you are signed in, API key should be displayed on Dashboard, if not click on the API keys tab._
- _Locate the API key called Active. You'll use this key in every request you make to the ExchangeRate-API._
- _Install all packages with $ `npm install`_
- _Add .env file to .gitignore, commit and push (before touching .env)._
- _Touch .env and add API _ KEY=[YOUR API KEY], replacing brackets with your individual key and removing any spaces._
- _Install all packages with $ `npm install`_
- _Build the project using $ `npm run build`_
- _Start a live server with $ `npm run start`_

## Known Bugs

- _Prints 404 error and not custom error message_
- _If you find additional bugs not listed here, please email me at mgantz22@icloud.com with the subject_ **[_Repo Name_] Bug** _and include:_
  - BUG: _A brief description of the bug_
  - FIX: _Suggestion for solution (if you have one!)_
- _If you'd like to be credited, please also include your_ **_github user profile link_**

## Future implementations

## License
_MIT License_

Copyright (c) _2023_  _Mitchell Gantz_

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS 
BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.