## Project Name: Ecomexperts

## Overview
This is a responsive web application designed to make shoppers able to choose their security system.

## Installation
1. Clone the repository: https://github.com/dinahagar/Ecom
2. Navigate into the project directory: cd ecom
3. Install dependencies: npm install

## Running the Project
npm start

## Usage
After setting up and running the project locally, follow these steps to use the application:

1. Open you browser
    * Navigate to http://localhost:3000.
2. Home Page
    * The first page you will see is the Home page.
    * In first section you will see section of 4 steps to choose:
        * First step is cameras: you can select any number of cameras and their quantity and color. With "Next: Choose your plan" button to move to step 2.
        * Second step is Plan: with different design, you can choose from two options [limited, unlimited] plans with different prices. With "Next: Choose your sensor" button to move to step 3.
        * Third step is sensors: with the same design as cameras, you can select any number and quantites of sensors. With "Next: Choose your protection" button to move to step 4.
        * Forth step is protection: also with the same design of cameras and sensors, you can select any number and quantites of accessories. As it is the last step there is no Next button.
    * In second section you will see the review part with:
        * simple header to declare this part.
        * the items you choosed from first section (two sections are dynamically connected) with images, title, quantity(with the ability to increase or decrease) and the prices.
        * then the shipping fees part.
        * last part is the checkout including:
            * the total price of old and new prices (dynamically).
            * the saving amount (dynamically).
            * "checkout" button clicking on it open a popup to say that you're checked out and also to clear the saved data the user saved before.
            * "save my system for later" button to save the shoppers' configuration to so their system should be restored exactly as they left it. 

## API Documentation
Using Fack local data file in "src/Api" folder.