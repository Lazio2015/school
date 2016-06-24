/**
 * Created by lenur on 6/22/16.
 */

'use strict';

const expect        = require('chai').expect
    , obfuscator    = require('./obfuscator')
    ;

describe('test', function() {
    it ('should be right', function() {
        var min = obfuscator([]);

        expect(typeof min).to.equal('object');
        expect(min).to.deep.equal({name: 'lenur', age:'25'});
    });
});