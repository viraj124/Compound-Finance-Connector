import React, { Component } from 'react';
import logo from '../logo.png';
import Web3 from 'web3';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      account: ''
    }
  }

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    

    
    const compoundCeth =  {
      "constant": false,
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
      }

    var compoundCethArgs = []

    const comptrollerEnterMarket =   {
      "constant": false,
      "inputs": [
          {
              "internalType": "address[]",
              "name": "cTokens",
              "type": "address[]"
          }
      ],
      "name": "enterMarkets",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
          }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xc2998238"
  }

  const comptrollerArgs = [
    ["0xe7bc397dbd069fc7d0109c0636d06888bb50668c", "0xf92fbe0d3c0dcdae407923b2ac17ec223b1084e4"]
  ]

  const borrowCDai =     {
    "constant": false,
    "inputs": [
        {
            "internalType": "uint256",
            "name": "borrowAmount",
            "type": "uint256"
        }
    ],
    "name": "borrow",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }

var borrowCDaiArgs = [
  "100"
]

const assetComptroller = {
  "constant": true,
  "inputs": [
      {
          "internalType": "address",
          "name": "account",
          "type": "address"
      }
  ],
  "name": "getAssetsIn",
  "outputs": [
      {
          "internalType": "contract CToken[]",
          "name": "",
          "type": "address[]"
      }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function",
  "signature": "0xabfceffc"
}

var assetComptrollerArgs = [
  "0xc19c5f0ecf68be63937cd1e9a43b4b4b19629c0f"
]

const approveDaiKovan =  { 
"name": "approve",
"outputs": [{ "type": "bool", "name": "out" }],
"inputs": [{ "type": "address", "name": "_spender" }, { "type": "uint256", "name": "_value" }],
"constant": false,
"payable": false,
"type": "function"
}

var approveDai = [
  "0xe7bc397dbd069fc7d0109c0636d06888bb50668c",
  "100000000000000000000000000000000000000"
]


const repayBorrowAbi =  {
  "constant": false,
  "inputs": [
      {
          "internalType": "uint256",
          "name": "repayAmount",
          "type": "uint256"
      }
  ],
  "name": "repayBorrow",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}


const repayBorrowArgs = [
  "100"
]


const redeemKovvan =  {
  "constant": false,
  "inputs": [
      {
          "internalType": "uint256",
          "name": "redeemAmount",
          "type": "uint256"
      }
  ],
  "name": "redeemUnderlying",
  "outputs": [
      {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
      }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function",
  }

  var redeemArgs = [
    "10000000000000000"
  ]

    const redeemData = await web3.eth.abi.encodeFunctionCall(redeemKovvan, redeemArgs);
    console.log(redeemData)

    const repayBorrowData = await web3.eth.abi.encodeFunctionCall(repayBorrowAbi, repayBorrowArgs);
    console.log(repayBorrowData)

    const approveKovan =  await web3.eth.abi.encodeFunctionCall(approveDaiKovan, approveDai);
    console.log(approveKovan)

    const assetData = await web3.eth.abi.encodeFunctionCall(assetComptroller, assetComptrollerArgs);
    console.log(assetData)

    const borrowCDaiData = await web3.eth.abi.encodeFunctionCall(borrowCDai, borrowCDaiArgs);
    console.log(borrowCDaiData)

    const compoundCethData = await web3.eth.abi.encodeFunctionCall(compoundCeth, compoundCethArgs);
    console.log(compoundCethData)

    const comptrollerData = await web3.eth.abi.encodeFunctionCall(comptrollerEnterMarket, comptrollerArgs);
    console.log(comptrollerData)
 
  }

  render() {
    return (
      <div>
        Compound Connector
      </div>
    );
  }
}

export default App;
