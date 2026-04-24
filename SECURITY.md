# Security Policy

## Environment Variables

This project uses environment variables to store sensitive information. **Never commit `.env.local` to git.**

### Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Apps Script URL (REQUIRED)
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_google_apps_script_url_here

# Cloudflare Turnstile (if using captcha)
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_turnstile_site_key_here
```

### Setup Instructions

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your actual values in `.env.local`

3. **NEVER** commit `.env.local` to git (already in `.gitignore`)

## Sensitive Files

The following files contain sensitive information and are excluded from git:

### Already Gitignored
- ✅ `.env.local` - Environment variables
- ✅ `PendaftaranSemantik.gs` - Google Apps Script backend code
- ✅ `PendaftaranSemantik_NO_TURNSTILE.gs` - Alternative backend code
- ✅ All `*.gs` files - Google Apps Script files

### Security Best Practices

1. **Environment Variables**
   - Use `NEXT_PUBLIC_` prefix for client-side variables
   - Never hardcode sensitive URLs or keys in source code
   - Keep `.env.local` secure and never share it

2. **Google Apps Script**
   - Keep your Apps Script URL private
   - Implement rate limiting on the server side
   - Validate all inputs on the server
   - Use proper authentication if needed

3. **API Security**
   - Always validate and sanitize user inputs
   - Implement CORS properly
   - Use HTTPS for all API calls
   - Implement rate limiting

4. **File Uploads**
   - Validate file types and sizes
   - Scan for malware if possible
   - Store files securely
   - Implement access controls

## Reporting Security Issues

If you discover a security vulnerability, please email the maintainers directly. Do not create a public issue.

## Security Checklist for Deployment

Before deploying to production:

- [ ] All sensitive data moved to environment variables
- [ ] `.env.local` is not committed to git
- [ ] Google Apps Script URL is not exposed in client code
- [ ] Rate limiting is implemented
- [ ] Input validation is in place
- [ ] HTTPS is enforced
- [ ] CORS is properly configured
- [ ] File upload security is implemented

## What's Safe to Commit

✅ **Safe to commit:**
- `.env.example` - Template without actual values
- Source code with `process.env.NEXT_PUBLIC_*` references
- Public configuration files
- Documentation

❌ **Never commit:**
- `.env.local` - Contains actual secrets
- `*.gs` files - Backend logic
- API keys or tokens
- Database credentials
- Private URLs

## Environment Variable Usage

### In Code

```typescript
// ✅ Good - Using environment variable
const scriptURL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

// ❌ Bad - Hardcoded sensitive URL
const scriptURL = 'https://script.google.com/macros/s/...';
```

### In Production

Make sure to set environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment
- Other platforms: Check their documentation

## Additional Security Measures

### Google Apps Script

1. **Deploy as Web App**
   - Set "Execute as: Me"
   - Set "Who has access: Anyone" (but implement your own validation)

2. **Implement Server-Side Validation**
   ```javascript
   // In your Apps Script
   function doPost(e) {
     // Validate origin
     // Check rate limits
     // Sanitize inputs
     // Process data
   }
   ```

3. **Rate Limiting**
   - Implement on Apps Script side
   - Track submissions by IP or identifier
   - Limit submissions per time period

### Client-Side Security

1. **Never expose secrets**
   - Use environment variables
   - Don't log sensitive data
   - Don't include in error messages

2. **Validate inputs**
   - Client-side validation for UX
   - Server-side validation for security
   - Sanitize all user inputs

3. **Use HTTPS**
   - Always use HTTPS in production
   - Enforce secure connections
   - Use secure cookies if needed

## Maintenance

- Regularly update dependencies
- Monitor for security vulnerabilities
- Review access logs
- Rotate secrets periodically
- Keep documentation updated

---

**Last Updated**: 2026-04-24  
**Security Version**: 1.0
