# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form functionality in your portfolio.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **IMPORTANT**: Use this exact template structure for proper email formatting:

### Subject Line:
```
{{email_subject}}
```

### Email Body:
```
{{reply_info}}

{{sender_details}}

MESSAGE:
{{message}}

---
This message was sent from your portfolio contact form.
You can reply directly to this email to respond to {{from_name}}.
```

### Template Variable Explanation:
- `{{email_subject}}` - Creates subject like "Portfolio Contact: [Subject] - from user@email.com"
- `{{reply_info}}` - Shows "REPLY TO: user@email.com" prominently at the top
- `{{sender_details}}` - Displays formatted sender information
- `{{message}}` - The user's actual message
- `{{from_name}}` - User's name for reference

4. Save the template and note down your **Template ID**

### Why This Template Structure?
This template ensures that:
- The user's email address appears in the subject line for easy identification
- "REPLY TO:" information is prominently displayed at the top of the email
- You can easily reply to contact form submissions directly from your email client
- All sender information is clearly organized and visible

## Step 4: Get Public Key

1. Go to "Account" > "General"
2. Find your **Public Key** (User ID)

## Step 5: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your actual values:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## Step 6: Update Existing Template (If Already Set Up)

If you already have an EmailJS template set up, you need to update it:

1. Go to your EmailJS dashboard > "Email Templates"
2. Click on your existing template to edit it
3. Replace the subject line with: `{{email_subject}}`
4. Replace the email body with the template structure shown in Step 3
5. Save the changes

## Step 7: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form with a test email
4. Check your email (benjamindlabs@gmail.com) for the message
5. Verify that:
   - The subject line shows: "Portfolio Contact: [Subject] - from [user-email]"
   - The email body starts with "REPLY TO: [user-email]"
   - You can easily identify who sent the message

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.example` file shows the required format without real credentials
- EmailJS public keys are safe to use in client-side applications
- Consider setting up rate limiting in EmailJS dashboard to prevent spam

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Not receiving emails**: Verify your email service setup in EmailJS
- **Template errors**: Ensure template variable names match the code exactly
- **CORS errors**: Make sure your domain is added to EmailJS allowed origins
- **Can't see sender's email**:
  - Verify your template uses `{{email_subject}}` in the subject line
  - Ensure `{{reply_info}}` is at the top of the email body
  - Check that template variables match exactly (case-sensitive)
- **Subject line not showing user email**:
  - Make sure the subject field in EmailJS template is: `{{email_subject}}`
  - Not: `{{subject}}` (this is the old format)
- **Reply-to information not visible**:
  - Verify the email body starts with `{{reply_info}}`
  - Check that the template was saved after making changes

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):
1. Add the environment variables to your hosting platform
2. Add your production domain to EmailJS allowed origins
3. Test the contact form on the live site
