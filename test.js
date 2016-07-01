/**
 * Created by lenur on 6/22/16.
 */

'use strict';

const expect        = require('chai').expect
    , obfuscator    = require('./obfuscator')
    , data    = require('./data')
    ;

describe('obfuscator', function() {
    it ('should be type object', function() {
        var min = obfuscator([]);

        expect(typeof min).to.equal('object');
    });

    it('should return empty object', function () {
        var min = obfuscator([]);
        expect(min).to.deep.equal({});
    });

    var min = obfuscator(['ivan', 'ivan', 'vasya', 'petya']);

    it('should have two keys in object', function () {
        expect(Object.keys(min).length).to.equal(3);
    });

    it('should ', function () {
        expect(min['ivan']).to.equal('a');
        expect(min['vasya']).to.equal('b');
        expect(min['petya']).to.equal('c');
    });

    it('should ', function () {
        var min = obfuscator(data);

        expect(min['wwwwww']).to.equal('a');
        expect(min['qqqqqq']).to.equal('b');
    });
});
