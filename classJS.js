
class Person {
	constructor(name, age = 29){
		this.name = name;
		this.age = age;
	}

	sayHello(){
		console.log("hello, I am " + this.name);
	}
}

const man = new Person("Denis", 33);
const woman = new Person("Valya")

console.log(man);
console.log(woman);

console.log(woman.sayHello());
