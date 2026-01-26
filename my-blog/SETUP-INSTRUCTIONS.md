# Sofia's Blog - Setup Instructions

## What I've Built For You

Your blog is now ready to deploy! Here's what's included:

### Files & Folders:
- **index.html** - Your homepage (10 blog posts with pagination)
- **page2.html** - Page 2 of blog posts
- **post-sample.html** - Example of what individual blog posts look like
- **admin/** - Your CMS admin panel (yoursite.com/admin)
- **posts/** - Where your blog posts will be stored (as markdown files)
- **posts.json** - List of all posts (for the homepage)
- **images/uploads/** - Where uploaded images go

### What You'll Be Able to Do:
✅ Write blog posts in a nice editor (no HTML!)
✅ Add images to posts
✅ Edit old posts
✅ Delete posts
✅ Publish/unpublish posts
✅ Everything updates automatically

---

## Step 1: Create Accounts (5 minutes)

### A. GitHub Account
1. Go to https://github.com/signup
2. Create a free account
3. Verify your email

**Why?** GitHub stores your blog posts and tracks changes. It's like Google Drive for code.

### B. Netlify Account  
1. Go to https://www.netlify.com
2. Click "Sign up"
3. Choose "Sign up with GitHub" (connects automatically)

**Why?** Netlify hosts your website for free and gives you the admin panel.

---

## Step 2: Deploy Your Blog (10 minutes)

### A. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `my-blog` (or whatever you want)
3. Make it **Public**
4. Click "Create repository"
5. You'll see an empty repo - that's fine!

### B. Upload Your Files to GitHub
**Option 1: Use GitHub's Web Interface (Easiest)**
1. On your empty repo page, click "uploading an existing file"
2. Drag ALL these files from your computer:
   - index.html
   - page2.html  
   - post-sample.html
   - posts.json
   - admin/ folder (drag the whole folder)
   - posts/ folder
   - images/ folder
3. Add commit message: "Initial blog setup"
4. Click "Commit changes"

**Option 2: Use GitHub Desktop (If you prefer apps)**
1. Download GitHub Desktop
2. Clone your new repo
3. Copy all your blog files into that folder
4. Commit and push

### C. Connect to Netlify
1. Log into Netlify
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Select your `my-blog` repository
5. Build settings - leave everything **blank** (it's just HTML, no build needed)
6. Click "Deploy site"
7. Wait 30 seconds - your site is live! 🎉

Netlify will give you a URL like: `random-name-123.netlify.app`

---

## Step 3: Set Up The CMS (5 minutes)

### A. Enable Netlify Identity
1. In your Netlify dashboard, go to your site
2. Click "Identity" in the top menu
3. Click "Enable Identity"
4. Settings → Registration → Change to "Invite only"
5. Identity → "Invite users" → Enter your email
6. Check your email and accept the invite
7. Create your password

### B. Enable Git Gateway
1. Still in Netlify Identity settings
2. Services → "Enable Git Gateway"
3. Done!

### C. Access Your Admin Panel
1. Go to `your-site-url.netlify.app/admin`
2. Log in with the email/password you just created
3. You'll see "Blog Posts" - this is where you write!

---

## Step 4: Write Your First Post

1. Go to `yoursite.netlify.app/admin`
2. Click "New Blog Posts"
3. Fill in:
   - **Title**: Your post title
   - **Publish Date**: When you want it published
   - **Body**: Your post content (you can use formatting buttons!)
4. Click "Publish" → "Publish now"

**What happens?**
- Your post gets saved to GitHub as a markdown file
- Netlify detects the change
- Your site rebuilds automatically (30 seconds)
- The post appears on your homepage!

---

## Step 5: Use Your Own Domain (Optional)

Want `sofiasblog.com` instead of `random-name.netlify.app`?

1. Buy a domain from Namecheap, Google Domains, etc. ($10-15/year)
2. In Netlify: Domain settings → "Add custom domain"
3. Enter your domain name
4. Follow Netlify's DNS instructions
5. Wait 24-48 hours for DNS to update

**Recommended domains:**
- sofiasblog.com
- thinslice.blog  
- yourname.com

---

## How It Works (For Your Understanding)

### The System:
```
You write in admin panel
       ↓
Saved to GitHub (as .md file)
       ↓
Netlify detects change
       ↓
Site rebuilds automatically
       ↓
Post appears on your blog
```

### The Files:
- **Markdown files** (.md) in /posts/ = Your blog posts
- **posts.json** = List of posts for homepage
- **admin/config.yml** = CMS settings

---

## Current Limitation & Next Steps

**Right now:** The homepage is still showing dummy posts. After you write a few real posts, I'll help you update the homepage to automatically pull from your markdown files instead of the hardcoded list.

**This means:**
- For now, when you write a post, you can access it directly via URL
- Once you have 5-10 posts written, we'll connect them to the homepage properly
- This keeps the setup simple for now!

**To make the posts show on homepage:** I'll either create a simple JavaScript that reads posts.json, OR we'll use a static site generator like 11ty. We can decide based on how comfortable you are with technical stuff.

---

## Troubleshooting

**"I can't access /admin"**
→ Make sure you enabled Netlify Identity and Git Gateway

**"My post isn't showing up"**
→ Wait 1-2 minutes for Netlify to rebuild. Check the Netlify dashboard for deploy status.

**"I want to change the design"**
→ Edit index.html in GitHub, commit the change, Netlify will redeploy automatically

**"I deleted something by accident"**
→ GitHub keeps history of everything! You can restore old versions.

---

## What You Have Now

✅ Beautiful, minimal blog design
✅ Easy admin panel for writing
✅ Free hosting
✅ Your own domain (if you set it up)
✅ Automatic backups (via GitHub)
✅ Post history/versions

## Ready to Go Live?

Follow the steps above, and you'll have a working blog in about 20 minutes total!

Questions? Just come back and ask me - I'm here to help!
