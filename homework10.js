// 1
class Author {
    constructor(name, email, gender) {
        this.name = name
        this.email = email
        this.gender = gender
    }

    get email() {
        return this._email
    }

    set email(val) {
        if (!val.includes('.')) {
            console.log('The email must contain dot')
        }
        this._email = val
    }

    toString() {
        console.log(`${this.name} email is ${this.email}`)
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title
        this.author = author
        this.price = price
        this.quantity = quantity
    }

    get title() {
        return this._title
    }

    set title(val) {
        if (val[0] !== val[0].toUpperCase()) {
            console.log('The name must start with uppercase')
        }
        this._title = val
    }

    getProfit() {
        console.log(this.price * this.quantity)
    }

    toString() {
        console.log(`The boo'k price is ${this.price}`)
    }
}

let man = new Author('John', 'john.gmail.com', 'man')
let artist = new Book('Artist@', 'Shirvanzade', '5000', 3)

// 2
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }

    get name() {
        return this._name
    }

    get balance() {
        return this._balance
    }

    set name(val) {
        this._name = val
    }

    set balance(val) {
        this._balance = val
    }

    credit(amount) {
        this.balance += amount
    }

    debit(amount) {
        amount <= this.balance ? this.balance -= amount : console.log('Amount exceeded' + 'balance.')
    }

    transferTo(anotherAccount, amount) {
        if (amount <= this.balance) {
            anotherAccount += amount
            this.balance -= amount
            return anotherAccount
        } else {
            console.log('Amount exceeded' + 'balance.')
        }
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst === accountSecond
    }
}

// 3
class Person {
    constructor(firstName, lastName, gender, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
    }

    get firstName() {
        return this._firstName
    }

    set firstName(val) {
        this._firstName = val
    }

    toString() {
        console.log(`Person name is ${this.firstName}`)
    }
}

class Student extends Person {
    constructor(program, year, fee) {
        super(Person);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }

    get program() {
        return this._program
    }

    set program(args) {
        if (!Array.isArray(args)) {
            console.log('program must be array')
        }
        this._program = args
    }

    passExam(program, grade) {
        return grade >= 50
    }
}

class Teacher extends Person {
    constructor(program, pay) {
        super(Person);
        this.program = program;
        this.pay = pay;
    }

    get program() {
        return this._program
    }

    set program(args) {
        if (!Array.isArray(args)) {
            console.log('program must be array')
        }
        this._program = args
    }
}

let lecturer = new Teacher(['asd', 'zxc'], 1000)

console.log(lecturer.program)
