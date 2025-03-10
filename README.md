# Client

## Step 1 Install Vite
create folder client
```bash
npm create vite .
npm install
npm run dev
type o --> to open
```

## Step 2 Install tailwind
https://tailwindcss.com/docs/installation/using-vite

```bash
npm install tailwindcss @tailwindcss/vite
```

edit vit.config.js
```js
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

add this code to index.css
```css
@import "tailwindcss";
```

and test this code.

```jsx
<h1 className="text-3xl font-bold underline">Hello world!</h1>
```

```bash
npm run dev
```

## Step 3 Install React-Router
https://reactrouter.com/start/framework/installation

```bash
npm i react-router
```

and edit this code in main.jsx
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </>
);
```

and then at AppRoutes.jsx
```jsx
//rfce
import React from 'react'
import { Route, Routes } from 'react-router';

function AppRoutes() {
  return (<>
  <Routes>
    {/* Public */}
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="about" element={<h1>About</h1>} />
    <Route path="register" element={<h1>Register</h1>} />
    <Route path="login" element={<h1>Login</h1>} />

    {/* Private [USER] */}
    <Route path="user" element={<h1>Home User</h1>} />

    {/* Private [ADMIN] */}
    <Route path="dashboard" element={<h1>Dashboard</h1>} />
    <Route path="manage" element={<h1>Manage</h1>} />


    <Route path="*" element={<h1>404 Not Found</h1>} />
  </Routes>
  </>
  );
}


export default AppRoutes
```

## Step ?? install sweetalert2
```
```

## Step 4 React-Hook-form
https://react-hook-form.com/

```bash
npm install react-hook-form
```

## Step 5 Validate with Zod

https://github.com/react-hook-form/resolvers

```bash
npm install @hookform/resolvers
npm i zod
```

## Step 6 Global State with Zustand
```bash
npm install zustand
```

## Step 7 Create new folder: store under src
```plaintext
and create new file: auth-store.jsx
```
