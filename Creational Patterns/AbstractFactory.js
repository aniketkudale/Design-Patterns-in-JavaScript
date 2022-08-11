// Suppose we have two Abstract Factories whose task it is to create page controls, 
// such as, buttons, textboxes, radio buttons, and listboxes.One is the Light Factory 
// which creates controls that are white and the other the Dark Factory which creates 
// controls that are black.Both Factories creates the same types of controls, but they 
// differ in color, which is their common theme.
// This is an implementation of the Abstract Factory pattern.


function Employee(name) {
    this.name = name;
    this.say = function () {
        console.log('My name is: Employee', this.name);
    }
}

function EmployeeFactory() {
    this.create = function (name) {
        return new Employee(name);
    }
}

function Vendor(name) {
    this.name = name;
    this.say = function () {
        console.log('My name is: Vendor', this.name);
    }
}

function VendorFactory() {
    this.create = function (name) {
        return new Vendor(name);
    }
}

function run() {
    var persons = [];
    var employeeFactory = new EmployeeFactory();
    var vendorFactory = new VendorFactory();

    persons.push(employeeFactory.create("Joan DiSilva"));
    persons.push(employeeFactory.create("Tim O'Neill"));
    persons.push(vendorFactory.create("Gerald Watson"));
    persons.push(vendorFactory.create("Nicole McNight"));

    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }
}