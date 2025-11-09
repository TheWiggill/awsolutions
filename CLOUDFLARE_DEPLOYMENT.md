# Cloudflare Pages Deployment Guide

This guide will walk you through deploying your Vite React application to Cloudflare Pages.

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://www.cloudflare.com) (free tier is sufficient)
2. **GitHub Repository**: Your code should be in a GitHub repository
3. **Node.js**: Cloudflare Pages will handle this automatically, but ensure your `package.json` is correct

## Step-by-Step Deployment Instructions

### Step 1: Prepare Your Repository

1. **Commit and push your changes** to GitHub:
   ```bash
   git add .
   git commit -m "Configure for Cloudflare Pages deployment"
   git push origin main  # or your default branch name
   ```

2. **Verify your build works locally**:
   ```bash
   npm run build
   ```
   This should create a `dist` folder with your built files.

### Step 2: Connect Repository to Cloudflare Pages

1. **Log in to Cloudflare Dashboard**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Sign in to your account

2. **Navigate to Pages**:
   - Click on **"Workers & Pages"** in the left sidebar
   - Click **"Create application"**
   - Select **"Pages"** tab
   - Click **"Connect to Git"**

3. **Authorize GitHub**:
   - Click **"Connect GitHub"** or **"Connect Git provider"**
   - Authorize Cloudflare to access your GitHub repositories
   - Select the repository: `awsolutions` (or your repo name)

### Step 3: Configure Build Settings

After connecting your repository, you'll see the build configuration page. Use these settings:

#### **Build Configuration**

- **Project name**: `awsolutions` (or your preferred name)
- **Production branch**: `main` (or `master`, `gh-pages`, depending on your default branch)
- **Root directory**: Leave **empty** or set to `/` (this means the repository root)
- **Build command**: `npm run build`
- **Build output directory**: `dist`

#### **Environment Variables** (if needed)

If you have any environment variables:
- Click **"Add environment variable"**
- Add variables for production builds
- Note: Your contact form uses a hardcoded API key, which is fine for now, but consider moving it to an environment variable later

### Step 4: Deploy

1. Click **"Save and Deploy"**
2. Cloudflare Pages will:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Run your build command (`npm run build`)
   - Deploy the `dist` folder

3. **Monitor the build**:
   - You'll see real-time build logs
   - The build typically takes 1-3 minutes
   - If it fails, check the logs for errors

### Step 5: Access Your Site

Once deployment completes:

1. **Default URL**: Your site will be available at:
   ```
   https://your-project-name.pages.dev
   ```
   (Cloudflare will show you the exact URL)

2. **Custom Domain** (Optional):
   - Go to your project settings
   - Click **"Custom domains"**
   - Add your domain
   - Follow DNS configuration instructions

## Build Configuration Summary

```
Root directory:        / (or empty)
Build command:         npm run build
Build output directory: dist
Node version:          Auto-detected (or specify in package.json)
```

## Troubleshooting

### Build Fails: "root directory not found"
- **Solution**: Set Root directory to `/` or leave it completely empty
- Do NOT use `/awsolutions/` - that's for URL paths, not file paths

### Build Fails: "Cannot find module"
- **Solution**: Ensure `package.json` and `package-lock.json` are committed
- Check that all dependencies are listed in `package.json`

### Assets Not Loading (404 errors)
- **Solution**: Verify `vite.config.ts` has `base: '/'` (already updated)
- Check that images are in the `public/images/` folder
- Ensure image paths in your code use relative paths or `import.meta.env.BASE_URL`

### Build Succeeds but Site Shows Blank Page
- **Solution**: Check browser console for errors
- Verify `dist/index.html` exists and has correct asset paths
- Ensure React Router is configured correctly for SPA routing

### SPA Routing Issues (404 on refresh)
- **Solution**: Cloudflare Pages handles this automatically, but you can add a `_redirects` file:
  - Create `public/_redirects` with content: `/* /index.html 200`
  - Or configure in Cloudflare Pages settings under "Functions" → "Redirects"

## Continuous Deployment

Cloudflare Pages automatically:
- ✅ Deploys on every push to your production branch
- ✅ Creates preview deployments for pull requests
- ✅ Provides build logs and deployment history

## Advanced Configuration

### Custom Build Settings

If you need a specific Node.js version, create a `.nvmrc` file:
```
18
```

Or specify in `package.json`:
```json
"engines": {
  "node": ">=18.0.0"
}
```

### Preview Deployments

- Every pull request gets a preview URL
- Preview URLs look like: `https://pr-123-your-project.pages.dev`
- Preview deployments are automatically cleaned up after PR is closed

### Environment-Specific Builds

You can set different environment variables for:
- **Production**: Main branch deployments
- **Preview**: Pull request deployments

## Post-Deployment Checklist

- [ ] Site loads correctly at the Cloudflare Pages URL
- [ ] All images and assets load properly
- [ ] Navigation works (test all routes)
- [ ] Contact form submits successfully
- [ ] Mobile responsiveness works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate is active (automatic with Cloudflare)

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Cloudflare Pages Build Configuration](https://developers.cloudflare.com/pages/platform/build-configuration/)

## Current Configuration Status

✅ **vite.config.ts**: Updated to `base: '/'`  
✅ **Build command**: `npm run build`  
✅ **Output directory**: `dist`  
✅ **Root directory**: `/` (repository root)

Your project is ready for Cloudflare Pages deployment!

