# EmailJS Setup Guide

This guide will help you set up EmailJS to enable real email functionality for your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{subject}}` - Email subject
   - `{{message}}` - Email message
4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `frontend/src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id_here',
  templateId: 'your_actual_template_id_here',
  publicKey: 'your_actual_public_key_here',
};
```

## Step 6: Test the Form

1. Start your development server
2. Go to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email inbox for the message

## Important Notes

- **Free Plan Limits**: EmailJS free plan allows 200 emails per month
- **Security**: Your public key is safe to expose in frontend code
- **Template Variables**: Make sure your EmailJS template uses the exact variable names: `user_name`, `user_email`, `subject`, `message`

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Wrong email format**: Verify your EmailJS template variables match the form field names
- **Service not working**: Ensure your email service is properly configured and verified

## Example EmailJS Template

```
Subject: New Contact Form Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

## Support

If you encounter issues:
1. Check EmailJS documentation: [docs.emailjs.com](https://docs.emailjs.com/)
2. Verify your credentials in the config file
3. Check browser console for error messages
