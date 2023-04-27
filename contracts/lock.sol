// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Contract for locking ERC20 tokens until a specified end date
contract LiquidityLock is ReentrancyGuard {
    
    // Struct to store information about a locked token pool
    struct LockInfo {
        uint256 startedDate;        // date when tokens were locked
        uint256 endDate;            // date when tokens can be withdrawn
        uint256 amount;             // amount of tokens locked
        address managerAddress;     // address of the manager who locked the tokens
    } 
    uint256 public poolCount = 0;   // number of locked token pools
    mapping(address => LockInfo) public pools;    // mapping of token addresses to LockInfo structs
    
    // Modifier to ensure that only the manager who locked the tokens can call a function
    modifier onlyManager(address _tokenAddress) {
        require(msg.sender == pools[_tokenAddress].managerAddress, "Only the manager can call this function");
        _;
    }


    // Lock ERC20 tokens until the specified end date
    function lockTokens(
        uint256 _endDate,           // end date for the lock
        uint256 _amount,            // amount of tokens to lock
        address _tokenAddress       // address of the token to lock
    ) external nonReentrant {
        require(block.timestamp < _endDate, "End date must be in the future");
        require(_amount > 0, "Amount must be greater than zero");
        require(_tokenAddress != address(0), "Invalid token address");
        
        // Transfer the tokens from the caller to this contract
        require(IERC20(_tokenAddress).transferFrom(msg.sender, address(this), _amount), "Token transfer failed");
        
        // Ensure that there is no existing lock for this token address
        require(pools[_tokenAddress].amount == 0, "Tokens for this address are already locked");
        
        // Store information about the new locked token pool
        pools[_tokenAddress] = LockInfo(block.timestamp, _endDate, _amount, msg.sender);
        poolCount++;
    }

    // Get information about a locked token pool
    function getPoolData(address _tokenAddress)
        external
        view
        returns (
            uint256 startedDate,
            uint256 endDate,
            uint256 amount,
            address managerAddress
        )
    {
        startedDate = pools[_tokenAddress].startedDate;
        endDate = pools[_tokenAddress].endDate;
        amount = pools[_tokenAddress].amount;
        managerAddress = pools[_tokenAddress].managerAddress;
    }

    // Withdraw locked tokens after the end date has passed
    function getTokens(address _tokenAddress) external onlyManager(_tokenAddress) nonReentrant {
        require(block.timestamp >= pools[_tokenAddress].endDate, "Tokens cannot be withdrawn yet");
        
        // Transfer the locked tokens to the manager's address
        require(IERC20(_tokenAddress).transfer(msg.sender, pools[_tokenAddress].amount), "Token transfer failed");
        
        // Remove the lock information for this token address
        delete pools[_tokenAddress];
        poolCount--;
    }
}
