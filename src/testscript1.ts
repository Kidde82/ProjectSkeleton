class Template {
    constructor(public greeting: string) { }
    init() {
        return this.greeting;
    }
};

var greeter = new Template("Hello, world!!!!!");
console.log(greeter.init());