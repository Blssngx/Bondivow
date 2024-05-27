curl -X POST http://localhost:8080/api/getVoucher/ -H "Content-Type: application/json" -d '{
    "toAddress": "0x80C8Ab0d65868CcB0AF23D99762196AFe2aa18A7",
    "token": "123456789"
}'

{"transactionHash":"https://explorer.celo.org/alfajores/tx/0x3526c78eb12a6e8b3b22203f982bf6f0045d0d51b1ba20d2adc87c38f7ee7ac0"}