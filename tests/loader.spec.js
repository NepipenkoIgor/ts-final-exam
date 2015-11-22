/**
 * Created by igor on 21/11/15.
 */
var assert = require('assert');
var Loader=require('../public/scripts/loader').PainterLoader;
var loader=new Loader('/painters');
describe('first test', function () {
    it('first it ', function () {
        assert.equal(loader.url, '/painters')
    })
})