/**
 * Created by Truong on 21-Feb-16.
 */
var obj = {
    name: 'John Doe',
    greet: function() {
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();
obj.greet.call({name: 'Truongbt'});
obj.greet.apply({name: 'Truongbt'});