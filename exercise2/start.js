const countriesDataJSON = require('./countries.json')
const {summarizeCountries} = require('./summarize-countries')

const start = () => {
    const countriesSummary = summarizeCountries(countriesDataJSON)
    console.log(countriesSummary)
}

start()