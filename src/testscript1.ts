class Template {
    constructor(public greeting: string) { }
    public init() {
        return this.greeting;
    }
};

let greeterOne = new Template("Hello, world!!!!!");
console.log(greeterOne.init());