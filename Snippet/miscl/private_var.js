function generateEmp(name, title) {
  const _eid = Math.floor(Math.random() * 999);
  function PrivateEmployee(name, title) {
    this.name = name;
    this.title = title;
    this.id = _eid;
  }
  PrivateEmployee.prototype.print = function() {
    console.log(`NAME: ${this.name}
      TITLE: ${this.title}
      ID: ${this.id}`);
  };
  return new PrivateEmployee(name, title);
}

const john = new generateEmp("john", "dev");
john.print();
