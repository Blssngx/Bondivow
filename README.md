# Bondivow

Bondivow is a blockchain-based commitment app that allows users to set goals and make pledges, leveraging the Celo Network for secure and transparent smart contracts. The app uses Solidity for smart contracts, Next.js for the frontend, and Node.js for the backend server.

## Table of Contents

- [Bondivow](#bondivow)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps](#steps)
  - [Usage](#usage)
  - [Smart Contracts](#smart-contracts)
    - [Compile Contracts](#compile-contracts)

## Project Overview

Bondivow helps users achieve their goals by creating commitment contracts. Users can set goals, put something at stake (e.g., money), and designate a referee to monitor their progress. The app leverages the Celo blockchain to ensure transparency and security in the commitment process.

## Features

- User authentication and profile management
- Goal setting and tracking
- Pledge management
- Smart contracts for commitment and reward distribution
- Notifications and reminders

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js, Express.js
- **Blockchain**: Celo Network, Solidity for smart contracts
- **Database**: MongoDB
- **External Services**: Payment gateway, notification systems

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Celo Wallet and Celo CLI installed

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/blssngx/bondivow.git
    cd bondivow
    ```

2. **Install dependencies:**
    ```bash
    npm install
    cd frontend
    npm install
    cd ../backend
    npm install
    ```

3. **Setup environment variables:**
    - Create a `.env` file in the root, `frontend`, and `backend` directories and add the necessary environment variables. Refer to `.env.example` for the required variables.

4. **Compile the smart contracts:**
    ```bash
    cd smart-contracts
    npx hardhat compile
    ```

5. **Deploy the smart contracts to the Celo testnet:**
    ```bash
    npx hardhat run scripts/deploy.js --network alfajores
    ```

6. **Run the backend server:**
    ```bash
    cd backend
    npm start
    ```

7. **Run the frontend:**
    ```bash
    cd frontend
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register and log in to your account.
3. Set your goals and make pledges.
4. Monitor your progress and receive notifications.

## Smart Contracts

The smart contracts are written in Solidity and deployed on the Celo network.

### Compile Contracts

```bash
cd smart-contracts
npx hardhat compile
