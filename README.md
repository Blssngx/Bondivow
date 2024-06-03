# Residao

Residao is a decentralized platform designed to empower underserved communities by facilitating the trade of goods and services and providing access to community-backed microloans. By leveraging blockchain technology, Residao ensures secure, transparent, and efficient transactions within local communities, fostering economic growth and cooperation.

## Introduction

Residao aims to provide a decentralized marketplace where residents of rural areas, small villages, and informal sectors can trade goods and services and access financial support through a community-managed pool. Built on the Celo blockchain, Residao ensures transparency, security, and community-driven governance.

## Features

- **Decentralized Marketplace**: Peer-to-peer trading of goods and services.
- **Community-backed Microloans**: Access to small loans from a community pool.
- **User Verification with Soulbound NFTs**: Users earn non-transferable (soulbound) NFTs as they complete tasks and progress through different levels (Tourist, Resident, Citizen, Noble Citizen).
- **Transparent and Secure Transactions**: All transactions are managed via smart contracts on the Celo blockchain.
- **Community-driven Governance**: Users participate in decision-making processes through a decentralized governance model.

## Getting Started

To get started with Residao, follow the instructions below to set up your development environment.

[Build on MiniPay](https://docs.celo.org/developer/build-on-minipay/overview)

## Architecture

Residao is built on the Celo blockchain and leverages smart contracts to manage transactions, user verification, and governance. The key components include:

- **Smart Contracts**: Manage core functionalities such as user registration, marketplace transactions, loan management, and governance.
- **Frontend**: A user-friendly interface for interacting with the Residao platform.
- **Backend**: Handles off-chain processes and interactions with the blockchain.

## Smart Contracts

### Key Contracts

1. **User Registration and Verification Contract**
   - Manages user sign-ups and verification processes.
   - Issues Tourist-level soulbound NFTs upon successful registration.

2. **Marketplace Contract**
   - Facilitates the creation, management, and execution of transactions for goods and services.
  
  - GoodsMarketPlace Contract: 0xfB9c21D630a796389bDA2eFE7e1cFfD9b10fE26e

3. **Loan Management Contract**
   - Handles the issuance, management, and repayment of community-backed microloans.

4. **Soulbound NFT Issuance and Management Contract**
   - Manages the creation and distribution of non-transferable NFTs for user verification and rewards.
   - Ensures NFTs are soulbound, meaning they cannot be transferred or traded.

5. **Governance Contract**
   - Facilitates decentralized governance and decision-making processes.

### Deployment

Smart contracts are deployed on the Celo blockchain, ensuring transparency and security for all platform operations.

## Technologies

- **Blockchain**: Celo
- **Smart Contracts**: Solidity
- **Frontend**: Next.js, Jotai
- **Backend**: Node.js, Express
- **Database**: MongoDB (for off-chain data)
- **Development Tools**: Truffle, Ganache, Celo Composer