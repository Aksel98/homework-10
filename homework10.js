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

    get author() {
        return this._author
    }

    set author(val) {
        if (val instanceof Author) {
            this._author = val
        }
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
    constructor(program, year, fee, data) {
        super(Person);
        this.program = program ? program : [];
        this.year = year;
        this.fee = fee;
        this.data = data ? data : {};
    }

    get program() {
        return this._program
    }

    set program(args) {
        if (Array.isArray(args)) {
            args.forEach(el => {
                if (typeof el !== "string") {
                    console.log('program must have only string values')
                }
            })
        } else {
            console.log('program type must be array')
        }
        this._program = args
    }

    get data() {
        return this._data
    }

    set data(v) {
        if (typeof v === "object") {
            this._data = v
            this.program.forEach(el => this._data[el] = 0)
        } else {
            throw 'The type of data must be object'
        }
    }

    passExam(program, grade) {
        let gradeSum = 0
        if (this.program.includes(program)) {
            this.data[program] = grade
        }
       gradeSum = Object.values(this.data).reduce((cur, el) => {
            return el + cur
        }, 0)
        if (gradeSum >= 50) {
            this.year++
        }
    }
}

let pupil = new Student(['math', 'phisics', 'motherTongue'], 2, 600000)
pupil.passExam('math', 20)
pupil.passExam('phisics', 20)
pupil.passExam('motherTongue', 20)
console.log(pupil)

class Teacher extends Person {
    constructor(program, pay) {
        super(Person);
        this.program = program;
        this.pay = pay;
    }

    get program() {
        return this._program
    }

    set program(letter) {
        if (typeof letter !== "string") {
            console.log('program type must be string')
        }
        this._program = letter
    }
}
