
class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }
    get peek() {
        return this.items[this.top]
    }
    push(value) {
        this.top += 1
        this.items[this.top] = value
    }
    pop() {
        this.top -= 1
        this.items[this.top] = null
    }
}

describe("My Stack", () => {

    let stack
    beforeEach(() => {
        stack = new Stack()
    })

    it("is created empty", () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })

    it("can push to the top", () => {
        stack.push("avocado")
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe("avocado")
    })

    it("can pop off", () => {
        stack.pop()
        expect(stack.top).toBe(-2)
        expect(stack.peek).toBe(null)
    })

})