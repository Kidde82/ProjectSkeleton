class TemplateTest {
    constructor(public greeting: string) { }
    public init() {
        return this.greeting;
    }
};

let greeterTwo = new TemplateTest("Hello, world!!!!!");
console.log(greeterTwo.init());