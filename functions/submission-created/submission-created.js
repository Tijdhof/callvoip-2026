const axios = require("axios");
const { htmlString } = require("./templates");

exports.handler = async (event, context, callback) => {
  console.log("📨 Form submission received");

  try {
    const payload = JSON.parse(event.body).payload;
    const data = payload.data;
    const brevoApiKey = process.env.BREVO_API_KEY;

    console.log("🟢🟢🟢🟢🟢 ", data);

    if (!data.email) {
      console.error("❌ Missing email field");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    let internalRecipient = "aanvragen@callvoip.nl";
    let senderEmail = "callvoip@callvoip.nl";

    if (data.formto === "dev") {
      internalRecipient = "info@spinme.nl";
      senderEmail = "info@spinme.nl";
    } else if (data.formto === "info") {
      internalRecipient = "info@callvoip.nl";
      senderEmail = "info@callvoip.nl";
    } else if (data.formto === "offerte") {
      internalRecipient = "offerte@callvoip.nl";
      senderEmail = "offerte@callvoip.nl";
    } else if (data.formto === "aanvragen") {
      internalRecipient = "aanvragen@callvoip.nl";
      senderEmail = "aanvragen@callvoip.nl";
    } else if (data.formto === "vacature") {
      internalRecipient = "robert@callvoiptelefonie.nl";
      senderEmail = "robert@callvoiptelefonie.nl";
    }

    const htmlContent = htmlString(data);
    const headers = {
      "api-key": brevoApiKey,
      "Content-Type": "application/json",
    };

    const clientEmail = {
      sender: { name: "Callvoip", email: senderEmail },
      to: [{ email: data.email }],
      subject: `Inzending formulier: ${data.form_name || data.referrer}`,
      htmlContent,
    };

    const internalEmail = {
      sender: {
        name: data.bedrijfsnaam || `${data.voornaam} ${data.achternaam}`,
        email: data.email,
      },
      to: [{ email: internalRecipient }],
      subject: `Nieuwe inzending formulier: ${data.form_name || data.referrer}`,
      htmlContent,
    };

    console.log("📤 Sending email to client:", data.email);
    await axios.post("https://api.brevo.com/v3/smtp/email", clientEmail, {
      headers,
    });

    console.log("📤 Sending email to internal recipient:", internalRecipient);
    await axios.post("https://api.brevo.com/v3/smtp/email", internalEmail, {
      headers,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ Both emails sent successfully" }),
    };
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message || err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
