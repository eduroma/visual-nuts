const {summarizeCountries} = require('./summarize-countries')

const countriesDataMock = {
    countries: [
        {
            "country": "AA",
            "languages": [
                "aa"
            ]
        },
        {
            "country": "BB",
            "languages": [
                "aa",
                "bb"
            ]
        },
        {
            "country": "CC",
            "languages": [
                "cc",
                "de"
            ]
        },
        {
            "country": "DD",
            "languages": [
                "dd",
                "de"
            ]
        },
    ]
}

describe('Unit Tests', () => {
    describe('Summarize Countries', () => {

        let result = {}

        beforeAll(()=>{
            result = summarizeCountries(countriesDataMock)
        })
        
        it('returns an object with the correct format', () => {
            expect(result).toHaveProperty('totalCountries')
            expect(typeof result.totalCountries).toBe('number')
            
            expect(result).toHaveProperty('totalLanguages')
            expect(typeof result.totalLanguages).toBe('number')
            
            expect(result).toHaveProperty('countriesWithMoreLanguages')
            expect(Array.isArray(result.countriesWithMoreLanguages)).toBe(true)

            expect(result).toHaveProperty('countriesWithMoreLanguagesThatSpeakGerman')
            expect(Array.isArray(result.countriesWithMoreLanguagesThatSpeakGerman)).toBe(true)
            
            expect(result).toHaveProperty('mostCommonLanguages')
            expect(Array.isArray(result.mostCommonLanguages)).toBe(true)
        })

        it('returns the total number of countries', () => {
            expect(result.totalCountries).toBe(4)
        })

        it('returns the total number of languages', () => {
            expect(result.totalLanguages).toBe(5)
        })

        it('returns the list of countries with more languages', () => {
            expect(result.countriesWithMoreLanguages).toEqual(['BB','CC','DD'])
        })

        it('returns the list of countries with more languages tha includes German', () => {
            expect(result.countriesWithMoreLanguagesThatSpeakGerman).toEqual(['CC','DD'])
        })

        it('returns the list of the most common languages', () => {
            expect(result.mostCommonLanguages).toEqual(['aa','de'])
        })

    })
})        
