# EmailJS Template Quick Setup

## URGENT: Update Your EmailJS Template

To fix the email reply issue, you need to update your EmailJS template with this exact configuration:

### 1. Subject Line (Replace existing subject):
```
{{email_subject}}
```

### 2. Email Body (Replace existing body):
```
{{reply_info}}

{{sender_details}}

MESSAGE:
{{message}}

---
This message was sent from your portfolio contact form.
You can reply directly to this email to respond to {{from_name}}.
```

## What This Will Do:

### Before (Current Issue):
- Subject: "New Contact Form Message: Project Inquiry"
- From: EmailJS service email
- Body: Generic message without clear sender info

### After (Fixed):
- Subject: "Portfolio Contact: Project Inquiry - from john@example.com"
- Body starts with: "REPLY TO: john@example.com"
- Clear sender details at the top

## Steps to Update:

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Click "Email Templates"
3. Click on your existing template (template_eypccku)
4. Replace the subject with: `{{email_subject}}`
5. Replace the body with the template above
6. Click "Save"
7. Test the contact form

## Result:
You'll now receive emails with the user's email address prominently displayed in both the subject line and at the top of the message, making it easy to reply directly from your email client.
