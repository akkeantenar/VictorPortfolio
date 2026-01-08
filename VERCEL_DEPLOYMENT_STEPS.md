# 🚀 Vercel Deployment - Step by Step Guide

## ✅ Pre-Deployment: Build Test Passed!

Your portfolio builds successfully! Ready to deploy.

---

## 📋 Step-by-Step Deployment Instructions

### STEP 1: Create Vercel Account (2 minutes)

1. Go to **[vercel.com](https://vercel.com)**
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended)
4. Authorize Vercel to access your GitHub

### STEP 2: Prepare Your Code for GitHub (3 minutes)

**If you haven't already:**

```bash
# Navigate to your portfolio directory
cd /Users/anthonymiller/Data/Portfolio

# Initialize git (if not already done)
git init

# Add all files.  
git add .

# Commit
git commit -m "Portfolio ready for deployment"

# Create repository on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username**

### STEP 3: Deploy to Vercel (2 minutes)

#### Method A: Via Vercel Dashboard (Easiest)

1. Go to **[vercel.com/new](https://vercel.com/new)**
2. Click **"Import Git Repository"**
3. Select your `portfolio` repository
4. Click **"Import"**
5. **Configure Project:**
   - Framework: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
6. Click **"Deploy"**
7. Wait 1-2 minutes for deployment

#### Method B: Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### STEP 4: Customize Your URL (1 minute)

**After deployment:**

1. Go to your **Vercel Dashboard**
2. Click on your project
3. Go to **Settings** → **General**
4. Find **"Project Name"**
5. Change from: `portfolio-abc123` 
6. Change to: **`victor-li-portfolio`** (or your preferred name)
7. Click **"Save"**

**Your new URL:** `https://victor-li-portfolio.vercel.app`

---

## 🎯 Professional URL Recommendations

### Best Options:

1. **`victor-li-portfolio.vercel.app`** ✅
   - Clear, professional
   - Easy to remember
   - Shows it's a portfolio

2. **`victorli.vercel.app`** ✅
   - Short and clean
   - Professional
   - Easy to type

3. **`victor-li-ux.vercel.app`** ✅
   - Role-specific
   - Shows UX focus
   - Professional

### Avoid:
- ❌ `portfolio-abc123xyz.vercel.app` (auto-generated)
- ❌ `portfolio-123456789.vercel.app` (random numbers)

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Visit your URL: `https://victor-li-portfolio.vercel.app`
- [ ] Home page loads correctly
- [ ] About page works
- [ ] MNTN project page displays diagrams
- [ ] Snap project page displays diagram  
- [ ] Netflix project page displays diagrams
- [ ] Navigation works on all pages
- [ ] Images load correctly
- [ ] Mobile responsive (test on phone)
- [ ] Contact links work (email, LinkedIn)
- [ ] No console errors (check browser DevTools)

---

## 🔄 Updating Your Portfolio

### Automatic Updates (Recommended)

If you connected GitHub:

1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel automatically redeploys!

### Manual Update

```bash
vercel --prod
```

---

## 🌐 Custom Domain (Optional - Advanced)

To use `victorli.dev` instead of `.vercel.app`:

1. **Buy a domain** (Namecheap, Google Domains, etc.)
2. **In Vercel:** Settings → Domains → Add Domain
3. **Configure DNS:**
   - Add CNAME: `@` → `cname.vercel-dns.com`
   - Or A record: `@` → `76.76.21.21`

---

## 📊 What You Get with Vercel

- ✅ **Free HTTPS** (automatic)
- ✅ **Global CDN** (fast worldwide)
- ✅ **Automatic deployments** (from GitHub)
- ✅ **Preview deployments** (for pull requests)
- ✅ **Analytics** (optional, free tier available)
- ✅ **Unlimited bandwidth** (on free tier)

---

## 🎉 You're Done!

Your portfolio is now live at:
**`https://victor-li-portfolio.vercel.app`**

### Share Your Portfolio:

- ✅ Add to LinkedIn profile
- ✅ Add to resume
- ✅ Add to email signature
- ✅ Share with Microsoft recruiters
- ✅ Add to GitHub profile README

---

## 🆘 Troubleshooting

### Build Fails?
```bash
# Clear and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading?
- Check files are in `/public` folder
- Verify paths start with `/` (e.g., `/mntn/diagram.svg`)
- Check file names match exactly (case-sensitive)

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

## 📝 Quick Reference

**Deploy:** `vercel --prod`  
**Preview:** `vercel`  
**Dashboard:** https://vercel.com/dashboard  
**Your Site:** `https://victor-li-portfolio.vercel.app`

---

**Ready to deploy? Start with STEP 1 above!** 🚀

