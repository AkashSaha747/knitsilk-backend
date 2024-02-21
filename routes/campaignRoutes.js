const express = require("express");
const { SendMailClient } = require("zeptomail");

const router = express.Router();


// Zeptomail configuration
const url = "api.zeptomail.com/";
const token = "Zoho-enczapikey wSsVR61z8xOhW60vzmWtdO4wz11TAQ7xE0113Qb1viKqH//L9scylBDGVgemHKdKQjRpRjQao7ksnUgJ1WEH3IkpmFtSCCiF9mqRe1U4J3x17qnvhDzJVmhcmxuNLIMOwARok2VlE8Ai+g==";
const client = new SendMailClient({ url, token });

// Route to send email
router.get("/campaign", async (req, res) => {
    try {
        const receivers = [
            {
                "email_address": {
                    "address": "riteshshuklagem@gmail.com",
                    "name": "Receiver 1"
                }
            },
            {
                "email_address": {
                    "address": "ritesh.digiblocks@gmail.com",
                    "name": "Receiver 2"
                }
            }
            // Add more receivers as needed
        ];

        const response = await client.sendMail({
            "from": {
                "address": "noreply@globaltexmart.com",
                "name": "noreply"
            },
            "to": receivers,
            "subject": "Test Email",
            "htmlbody": "<div><b> Test Bulk email sent successfully.</b></div>",
        });

        console.log("Email sent successfully:", response);
        res.send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
});

module.exports = router;
