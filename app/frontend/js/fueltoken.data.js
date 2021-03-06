window.fuelTokenData = {
  "contractName": "FuelToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x313ce567"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x39509351"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa457c2d7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xdd62ed3e"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa9059cbb"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50604080518082018252600981527f4675656c546f6b656e000000000000000000000000000000000000000000000060208083019182528351808501909452600484527f4655454c0000000000000000000000000000000000000000000000000000000090840152815191929160129161008d91600391906101ab565b5081516100a19060049060208501906101ab565b506005805460ff191660ff92909216919091179055506100d590503368056bc75e2d631000006401000000006100da810204565b610246565b600160a060020a03821615156100ef57600080fd5b600254610109908264010000000061077361019282021704565b600255600160a060020a03821660009081526020819052604090205461013c908264010000000061077361019282021704565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000828201838110156101a457600080fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101ec57805160ff1916838001178555610219565b82800160010185558215610219579182015b828111156102195782518255916020019190600101906101fe565b50610225929150610229565b5090565b61024391905b80821115610225576000815560010161022f565b90565b610871806102556000396000f3fe608060405234801561001057600080fd5b50600436106100c6576000357c010000000000000000000000000000000000000000000000000000000090048063395093511161008e57806339509351146101f657806370a082311461022257806395d89b4114610248578063a457c2d714610250578063a9059cbb1461027c578063dd62ed3e146102a8576100c6565b806306fdde03146100cb578063095ea7b31461014857806318160ddd1461018857806323b872dd146101a2578063313ce567146101d8575b600080fd5b6100d36102d6565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010d5781810151838201526020016100f5565b50505050905090810190601f16801561013a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101746004803603604081101561015e57600080fd5b50600160a060020a03813516906020013561036c565b604080519115158252519081900360200190f35b6101906103ea565b60408051918252519081900360200190f35b610174600480360360608110156101b857600080fd5b50600160a060020a038135811691602081013590911690604001356103f0565b6101e06104b9565b6040805160ff9092168252519081900360200190f35b6101746004803603604081101561020c57600080fd5b50600160a060020a0381351690602001356104c2565b6101906004803603602081101561023857600080fd5b5035600160a060020a0316610572565b6100d361058d565b6101746004803603604081101561026657600080fd5b50600160a060020a0381351690602001356105ee565b6101746004803603604081101561029257600080fd5b50600160a060020a038135169060200135610639565b610190600480360360408110156102be57600080fd5b50600160a060020a0381358116916020013516610666565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b5050505050905090565b6000600160a060020a038316151561038357600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a0383166000908152600160209081526040808320338452909152812054610424908363ffffffff61069116565b600160a060020a03851660009081526001602090815260408083203384529091529020556104538484846106a6565b600160a060020a0384166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b60055460ff1690565b6000600160a060020a03831615156104d957600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461050d908363ffffffff61077316565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b6000600160a060020a038316151561060557600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461050d908363ffffffff61069116565b6000811515610655576106553368056bc75e2d63100000610785565b61065f838361082f565b9392505050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156106a057600080fd5b50900390565b600160a060020a03821615156106bb57600080fd5b600160a060020a0383166000908152602081905260409020546106e4908263ffffffff61069116565b600160a060020a038085166000908152602081905260408082209390935590841681522054610719908263ffffffff61077316565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282018381101561065f57600080fd5b600160a060020a038216151561079a57600080fd5b6002546107ad908263ffffffff61077316565b600255600160a060020a0382166000908152602081905260409020546107d9908263ffffffff61077316565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600061083c3384846106a6565b5060019291505056fea165627a7a7230582090b0efd2d1b1d6e276e70836f73b0b8f9571adb00b4fc290349fdf50d888e1ac0029",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100c6576000357c010000000000000000000000000000000000000000000000000000000090048063395093511161008e57806339509351146101f657806370a082311461022257806395d89b4114610248578063a457c2d714610250578063a9059cbb1461027c578063dd62ed3e146102a8576100c6565b806306fdde03146100cb578063095ea7b31461014857806318160ddd1461018857806323b872dd146101a2578063313ce567146101d8575b600080fd5b6100d36102d6565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561010d5781810151838201526020016100f5565b50505050905090810190601f16801561013a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101746004803603604081101561015e57600080fd5b50600160a060020a03813516906020013561036c565b604080519115158252519081900360200190f35b6101906103ea565b60408051918252519081900360200190f35b610174600480360360608110156101b857600080fd5b50600160a060020a038135811691602081013590911690604001356103f0565b6101e06104b9565b6040805160ff9092168252519081900360200190f35b6101746004803603604081101561020c57600080fd5b50600160a060020a0381351690602001356104c2565b6101906004803603602081101561023857600080fd5b5035600160a060020a0316610572565b6100d361058d565b6101746004803603604081101561026657600080fd5b50600160a060020a0381351690602001356105ee565b6101746004803603604081101561029257600080fd5b50600160a060020a038135169060200135610639565b610190600480360360408110156102be57600080fd5b50600160a060020a0381358116916020013516610666565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b5050505050905090565b6000600160a060020a038316151561038357600080fd5b336000818152600160209081526040808320600160a060020a03881680855290835292819020869055805186815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a350600192915050565b60025490565b600160a060020a0383166000908152600160209081526040808320338452909152812054610424908363ffffffff61069116565b600160a060020a03851660009081526001602090815260408083203384529091529020556104538484846106a6565b600160a060020a0384166000818152600160209081526040808320338085529083529281902054815190815290519293927f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929181900390910190a35060019392505050565b60055460ff1690565b6000600160a060020a03831615156104d957600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461050d908363ffffffff61077316565b336000818152600160209081526040808320600160a060020a0389168085529083529281902085905580519485525191937f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925929081900390910190a350600192915050565b600160a060020a031660009081526020819052604090205490565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103625780601f1061033757610100808354040283529160200191610362565b6000600160a060020a038316151561060557600080fd5b336000908152600160209081526040808320600160a060020a038716845290915290205461050d908363ffffffff61069116565b6000811515610655576106553368056bc75e2d63100000610785565b61065f838361082f565b9392505050565b600160a060020a03918216600090815260016020908152604080832093909416825291909152205490565b6000828211156106a057600080fd5b50900390565b600160a060020a03821615156106bb57600080fd5b600160a060020a0383166000908152602081905260409020546106e4908263ffffffff61069116565b600160a060020a038085166000908152602081905260408082209390935590841681522054610719908263ffffffff61077316565b600160a060020a038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008282018381101561065f57600080fd5b600160a060020a038216151561079a57600080fd5b6002546107ad908263ffffffff61077316565b600255600160a060020a0382166000908152602081905260409020546107d9908263ffffffff61077316565b600160a060020a0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600061083c3384846106a6565b5060019291505056fea165627a7a7230582090b0efd2d1b1d6e276e70836f73b0b8f9571adb00b4fc290349fdf50d888e1ac0029",
  "sourceMap": "170:357:0:-;;;218:102;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;405:163:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;493:12;;405:163;;;267:2:0;;493:12:9;;:5;;405:163;493:12;:::i;:::-;-1:-1:-1;515:16:9;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;541:9:9;:20;;-1:-1:-1;;541:20:9;;;;;;;;;;;;-1:-1:-1;285:29:0;;-1:-1:-1;291:10:0;303;285:5;;;;:29;:::i;:::-;170:357;;6198:263:8;-1:-1:-1;;;;;6272:21:8;;;;6264:30;;;;;;6320:12;;:23;;6337:5;6320:16;;;;;;:23;:::i;:::-;6305:12;:38;-1:-1:-1;;;;;6374:18:8;;:9;:18;;;;;;;;;;;:29;;6397:5;6374:22;;;;;;:29;:::i;:::-;-1:-1:-1;;;;;6353:18:8;;:9;:18;;;;;;;;;;;:50;;;;6418:36;;;;;;;6353:18;;:9;;6418:36;;;;;;;;;;6198:263;;:::o;1431:145:6:-;1489:7;1520:5;;;1543:6;;;;1535:15;;;;;;1568:1;1431:145;-1:-1:-1;;;1431:145:6:o;170:357:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;170:357:0;;;-1:-1:-1;170:357:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "170:357:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;170:357:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;628:81:9;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;628:81:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2735:238:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;2735:238:8;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;936:89;;;:::i;:::-;;;;;;;;;;;;;;;;3436:294;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;3436:294:8;;;;;;;;;;;;;;;;;:::i;930:81:9:-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4233:317:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;4233:317:8;;;;;;;;:::i;1234:104::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1234:104:8;-1:-1:-1;;;;;1234:104:8;;:::i;771:85:9:-;;;:::i;5058:327:8:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;5058:327:8;;;;;;;;:::i;361:161:0:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;361:161:0;;;;;;;;:::i;1669:129:8:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;1669:129:8;;;;;;;;;;:::i;628:81:9:-;697:5;690:12;;;;;;;;-1:-1:-1;;690:12:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;665:13;;690:12;;697:5;;690:12;;697:5;690:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;628:81;:::o;2735:238:8:-;2800:4;-1:-1:-1;;;;;2824:21:8;;;;2816:30;;;;;;2866:10;2857:20;;;;:8;:20;;;;;;;;-1:-1:-1;;;;;2857:29:8;;;;;;;;;;;;:37;;;2909:36;;;;;;;2857:29;;2866:10;2909:36;;;;;;;;;;;-1:-1:-1;2962:4:8;2735:238;;;;:::o;936:89::-;1006:12;;936:89;:::o;3436:294::-;-1:-1:-1;;;;;3560:14:8;;3515:4;3560:14;;;:8;:14;;;;;;;;3575:10;3560:26;;;;;;;;:37;;3591:5;3560:37;:30;:37;:::i;:::-;-1:-1:-1;;;;;3531:14:8;;;;;;:8;:14;;;;;;;;3546:10;3531:26;;;;;;;:66;3607:26;3540:4;3623:2;3627:5;3607:9;:26::i;:::-;-1:-1:-1;;;;;3648:54:8;;3675:14;;;;:8;:14;;;;;;;;3663:10;3675:26;;;;;;;;;;;3648:54;;;;;;;3663:10;;3648:54;;;;;;;;;;;;-1:-1:-1;3719:4:8;3436:294;;;;;:::o;930:81:9:-;995:9;;;;930:81;:::o;4233:317:8:-;4313:4;-1:-1:-1;;;;;4337:21:8;;;;4329:30;;;;;;4411:10;4402:20;;;;:8;:20;;;;;;;;-1:-1:-1;;;;;4402:29:8;;;;;;;;;;:45;;4436:10;4402:45;:33;:45;:::i;:::-;4379:10;4370:20;;;;:8;:20;;;;;;;;-1:-1:-1;;;;;4370:29:8;;;;;;;;;;;;:77;;;4462:60;;;;;;4370:29;;4462:60;;;;;;;;;;;-1:-1:-1;4539:4:8;4233:317;;;;:::o;1234:104::-;-1:-1:-1;;;;;1315:16:8;1289:7;1315:16;;;;;;;;;;;;1234:104::o;771:85:9:-;842:7;835:14;;;;;;;;-1:-1:-1;;835:14:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;810:13;;835:14;;842:7;;835:14;;842:7;835:14;;;;;;;;;;;;;;;;;;;;;;;;5058:327:8;5143:4;-1:-1:-1;;;;;5167:21:8;;;;5159:30;;;;;;5241:10;5232:20;;;;:8;:20;;;;;;;;-1:-1:-1;;;;;5232:29:8;;;;;;;;;;:50;;5266:15;5232:50;:33;:50;:::i;361:161:0:-;422:4;438:10;;435:42;;;450:27;456:10;468:8;450:5;:27::i;:::-;491:25;506:2;510:5;491:14;:25::i;:::-;484:32;361:161;-1:-1:-1;;;361:161:0:o;1669:129:8:-;-1:-1:-1;;;;;1767:15:8;;;1741:7;1767:15;;;:8;:15;;;;;;;;:24;;;;;;;;;;;;;1669:129::o;1205:145:6:-;1263:7;1290:6;;;;1282:15;;;;;;-1:-1:-1;1319:5:6;;;1205:145::o;5599:256:8:-;-1:-1:-1;;;;;5686:16:8;;;;5678:25;;;;;;-1:-1:-1;;;;;5732:15:8;;:9;:15;;;;;;;;;;;:26;;5752:5;5732:26;:19;:26;:::i;:::-;-1:-1:-1;;;;;5714:15:8;;;:9;:15;;;;;;;;;;;:44;;;;5784:13;;;;;;;:24;;5802:5;5784:24;:17;:24;:::i;:::-;-1:-1:-1;;;;;5768:13:8;;;:9;:13;;;;;;;;;;;;:40;;;;5823:25;;;;;;;5768:13;;5823:25;;;;;;;;;;;;;5599:256;;;:::o;1431:145:6:-;1489:7;1520:5;;;1543:6;;;;1535:15;;;;;6198:263:8;-1:-1:-1;;;;;6272:21:8;;;;6264:30;;;;;;6320:12;;:23;;6337:5;6320:23;:16;:23;:::i;:::-;6305:12;:38;-1:-1:-1;;;;;6374:18:8;;:9;:18;;;;;;;;;;;:29;;6397:5;6374:29;:22;:29;:::i;:::-;-1:-1:-1;;;;;6353:18:8;;:9;:18;;;;;;;;;;;:50;;;;6418:36;;;;;;;6353:18;;:9;;6418:36;;;;;;;;;;6198:263;;:::o;1962:137::-;2023:4;2039:32;2049:10;2061:2;2065:5;2039:9;:32::i;:::-;-1:-1:-1;2088:4:8;1962:137;;;;:::o",
  "source": "pragma solidity >=0.5.2;\r\n\r\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\r\nimport \"openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\";\r\n\r\n\r\ncontract FuelToken is ERC20, ERC20Detailed {\r\n  constructor() ERC20Detailed(\"FuelToken\", \"FUEL\", 18) public {\r\n    _mint(msg.sender, 100 * 1e18);\r\n  }\r\n\r\n  /** emulate mint for testing */\r\n  function transfer(address to, uint256 value) public returns (bool) {\r\n    if(value == 0) _mint(msg.sender, 100*1e18);\r\n    return ERC20.transfer(to, value);\r\n  }\r\n\r\n}",
  "sourcePath": "C:/Users/snjax/Documents/projects/mixed/ethparis/pyrotoken/smart_contracts/contracts/FuelToken.sol",
  "ast": {
    "absolutePath": "/C/Users/snjax/Documents/projects/mixed/ethparis/pyrotoken/smart_contracts/contracts/FuelToken.sol",
    "exportedSymbols": {
      "FuelToken": [
        53
      ]
    },
    "id": 54,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 54,
        "sourceUnit": 1610,
        "src": "28:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 54,
        "sourceUnit": 1668,
        "src": "93:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1609,
              "src": "192:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$1609",
                "typeString": "contract ERC20"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "192:5:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1667,
              "src": "199:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$1667",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "199:13:0"
          }
        ],
        "contractDependencies": [
          1609,
          1667,
          1764
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 53,
        "linearizedBaseContracts": [
          53,
          1667,
          1609,
          1764
        ],
        "name": "FuelToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 23,
              "nodeType": "Block",
              "src": "278:42:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1779,
                          "src": "291:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "291:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        },
                        "id": 20,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "hexValue": "313030",
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "303:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          },
                          "value": "100"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31653138",
                          "id": 19,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "309:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "303:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        }
                      ],
                      "id": 15,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1524,
                      "src": "285:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 21,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "285:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22,
                  "nodeType": "ExpressionStatement",
                  "src": "285:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 24,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4675656c546f6b656e",
                    "id": 10,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "246:11:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2a562cad96d304db6af7fbfafdfcb1343d82b989d99bd4a81ad81b1aa940a5d4",
                      "typeString": "literal_string \"FuelToken\""
                    },
                    "value": "FuelToken"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4655454c",
                    "id": 11,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "259:6:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ed6a4fea4f3962648b23085c147beff1f0c8c3da6e44dc5f4ed9bbbdc60c97f0",
                      "typeString": "literal_string \"FUEL\""
                    },
                    "value": "FUEL"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "3138",
                    "id": 12,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "267:2:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  }
                ],
                "id": 13,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1667,
                  "src": "232:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$1667_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "232:38:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "229:2:0"
            },
            "returnParameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "278:0:0"
            },
            "scope": 53,
            "src": "218:102:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "428:94:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 35,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 33,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "438:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "447:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "438:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 44,
                  "nodeType": "IfStatement",
                  "src": "435:42:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 37,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1779,
                            "src": "456:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 38,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "456:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_rational_100000000000000000000_by_1",
                            "typeString": "int_const 100000000000000000000"
                          },
                          "id": 41,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "313030",
                            "id": 39,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "468:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31653138",
                            "id": 40,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "472:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          "src": "468:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000000000000000_by_1",
                            "typeString": "int_const 100000000000000000000"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_100000000000000000000_by_1",
                            "typeString": "int_const 100000000000000000000"
                          }
                        ],
                        "id": 36,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1524,
                        "src": "450:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 42,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "450:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 43,
                    "nodeType": "ExpressionStatement",
                    "src": "450:27:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 47,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "506:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 48,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "510:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1609,
                        "src": "491:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$1609_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1253,
                      "src": "491:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "491:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 32,
                  "id": 50,
                  "nodeType": "Return",
                  "src": "484:32:0"
                }
              ]
            },
            "documentation": "emulate mint for testing ",
            "id": 52,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "379:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "379:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "391:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "378:27:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "422:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "421:6:0"
            },
            "scope": 53,
            "src": "361:161:0",
            "stateMutability": "nonpayable",
            "superFunction": 1253,
            "visibility": "public"
          }
        ],
        "scope": 54,
        "src": "170:357:0"
      }
    ],
    "src": "0:527:0"
  },
  "legacyAST": {
    "absolutePath": "/C/Users/snjax/Documents/projects/mixed/ethparis/pyrotoken/smart_contracts/contracts/FuelToken.sol",
    "exportedSymbols": {
      "FuelToken": [
        53
      ]
    },
    "id": 54,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 54,
        "sourceUnit": 1610,
        "src": "28:63:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 54,
        "sourceUnit": 1668,
        "src": "93:71:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1609,
              "src": "192:5:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$1609",
                "typeString": "contract ERC20"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "192:5:0"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 6,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1667,
              "src": "199:13:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$1667",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 7,
            "nodeType": "InheritanceSpecifier",
            "src": "199:13:0"
          }
        ],
        "contractDependencies": [
          1609,
          1667,
          1764
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 53,
        "linearizedBaseContracts": [
          53,
          1667,
          1609,
          1764
        ],
        "name": "FuelToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 23,
              "nodeType": "Block",
              "src": "278:42:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 16,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1779,
                          "src": "291:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 17,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "291:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        },
                        "id": 20,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "hexValue": "313030",
                          "id": 18,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "303:3:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100_by_1",
                            "typeString": "int_const 100"
                          },
                          "value": "100"
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "*",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31653138",
                          "id": 19,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "309:4:0",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "303:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_rational_100000000000000000000_by_1",
                          "typeString": "int_const 100000000000000000000"
                        }
                      ],
                      "id": 15,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1524,
                      "src": "285:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 21,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "285:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22,
                  "nodeType": "ExpressionStatement",
                  "src": "285:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 24,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4675656c546f6b656e",
                    "id": 10,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "246:11:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2a562cad96d304db6af7fbfafdfcb1343d82b989d99bd4a81ad81b1aa940a5d4",
                      "typeString": "literal_string \"FuelToken\""
                    },
                    "value": "FuelToken"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4655454c",
                    "id": 11,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "259:6:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ed6a4fea4f3962648b23085c147beff1f0c8c3da6e44dc5f4ed9bbbdc60c97f0",
                      "typeString": "literal_string \"FUEL\""
                    },
                    "value": "FUEL"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "3138",
                    "id": 12,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "267:2:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_18_by_1",
                      "typeString": "int_const 18"
                    },
                    "value": "18"
                  }
                ],
                "id": 13,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 9,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1667,
                  "src": "232:13:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$1667_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "232:38:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "229:2:0"
            },
            "returnParameters": {
              "id": 14,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "278:0:0"
            },
            "scope": 53,
            "src": "218:102:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 51,
              "nodeType": "Block",
              "src": "428:94:0",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 35,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 33,
                      "name": "value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 28,
                      "src": "438:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 34,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "447:1:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "438:10:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 44,
                  "nodeType": "IfStatement",
                  "src": "435:42:0",
                  "trueBody": {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 37,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1779,
                            "src": "456:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 38,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "456:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_rational_100000000000000000000_by_1",
                            "typeString": "int_const 100000000000000000000"
                          },
                          "id": 41,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "313030",
                            "id": 39,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "468:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_100_by_1",
                              "typeString": "int_const 100"
                            },
                            "value": "100"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "31653138",
                            "id": 40,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "472:4:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          "src": "468:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_100000000000000000000_by_1",
                            "typeString": "int_const 100000000000000000000"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_100000000000000000000_by_1",
                            "typeString": "int_const 100000000000000000000"
                          }
                        ],
                        "id": 36,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1524,
                        "src": "450:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 42,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "450:27:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 43,
                    "nodeType": "ExpressionStatement",
                    "src": "450:27:0"
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 47,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "506:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 48,
                        "name": "value",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 28,
                        "src": "510:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "ERC20",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1609,
                        "src": "491:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_ERC20_$1609_$",
                          "typeString": "type(contract ERC20)"
                        }
                      },
                      "id": 46,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1253,
                      "src": "491:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,uint256) returns (bool)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "491:25:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 32,
                  "id": 50,
                  "nodeType": "Return",
                  "src": "484:32:0"
                }
              ]
            },
            "documentation": "emulate mint for testing ",
            "id": 52,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "379:10:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 25,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "379:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 28,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "391:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 27,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "391:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "378:27:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 31,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 52,
                  "src": "422:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "422:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "421:6:0"
            },
            "scope": 53,
            "src": "361:161:0",
            "stateMutability": "nonpayable",
            "superFunction": 1253,
            "visibility": "public"
          }
        ],
        "scope": 54,
        "src": "170:357:0"
      }
    ],
    "src": "0:527:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.2+commit.1df8f40c.Emscripten.clang"
  },
  "networks": {
    "4": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        }
      },
      "links": {},
      "address": "0xfcb83a35971680335626287a87B2d10B4234B6Ed",
      "transactionHash": "0x64ad4f5887a3faf6d61a846e6e3b8368fd239a448c9210d00d2314c376faa544"
    },
    "1552086447832": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        }
      },
      "links": {},
      "address": "0xEe3fdbA9629087116195f8c1C0060597E827F01C",
      "transactionHash": "0xa132a2cc4c4cd38cba6bc1f19c235decee2a985b83f13f16fb8f846420048fa6"
    },
    "1552133966061": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        }
      },
      "links": {},
      "address": "0x32BD477bdea5AB4bDE49599c896256D65a49a1eb",
      "transactionHash": "0xed31bec915210718d73f51a5891a6aab84190aecb973fbdf725d27b89b926a8c"
    },
    "1552138341556": {
      "events": {
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event",
          "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event",
          "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
        }
      },
      "links": {},
      "address": "0x48cF197C3b603A9dd488ebEBAD63a539a329f34e",
      "transactionHash": "0xd164ee62031f0fe91a0254193dc6521facea860418b8d422d839c915a67421f3"
    }
  },
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-09T18:07:25.502Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "Function to check the amount of tokens that an owner allowed to a spender.",
        "params": {
          "owner": "address The address which owns the funds.",
          "spender": "address The address which will spend the funds."
        },
        "return": "A uint256 specifying the amount of tokens still available for the spender."
      },
      "approve(address,uint256)": {
        "details": "Approve the passed address to spend the specified amount of tokens on behalf of msg.sender. Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729",
        "params": {
          "spender": "The address which will spend the funds.",
          "value": "The amount of tokens to be spent."
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address.",
        "params": {
          "owner": "The address to query the balance of."
        },
        "return": "An uint256 representing the amount owned by the passed address."
      },
      "decimals()": {
        "return": "the number of decimals of the token."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Decrease the amount of tokens that an owner allowed to a spender. approve should be called when allowed_[_spender] == 0. To decrement allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol Emits an Approval event.",
        "params": {
          "spender": "The address which will spend the funds.",
          "subtractedValue": "The amount of tokens to decrease the allowance by."
        }
      },
      "increaseAllowance(address,uint256)": {
        "details": "Increase the amount of tokens that an owner allowed to a spender. approve should be called when allowed_[_spender] == 0. To increment allowed value is better to use this function to avoid 2 calls (and wait until the first transaction is mined) From MonolithDAO Token.sol Emits an Approval event.",
        "params": {
          "addedValue": "The amount of tokens to increase the allowance by.",
          "spender": "The address which will spend the funds."
        }
      },
      "name()": {
        "return": "the name of the token."
      },
      "symbol()": {
        "return": "the symbol of the token."
      },
      "totalSupply()": {
        "details": "Total number of tokens in existence"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfer tokens from one address to another. Note that while this function emits an Approval event, this is not required as per the specification, and other compliant implementations may not emit the event.",
        "params": {
          "from": "address The address which you want to send tokens from",
          "to": "address The address which you want to transfer to",
          "value": "uint256 the amount of tokens to be transferred"
        }
      }
    }
  },
  "userdoc": {
    "methods": {
      "transfer(address,uint256)": {
        "notice": "emulate mint for testing "
      }
    }
  }
}
