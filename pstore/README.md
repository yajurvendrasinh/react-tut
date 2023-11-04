# The Pet Store Inventory Management App

This project is a mini exercise of an pet store inventory.\
This project was bootstrapped with [Create React App]\
It utilizes a small portion of sample data from Pet Store API\

## Available Scripts

In the project directory, you shall run:

### `npm install`

This installs all the dependencies required for the frontend project to run.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see data error if you Docker isnt running yet.

Use the following command in another terminal to launch Docker with the required API.\
`Pre-requiiste` you will require Docker app installed on your device.\

### `docker run -p 8080:8080 swaggerapi/petstore3`

To run the E2E tests and Component test

### `npm run cypress:open`

This will provide you with a cypress window to run E2E tests and Component Test provided for the appliaction\

## Navigating through the app

You will be greeted with a `Login` form.\
The app uses `Google Firebase` for user auth\
Kindly use the following credentials to login\

[Email] : `user@user.com`
[Password] : `LoginUser`

Once logged-in you will see the Dashboard of inventory of `available` pets at the pet store.\
You can select the inventory type by selecting the options from the menu to view `available`, `sold` and `pending` pet in the inventory.\

You can click on `Edit` button to edit information such as `Name` and `Status` of the Pet.\
Clicking on `Save` updates the pet information.\
Clicking on `Cancel` cancels the update operation.\
CLicking on `Logout` button logs out the user and navigates the user to the main `Login` screen

## Enjoy
