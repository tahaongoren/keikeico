import Link from "next/link";

function HomePage() {
    return <div>

        <nav>
            <Link href="/">
                <a> Anasayfa</a>
            </Link>
            <Link href="/about">
                <a> Hakkımda</a>
            </Link>

        </nav>

        <h1>about us</h1>


    </div>}

export default HomePage