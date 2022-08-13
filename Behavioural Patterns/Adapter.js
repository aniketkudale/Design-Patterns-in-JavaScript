function Shipping() {
    this.request = function(zipStart, zipEnd, weight) {
        return "$49.75";
    }
}

function AdvancedShipping() {
    this.login = function(credentials) {}
    this.setStart = function(start) {}
    this.setDestination = function(destination) {}
    this.calculate = function(weight) { return '$34.43'}
}

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();
    shipping.login(credentials);

    return {
        request: function(zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

function run() {
    var shipping = new shipping();
    var credentials = { token: 'asdadadasdads' };
    var adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

    var cost = shipping.request("78701", "10010", "2 lbs");
    console.log("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    console.log("New cost: " + cost);
}