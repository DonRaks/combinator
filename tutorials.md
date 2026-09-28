nextjs is a fullstack web platform based on react

like react 19 it has server side and client side components 
nextjs 16 supports react 19

routiing is file based in the app router

it usesd layouts.tsx files to define page layouts
nextjs has file based routing

Route groups uses paretheresis to organixe file based routing the folder themselves are not included in the routing 


client component vs server component
server components are the default and best for SEO and performance, they are not included in the client bundle  
client components need 'use client' directive at the top of the file
use client components need to be imported directly from 'react', not next/app, next/router or next/navigation   


ERROR HANDLING  

App Router has error handling


error.tsx

synatx is const [error, setError] = useError();
error.tsx handles runtime errors for a specific segment of your application
it does not catch syntax errors, failed server component fetches (this is handled by the suspense boundary)


Error boundaries are React Server Components that catch runtime errors in child server components
error.tsx must be a client component


Error boundaries catch errors from:
Client Components
Server Components
Layouts
Error boundaries are *not* included in the segment they wrap
error.tsx can import and call the useClientHook() to become a client component


Server-Side Components Error Boundaries (Server Components)


if you throw an error in a server component, the error is not caught by an error.tsx boundary


app router has three folders layout.tsx, page.tsx and error.tsx   

suspense in App Router is used for data fetching 
it can be used to wrap a server component that is fetching data 
it can be used to wrap a client component that is fetching data 

suspense can be used in Server Components
and is imported from react or next/dist/client/components/suspense.js 



