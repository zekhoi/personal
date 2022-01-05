This is a [Next.js](https://nextjs.org/) blog template using [TailwindCSS](https://tailwindcss.com/).

# Getting Started

First, install dependencies:

```bash
npm install
```

Then, set environment variables and change file `profile.config.js` value, the environment variables is used for SEO

```env
MYDOMAIN=https://yourdomain.com
```

Second, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

In the '\_contents' folder you can change the details in about.md and contact.md, in the posts folder you can add a new post, and in the projects folder you can add a new project those will show on your website.

## Post

- slug/permalink is the file name not the title detail, example : 'this is example.md' will be 'this-is-example'
- blog details is 'required'

## Deploy

If you want to deploy it, you can use [vercel](https://vercel.com/).

- Connect your github
- Build a new project
- Connect the template repository
- Auto deployment
