// An example of where the Prototype pattern is useful is the initialization of 
// business objects with values that match the default values in the database. 
// The prototype object holds the default values that are copied over into a newly 
// created business object.

// Classical languages rarely use the Prototype pattern, but JavaScript being 
// a prototypal language uses this pattern in the construction of new objects 
// and their prototypes.


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