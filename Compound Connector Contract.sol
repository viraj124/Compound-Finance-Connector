/**
 *Submitted for verification at Etherscan.io on 2020-01-04
*/

pragma solidity ^0.5.7;


interface CTokenInterface {
        function mint() external payable;
        
           /**
     * @notice Send Ether to CEther to mint
     */
        function () external payable;
        
        function borrow(uint borrowAmount) external returns (uint);
}


interface ComptrollerInterface {
    /**
     * @notice Marker function used for light validation when updating the comptroller of a market
     * @dev Implementations should simply return true.
     * @return true
     */
    function isComptroller() external view returns (bool);

    /*** Assets You Are In ***/

    function enterMarkets(address[] calldata cTokens) external returns (uint[] memory);
    function exitMarket(address cToken) external returns (uint);

    /*** Policy Hooks ***/

    function mintAllowed(address cToken, address minter, uint mintAmount) external returns (uint);
    function mintVerify(address cToken, address minter, uint mintAmount, uint mintTokens) external;

    function redeemAllowed(address cToken, address redeemer, uint redeemTokens) external returns (uint);
    function redeemVerify(address cToken, address redeemer, uint redeemAmount, uint redeemTokens) external;

    function borrowAllowed(address cToken, address borrower, uint borrowAmount) external returns (uint);
    function borrowVerify(address cToken, address borrower, uint borrowAmount) external;

    function repayBorrowAllowed(
        address cToken,
        address payer,
        address borrower,
        uint repayAmount) external returns (uint);
    function repayBorrowVerify(
        address cToken,
        address payer,
        address borrower,
        uint repayAmount,
        uint borrowerIndex) external;

    function liquidateBorrowAllowed(
        address cTokenBorrowed,
        address cTokenCollateral,
        address liquidator,
        address borrower,
        uint repayAmount) external returns (uint);
    function liquidateBorrowVerify(
        address cTokenBorrowed,
        address cTokenCollateral,
        address liquidator,
        address borrower,
        uint repayAmount,
        uint seizeTokens) external;

    function seizeAllowed(
        address cTokenCollateral,
        address cTokenBorrowed,
        address liquidator,
        address borrower,
        uint seizeTokens) external returns (uint);
    function seizeVerify(
        address cTokenCollateral,
        address cTokenBorrowed,
        address liquidator,
        address borrower,
        uint seizeTokens) external;

    function transferAllowed(address cToken, address src, address dst, uint transferTokens) external returns (uint);
    function transferVerify(address cToken, address src, address dst, uint transferTokens) external;

    /*** Liquidity/Liquidation Calculations ***/

    function liquidateCalculateSeizeTokens(
        address cTokenBorrowed,
        address cTokenCollateral,
        uint repayAmount) external view returns (uint, uint);
}
contract Connector {
    function mint() external payable {
        CTokenInterface(0xf92FbE0D3C0dcDAE407923b2Ac17eC223b1084E4).mint.value(msg.value)();
    }
    
        function borrow(uint borrowAmount) external returns (uint) {
            uint amt = CTokenInterface(0xe7bc397DBd069fC7d0109C0636d06888bb50668c).borrow(borrowAmount);
            return amt;
        }
        
    function enterMarkets(address[] calldata cTokens) external returns (uint[] memory) {
        uint[] memory amt = ComptrollerInterface(0x1f5D7F3CaAC149fE41b8bd62A3673FE6eC0AB73b).enterMarkets(cTokens);
        return amt;
    }
}