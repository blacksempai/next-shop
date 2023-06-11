import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Welcome to my shop</h1>
            <nav>
                <p><Link href="/about">About</Link></p>
                <p><Link href="/currencies">currencies</Link></p>
            </nav>
        </main>
    )
}