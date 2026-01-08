# Vercel Deployment Guide - Step by Step

## 🎯 Professional URL Options

Choose one of these professional URL patterns:

### Option 1: Personal Name (Recommended)
- **URL:** `victor-li-portfolio.vercel.app` or `victorli.vercel.app`
- **Custom Domain:** `victorli.dev` or `victorli.me` (if you own it)

### Option 2: Professional Portfolio
- **URL:** `victor-li-ux-engineer.vercel.app`
- **Custom Domain:** `victorli.dev` or `victorli.me`

### Option 3: Simple & Clean
- **URL:** `vli-portfolio.vercel.app`
- **Custom Domain:** `vli.dev` (if available)

**Note:** Vercel will auto-generate a URL like `portfolio-abc123.vercel.app`, but you can change it in project settings.

---

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [x] All dependencies are installed (`npm install`)
- [x] Build works locally (`npm run build`)
- [x] No errors in the console
- [x] All images/diagrams are in `/public` folder
- [x] Contact information is updated in Footer component

---

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Code

1. **Test the build locally:**
   ```bash
   npm run build
   ```
   
   If successful, you'll see:
   ```
   ✓ Compiled successfully
   ```

2. **Test production build:**
   ```bash
   npm start
   ```
   
   Visit `http://localhost:3000` to verify everything works.

### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended) or email
4. Complete account setup

### Step 3: Install Vercel CLI (Optional but Recommended)

```bash
npm install -g vercel
```

**Or use the web interface** (easier for first-time deployment)

### Step 4: Deploy via Vercel Dashboard (Easiest Method)

#### Option A: Import from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **In Vercel Dashboard:**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Select your GitHub repository
   - Click **"Import"**

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Environment Variables:** (None needed for this project)

5. **Click "Deploy"**

#### Option B: Deploy via CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow prompts:**
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name? **victor-li-portfolio** (or your choice)
   - Directory? **./** (current directory)
   - Override settings? **No**

4. **Production deployment:**
   ```bash
   vercel --prod
   ```

### Step 5: Configure Project Settings

After deployment:

1. **Go to Project Settings** → **General**
2. **Change Project Name** (if needed):
   - Current: `portfolio-abc123`
   - Change to: `victor-li-portfolio` or `victorli`
   - This updates your URL to: `victor-li-portfolio.vercel.app`

3. **Set Production Branch:**
   - Production Branch: `main` (or `master`)

### Step 6: Custom Domain (Optional but Recommended)

1. **In Project Settings** → **Domains**
2. **Add Domain:**
   - Enter: `victorli.dev` (or your domain)
   - Click **"Add"**
3. **Configure DNS:**
   - Add CNAME record:
     - Name: `@` or `www`
     - Value: `cname.vercel-dns.com`
   - Or A record:
     - Name: `@`
     - Value: `76.76.21.21` (Vercel IP)

### Step 7: Verify Deployment

1. **Visit your deployed site:**
   - `https://victor-li-portfolio.vercel.app` (or your custom URL)

2. **Check all pages:**
   - ✅ Home page loads
   - ✅ About page works
   - ✅ MNTN project page displays diagrams
   - ✅ Snap project page displays diagram
   - ✅ Netflix project page displays diagrams
   - ✅ Navigation works
   - ✅ Images load correctly

3. **Test on mobile:**
   - Open on phone/tablet
   - Verify responsive design

---

## 🔧 Troubleshooting

### Issue: Build fails

**Solution:**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Issue: Images not loading

**Solution:**
- Ensure all images are in `/public` folder
- Check image paths start with `/` (e.g., `/mntn/architecture-diagram.svg`)
- Verify file names match exactly (case-sensitive)

### Issue: TypeScript errors

**Solution:**
```bash
npm run build
# Fix any TypeScript errors shown
```

### Issue: Styling not working

**Solution:**
- Verify `tailwind.config.js` includes all content paths
- Check `postcss.config.js` is present
- Ensure `globals.css` imports Tailwind

---

## 📝 Post-Deployment Checklist

After successful deployment:

- [ ] All pages load correctly
- [ ] Images and diagrams display
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] Contact links work (email, LinkedIn)
- [ ] No console errors
- [ ] Fast load times
- [ ] SEO metadata is correct

---

## 🔄 Updating Your Portfolio

### Method 1: Automatic (GitHub Integration)

1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel automatically deploys (if GitHub integration is set up)

### Method 2: Manual Deploy

```bash
vercel --prod
```

---

## 🌐 Example Professional URLs

Here are examples of professional portfolio URLs:

- `victorli.dev` (custom domain)
- `victor-li.vercel.app` (Vercel subdomain)
- `vli-portfolio.vercel.app` (descriptive)
- `victor-li-ux.vercel.app` (role-specific)

**Best Practice:** Use a custom domain (`victorli.dev`) for maximum professionalism.

---

## 📊 Performance Optimization

Vercel automatically optimizes:
- ✅ Image optimization
- ✅ Automatic HTTPS
- ✅ CDN distribution
- ✅ Edge caching
- ✅ Serverless functions

Your portfolio will be fast and globally distributed!

---

## 🎉 You're Done!

Your portfolio is now live at: `https://YOUR-PROJECT-NAME.vercel.app`

Share this URL with:
- Microsoft recruiters
- LinkedIn profile
- Resume
- Email signature

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs

