class TemplateTest {
    constructor(public greeting: string) { }
    init() {
        return this.greeting;
    }
};

var greeter = new TemplateTest("Hello, world!!!!!");
console.log(greeter.init());