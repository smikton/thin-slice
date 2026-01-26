# 📁 Folder Structure Guide

When you upload to GitHub, organize your files exactly like this:

```
my-blog/
├── admin/
│   ├── index.html         (The admin interface file)
│   └── config.yml         (CMS configuration)
├── images/
│   └── uploads/           (Create this empty folder)
├── posts/                 (Create this empty folder)
├── index.html             (Your homepage)
├── page2.html             (Second page of posts)
├── post-sample.html       (Example post page)
├── posts.json             (List of posts)
├── _redirects             (Netlify routing)
├── README.md              (Project info)
└── SETUP-INSTRUCTIONS.md  (Setup guide)
```

## Important Notes:

1. **admin/** folder contains TWO files:
   - index.html
   - config.yml
   
2. **images/uploads/** should be an empty folder for now
   
3. **posts/** should be an empty folder for now
   
4. **_redirects** has no file extension (it's just "_redirects")

## How to Upload to GitHub:

**Option A: Upload everything at once**
1. Create the folder structure on your computer first
2. Put all files in the right places
3. Drag the entire folder to GitHub

**Option B: Upload one by one**
1. Upload the root files first (index.html, README.md, etc.)
2. Click "Add file" → "Create new file"
3. Name it "admin/index.html" (this creates the folder automatically)
4. Paste the content
5. Repeat for admin/config.yml
6. Create empty folders by adding a .gitkeep file:
   - "images/uploads/.gitkeep"
   - "posts/.gitkeep"

---

Once uploaded, follow SETUP-INSTRUCTIONS.md to deploy!
