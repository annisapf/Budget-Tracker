# Budget-Tracker

*Budget-Tracker* allows user to be able to view create and track daily deposits and expenses with or without in internet connection. When entering transaction offline, it should populate the total when brought back online. This Budget Tracker has used Service Worker, Web Manifest and Compression.
    
## Table of Contents 

* [Screen Shots](#screenshots)

* [Demo](#demo)
    
* [Installation](#installation)

* [Business Context](#businesscontext)

* [Acceptance Criteria](#acceptancecriteria)

* [Structure](#structure)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Questions](#questions)

## Screenshots
![Screen Shot 2020-12-24 at 5 07 35 pm](https://user-images.githubusercontent.com/7066137/103065402-a4986480-460a-11eb-8bb2-b35062b9848d.png)

## Demo

![gif](https://user-images.githubusercontent.com/7066137/103065267-4b303580-460a-11eb-92ab-b101e7c09771.gif)


   
## Installation
    
This project uses 3 npm packages: 
* [express](https://expressjs.com/en/starter/installing.html)
* [mongoose](https://www.npmjs.com/package/mongoose)
* [morgan](https://www.npmjs.com/package/morgan)
* [compression] (https://www.npmjs.com/package/compression)

To install necessary dependencies, run the following command:
    
```
npm install express --save
```

```
npm install mongoose
```

```
npm install compression
```
    
## Business Context

Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important. Having offline functionality is paramount to our applications success.

## Acceptance Criteria

GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.


## Usage
    
To run tests, run the following command:
    
```
npm start
```
  

## License
The license is MIT standard license.
        
## Contributing
    
It is an open project and everyone can contribute - please send an email requesting to be added as a contributor

## Link to the App
<a href="https://blooming-badlands-66943.herokuapp.com/">The URLs of the deployed applications in Heroku</a><hr>

     
## Questions
    
If you have any questions about the repo, open an issue or contact [annisapf](https://github.com/annisapf/) directly at a.purbandari@gmail.com.


