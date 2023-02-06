const summarizeCountries = (countriesData) => {

    const totalSummary = Object.values(countriesData.countries).reduce((summary,country)=>{

        const {country: name, languages} = country

        summary.countriesTotalLanguages[name] = languages.length
        
        if(country.languages.includes('de')){
            summary.countriesTotalLanguagesWithGerman[name] = languages.length
        }

        languages.forEach(language=>{
            summary.languagesTotalCountries[language] = summary.languagesTotalCountries[language] 
                ? summary.languagesTotalCountries[language] +1 
                : 1
        })

        return summary
    },
    {
        countriesTotalLanguages: {},
        countriesTotalLanguagesWithGerman: {},
        languagesTotalCountries: {}
    })

    const {
        countriesTotalLanguages,
        countriesTotalLanguagesWithGerman,
        languagesTotalCountries
    } = totalSummary


    const totalCountries = Object.keys(countriesTotalLanguages).length
    const totalLanguages = Object.keys(languagesTotalCountries).length

    const countriesWithMoreLanguages = Object.keys(countriesTotalLanguages)
        .filter(country => {
            return countriesTotalLanguages[country] === Math.max.apply(null,Object.values(countriesTotalLanguages))
        })

    const countriesWithMoreLanguagesThatSpeakGerman = Object.keys(countriesTotalLanguagesWithGerman)
        .filter(country => {
            return countriesTotalLanguagesWithGerman[country] === Math.max.apply(null,Object.values(countriesTotalLanguagesWithGerman))
        })

    const mostCommonLanguages = Object.keys(languagesTotalCountries)
    .filter(language => {
        return languagesTotalCountries[language] === Math.max.apply(null,Object.values(languagesTotalCountries))
    })


    return {
        totalCountries,
        totalLanguages,
        countriesWithMoreLanguages,
        countriesWithMoreLanguagesThatSpeakGerman,
        mostCommonLanguages
    }
}

module.exports = {
    summarizeCountries
}