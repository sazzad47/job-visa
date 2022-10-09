module.exports = {
    env: {
        "BASE_URL": process.env.NODE_ENV==='production'? "https://job-visa.herokuapp.com": "http://localhost:3000",
        "MONGODB_URL": "mongodb+srv://sazzad:hadith@cluster0.kxnduio.mongodb.net/?retryWrites=true&w=majority",
        "ACCESS_TOKEN_SECRET": "YOUR_ACCESS_TOKEN_SECRET",
        "REFRESH_TOKEN_SECRET": "YOUR_REFRESH_TOKEN_SECRET",
        "PAYPAL_CLIENT_ID": "YOUR_PAYPAL_CLIENT_ID",
        "CLOUD_UPDATE_PRESET": "sazzad-upload-preset",
        "CLOUD_NAME": "sazzadhossen",
        "CLOUD_API": "https://api.cloudinary.com/v1_1/sazzadhossen/image/upload",
        "GOOGLE_CLIENT_ID": "549887149127-2n4fmn3gath3nq4fuc5jhf3hmi4l04o2.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": "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",
        "SENDER_EMAIL": "sazzad47.ju",
        "SENDER_EMAIL_PASSWORD": "vhhetgqwbssyyoyo",
        "EMAIL_SERVICE":"smtp.gmail.com",
        "EMAIL_PORT": 587,
    }
}
