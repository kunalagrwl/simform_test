// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable.sol";

contract SimFormToken is Initializable, ERC165Upgradeable, ERC20Upgradeable, OwnableUpgradeable {    
    uint256 public MAX_SUPPLY;

    function initialize() initializer public {
        MAX_SUPPLY = 1000000 * 10 ** decimals();
        __ERC20_init("SimFormToken", "SFT");
        __Ownable_init();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Insufficient tokens!");
        _mint(to, amount);
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC20Upgradeable).interfaceId ||
            interfaceId == type(IERC20MetadataUpgradeable).interfaceId ||
            super.supportsInterface(interfaceId);
    }
    
}