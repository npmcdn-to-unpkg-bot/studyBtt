/**
 * Created by MSI on 19-Feb-16.
 */
function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emitter.prototype.emitTest = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
};

module.exports = Emitter;