const { printVisualNutsNumbers } = require("./print-commands")

let consoleLogMock

describe('Functional Test', () => {

    describe('Print Visual Nuts Numbers', () => {
        beforeEach(() => {
            consoleLogMock= jest.spyOn(console, "log").mockImplementation(() => {});
        })

        afterEach(() => {
            jest.clearAllMocks()
        })

        it('loops from 1 to 100, and print the right value', () => {
            printVisualNutsNumbers()
            expect(consoleLogMock).toBeCalledTimes(100)
            expect(consoleLogMock).toHaveBeenNthCalledWith(1, 1);
            expect(consoleLogMock).toHaveBeenNthCalledWith(3, 'Visual');
            expect(consoleLogMock).toHaveBeenNthCalledWith(5, 'Nuts')
            expect(consoleLogMock).toHaveBeenNthCalledWith(15, 'Visual Nuts');
        })
    })
})