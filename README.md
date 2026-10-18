# Eastern Med Supplies — Simple Edition

This is intentionally simplified so the website is easy to edit.

## Run
```powershell
npm install
npm run dev
```

Open the Local URL shown by Vite.

## Where to edit
### Products
Edit only:
`src/products.js`

Add/change `name`, `category`, `image`, `description`, `features`, `specifications`, and `applications`.

### Company contact
Edit the first few lines of:
`src/App.jsx`

Change:
- COMPANY_EMAIL
- COMPANY_PHONE
- WHATSAPP_NUMBER

### Images
Put product images in:
`public/assets/`

Then set e.g.:
`image: '/assets/my-product.jpg'`

### Main website text
Most page text is in:
`src/App.jsx`

### Design
All styling is in:
`src/styles.css`

No TanStack Router, no large UI component library, no generated route files, and no 50+ component files are needed for this simplified edition.
