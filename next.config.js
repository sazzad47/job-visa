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
        "STRIPE_PUBLISHABLE_KEY": "pk_test_51LrTfeJMUXLRq6IyglTDRwYn5u3775QpPpASw9EA5gXG3WV1ruqa9XTuhwCQzfJ3nEY5HVtDniOJqk2PPf0HvoEa00SjMu5j1a",
        "STRIPE_SECRET_KEY": "sk_test_51LrTfeJMUXLRq6IylpiimFXxuzAo7dn7ubQvTWvuTXY4Ukydi8oJEVjALdsytV3dF7afZ1tUREbcPaUQJBoSEwut00cFnGtmxC",
        "STRIPE_WEBHOOK_ENDPOINT_SECRET": "whsec_7c1e3d191e2169509229851d3e097ca74bf4246304e2d713b026e5c62ab5bffb"
    }
}
