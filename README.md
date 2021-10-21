
# Equivalent Salary Converter Using PPP

A salary of INR 45k is roughly equal to $600 but if you move from India to USA, $600 cannot give you the same standard of living. You cannot purchase the same goods and services for $600 that you used to get for INR 45k in India.

PPP or purchasing power parity comees into the play to get a fair conversion rate. This project converts the amount using PPP concept and gives you a quick `Conversion Factor` between two selected countries. As of today, the conversion factor between India and USA is 3.4 which means for the same job, the salary in the US should be around 3.4x
## Demo

https://adityarajput.com/salary-converter
  
## Screenshots

![App Screenshot](https://adityarajput.com/salary-converter/screenshot.jpg)

  
## Environment Variables (Optional)

To increase rate-limits, get an API KEY from freecurrencyapi.net and add to your .env file as

`CURRENCY_KEY`

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/adixmr/salaryconverter.git
```

Go to the project directory & Install dependencies

```bash
  cd salaryconverter

  npm i
```

Create a .env file and add freecurrencyapi.net API Key (Optional)
```bash
  nano .env
  
  CURRENCY_KEY=<KEY_HERE>
```

Start the Development server

```bash
  npm run dev
```

Start the Frontend server

```bash
  cd client && npm start
```

  
## Acknowledgements
 
 - [Currency Codes](https://github.com/samayo/country-json)
 - [World Bank PPP Conversion Factor](https://data.worldbank.org/indicator/PA.NUS.PPP)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 
 

## Tech Stack

**Client:** React, Bootstrap

**Server:** Node, Express

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## 🔗 Links
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aditya-kumar-rajput/)

  
