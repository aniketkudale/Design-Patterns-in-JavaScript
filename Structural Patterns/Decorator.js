var User = function(name) {
    this.name = name;
    this.say = function() {
        console.log('User: ' + this.name);
    }
}

var DecoratedUser = function(user, street, city) {
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function() {
        console.log('Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city);
    }
}

function run() {
    var user = new User('Aniket');
    user.say();

    var decoratedUser = new DecoratedUser(user, 'New Jersey', 'New York');
    decoratedUser.say();
}