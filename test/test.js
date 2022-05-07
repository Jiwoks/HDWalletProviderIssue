const Test = artifacts.require("./Test.sol");
const {expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');

contract("Stacking Test Suite", accounts => {
    const owner = accounts[0];
    const user1 = accounts[1];

    async function buildNewInstance () {
        return await Test.new({from: owner});
    }

    describe('Owner: Test to attach tokens', function () {

        before(async () => {
            instance = await buildNewInstance();
        });

        it.only('should reject for not owner caller', async function () {
            console.log('owner', await instance.owner())
            console.log('user1', user1)

            const p = instance.test({from: user1});
            p.then(()=>console.log('resolve')).catch((e)=>console.log('catch'))


            await expectRevert(p, 'Ownable: caller is not the owner');
        });

    });

});
