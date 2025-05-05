import Link from "next/link";
import classes from './page.module.css'
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      {/* nested header */}
      <header className={classes.header}>
        <div className={classes.slideshow}>
          {/* 
            [IMPORTANT]
            `ImageSlideshow` is a client side component, not the server side component
            because it implements `useState` and `useEffect`. But page.js is server side component
            by default that does not allow `useEffect` and `useState`.

            NextJS knows `server component`, `react server components`, and `client components`
            
            [Server Side Component]
            In NextJS, by default the backend executes the (react) server component functions & renders and 
            hence derives the rendered HTML code. Then the client side receives the rendered HTML code.

            (React) `server components` vs `client components`
            `(React) server components` Components that are only rendered on the server
            By default, all React components (in NextJS apps) are `React server component`
            Even, we use Single Page Routing `Link` that makes the app stay in Single Page App which means
            we did not fetch the brand new page but NextJS still implements the server side rendering.

            Advantage: Less client-side JS and hence improving performance of the website
            and and great Search Engine Optimization (web site crawler need to find the finished content)

            [Client Side Component]
            Components that are pre-rendered on the server but then also potentially on the client
            Opt-in via "use client" directive
            Client side interactivity

            So when we need to use `onClick`, useEffect, useState, etc, we must add "use client"
            for NextJS to know it is client side only.
          */}
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
