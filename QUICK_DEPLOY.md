# Quick Deploy Guide - 5 Minutes

## 🚀 Fastest Way to Deploy

### Option 1: Deploy via GitHub (Recommended - 3 steps)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Portfolio ready for deployment"
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repository
   - Click "Deploy"

3. **Done!** Your site is live at `portfolio-abc123.vercel.app`

### Option 2: Deploy via CLI (2 steps)

1. **Install & Login:**
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

---

## 📝 Change Your URL

After first deployment:

1. Go to **Project Settings** → **General**
2. Change **Project Name** to: `victor-li-portfolio`
3. Your new URL: `victor-li-portfolio.vercel.app`

---

## ✅ Verify It Works

Visit your URL and check:
- ✅ Home page loads
- ✅ All project pages work
- ✅ Images display
- ✅ Navigation works

---

## 🎯 Professional URL Examples

- `victor-li-portfolio.vercel.app` ✅
- `victorli.vercel.app` ✅
- `victor-li-ux.vercel.app` ✅

Avoid: `portfolio-abc123xyz.vercel.app` (auto-generated)

---

**Full guide:** See `DEPLOYMENT_GUIDE.md` for detailed instructions.

