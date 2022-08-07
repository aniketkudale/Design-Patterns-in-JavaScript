function Customer(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;

    this.say = function() {
        console.log(`{this.first}-{this.last} has {this.status}`);
    }
}

function CustomerPrototype(proto) {
    this.proto = proto;
    this.clone = function() {
        let customerObj = new Customer();

        customerObj.first = proto.first;
        customerObj.last = proto.last;
        customerObj.say = proto.say;

        return customerObj;
    }
}

function run() {
    var proto = new Customer('Aniket', 'Kudale', 'Purchasing');
    var prototype = new CustomerPrototype(proto);

    var customer = prototype.clone();
    customer.say();
}