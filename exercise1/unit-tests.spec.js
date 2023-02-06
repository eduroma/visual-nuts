const { printVisualNutsNumbers,getVisualNutsOutput } = require("./print-commands")

let outputHandlerMock
let consoleLogMock

describe('Unit Tests', () => {
    describe('Get Visual Nuts Output', () => {
        it('returns "Visual Nuts" when number is divisible by 3 and 5', () => {
            const number = 15
            const expectedValue = 'Visual Nuts'

            const result = getVisualNutsOutput(number)

            expect(result).toEqual(expectedValue)
        })
        
        it('returns "Visual" when number is divisible by 3', () => {
            const number = 3
            const expectedValue = 'Visual'

            const result = getVisualNutsOutput(number)

            expect(result).toEqual(expectedValue)
        })

        it('returns "Nuts" when number is divisible by 5', () => {
            const number = 5
            const expectedValue = 'Nuts'

            const result = getVisualNutsOutput(number)

            expect(result).toEqual(expectedValue)
        })

        it('returns he provided number when number is not divisible by 3 or 5', () => {
            const number = 1

            const result = getVisualNutsOutput(number)

            expect(result).toEqual(number)
        })
    })

    describe('Print Visual Nuts Numbers', () => {
        beforeEach(() => {
            outputHandlerMock = jest.fn()
            consoleLogMock= jest.spyOn(console, "log").mockImplementation(() => {});
        })

        afterEach(() => {
            jest.clearAllMocks()
        })

        it('calls the output handler from 1 to 100, when first parameters are not provided', () => {
            printVisualNutsNumbers({},outputHandlerMock)
            expect(outputHandlerMock).toBeCalledTimes(100)
            expect(consoleLogMock).toBeCalledTimes(100)
        })

        it('calls the output handler from the provided start key value to 100, when only the start key is provided in the first function parameter',()=>{
            printVisualNutsNumbers({start: 90},outputHandlerMock)
            expect(outputHandlerMock).toBeCalledTimes(11)
            expect(consoleLogMock).toBeCalledTimes(11)
        })

        it('calls the output handler from 1 to the provided end key value, when only the end key is provided in the first function parameter',()=>{
            printVisualNutsNumbers({end: 10},outputHandlerMock)
            expect(outputHandlerMock).toBeCalledTimes(10)
            expect(consoleLogMock).toBeCalledTimes(10)
        })

        it('calls the output handler from the provided start key value to the provided end key value, when the first function parameter is provided',()=>{
            printVisualNutsNumbers({start: 5, end: 10},outputHandlerMock)
            expect(outputHandlerMock).toBeCalledTimes(6)
            expect(consoleLogMock).toBeCalledTimes(6)
        })

        it('doesn`t call output handler when provided start key value is bigger than the end key value in the fisrt function parameter', () => {
            printVisualNutsNumbers({start: 20, end: 1},outputHandlerMock)
            expect(outputHandlerMock).toBeCalledTimes(0)
            expect(consoleLogMock).toBeCalledTimes(0)
        })

    })
})