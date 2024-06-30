const router = require("express").Router();
const { sendToken } = require('../utils/TokenTransaction.js');
const { celo_alfajores } = require('../utils/Chain.js');
const Joi = require("joi");
require('dotenv').config();

// Route to get a user's private key by their email
router.post("/", async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message });

        const toAddress = req.body.toAddress;
        const token = req.body.token;

        let stringToken = "12345678";
        if (token !== stringToken) {
            return res.status(404).send({ message: "Voucher is Invalid" });
        }

        const to = toAddress;
        console.log('Sending token to:', to);
        const amount = 1;
        console.log('Amount: ', amount);
        const privateKey = process.env.PRIVATE_KEY;
        console.log("privateKey", privateKey);
        const tokenAddress = process.env.CUSD; // cUSD
        console.log('Token Address:', tokenAddress);

        const { transaction, receipt } = await sendToken(amount, to, privateKey, tokenAddress)
            .catch(error => {
                console.error('Error sending token:', error);
                res.status(500).send({ message: "Error sending token" });
                return null;
            });

        if (transaction && receipt) {
            console.log('Transaction sent:', transaction);
            res.send({ transactionHash: `${celo_alfajores.blockExplorerUrl}/tx/${receipt.transactionHash}` });
        } else {
            return;
        }

    } catch (error) {
        console.error("Failed to send token", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

const validate = (data) => {
    const schema = Joi.object({
        toAddress: Joi.string().required().label("ToAddress"),
        token: Joi.string().required().label("Token"),
    });
    return schema.validate(data);
};

module.exports = router;
