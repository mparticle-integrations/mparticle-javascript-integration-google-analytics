window.Should = require('should');

var mp = function() {
    var self = this;

    this.addForwarder = function(forwarder) {
        self.forwarder = new forwarder.constructor();
    };
};

window.mParticle = new mp();

var googleanalytics = function() {
    var self = this;

    this.args = [];

    this.reset = function() {
        self.args = [];
    };

    this.ga = function() {
        self.args.push(arguments);
    };
};

window.googleanalytics = new googleanalytics();
window.ga = window.googleanalytics.ga;
window._gaq = [];

require('../../dist/GoogleAnalyticsEventForwarder.common');
require('../tests.js');
