class Account {
  constructor({ login, email }) {
    this.login = login;
    this.email = email;
  }

  getInfo() {
    for (const key in this) {
        console.log(`${key}: ${this[key]}`)
    }
  }
}

console.log(Account.prototype.getInfo);

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); 

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); 
