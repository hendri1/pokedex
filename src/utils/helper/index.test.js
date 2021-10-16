const index = require("./index")
// @ponicode
describe("index.handleAsync", () => {
    test("0", async () => {
        await index.handleAsync("return callback value")
    })

    test("1", async () => {
        await index.handleAsync(undefined)
    })
})

// @ponicode
describe("index.convertDate", () => {
    test("0", () => {
        let callFunction = () => {
            index.convertDate("01-01-2030")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.convertDate("01-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.convertDate("32-01-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.convertDate(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.convertDate("01-13-2020")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.convertDate(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.randomHexaColor", () => {
    test("0", () => {
        let callFunction = () => {
            index.randomHexaColor()
        }
    
        expect(callFunction).not.toThrow()
    })
})
