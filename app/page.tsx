import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/meals"><p>Go to MealsPage</p></Link>
        <Link href="/meals/share"><p>Go to Meals Share</p></Link>
        <Link href="/community"><p>Go to Community</p></Link>
        <Link href="/meals/every"><p>Go to Meals Dynamic</p></Link>
    </main>
  );
}
