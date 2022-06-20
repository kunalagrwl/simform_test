// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/proxy/Clones.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SimFormTokenFactory is Ownable {

    address public masterContract;
    address[] public deployedContracts;

    constructor(address _addr) {
        masterContract = _addr;
    }    

    function createNewContract() public onlyOwner {
        deployedContracts.push(Clones.clone(masterContract));
    }

    function getAllDeployedContracts() public view returns(address[] memory) {
        return deployedContracts;
    }

}