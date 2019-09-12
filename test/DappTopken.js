/**
 * Testing Mocha Testing framework 
 * and chai library
 */
const DappToken = artifacts.require("DappToken");

contract("DappToken" , function(account){
    it("Total suplly is valid", function() {
        return DappToken.deployed().then(function(instance) {
            return instance.totalSupply();
        }).then(function(count) {
            assert.equal(count, 1000000);
        });
    });
});
 /*contract("Election", function(accounts) {
    var electionInstance;

    it("initializes with two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidatesCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });
});
*/