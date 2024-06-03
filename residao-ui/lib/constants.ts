// lib/constants.ts

export const CONTRACT_ADDRESS = "0xfB9c21D630a796389bDA2eFE7e1cFfD9b10fE26e"; // Replace with your deployed contract address

export const CONTRACT_ABI = [
    {
        inputs: [{ internalType: "address", name: "cUSDAddress", type: "address" }],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
            { indexed: false, internalType: "string", name: "name", type: "string" },
            { indexed: false, internalType: "string", name: "description", type: "string" },
            { indexed: false, internalType: "string", name: "image", type: "string" },
            { indexed: false, internalType: "uint256", name: "price", type: "uint256" },
            { indexed: true, internalType: "address", name: "seller", type: "address" },
        ],
        name: "GoodListed",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "uint256", name: "id", type: "uint256" },
            { indexed: true, internalType: "address", name: "buyer", type: "address" },
        ],
        name: "GoodPurchased",
        type: "event",
    },
    {
        inputs: [],
        name: "cUSD",
        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        name: "getGood",
        outputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "string", name: "", type: "string" },
            { internalType: "string", name: "", type: "string" },
            { internalType: "string", name: "", type: "string" },
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "address", name: "", type: "address" },
            { internalType: "bool", name: "", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getGoods",
        outputs: [
            {
                components: [
                    { internalType: "uint256", name: "id", type: "uint256" },
                    { internalType: "string", name: "name", type: "string" },
                    { internalType: "string", name: "description", type: "string" },
                    { internalType: "string", name: "image", type: "string" },
                    { internalType: "uint256", name: "price", type: "uint256" },
                    { internalType: "address payable", name: "seller", type: "address" },
                    { internalType: "bool", name: "isSold", type: "bool" },
                ],
                internalType: "struct GoodsMarketplace.Good[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "goods",
        outputs: [
            { internalType: "uint256", name: "id", type: "uint256" },
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "string", name: "image", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
            { internalType: "address payable", name: "seller", type: "address" },
            { internalType: "bool", name: "isSold", type: "bool" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "string", name: "name", type: "string" },
            { internalType: "string", name: "description", type: "string" },
            { internalType: "string", name: "image", type: "string" },
            { internalType: "uint256", name: "price", type: "uint256" },
        ],
        name: "listGood",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "nextGoodId",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
        name: "purchaseGood",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const CUSD_ADDRESS = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1";
