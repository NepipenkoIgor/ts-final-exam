/**
 * Created by igor on 30/11/15.
 */
/// <reference path="../types/node.d.ts"/>
/// <reference path="../types/mocha.d.ts" />
import assert = require('assert');
import Loader=require('../public/scripts/loader');
var loader = new Loader.PainterLoader('/painters');
describe('first test', ()=> {
    it('first it ', function () {
        assert.equal(loader.url, '/painters')
    })
});