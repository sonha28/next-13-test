import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const router = useRouter();
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="h-full">
                <h1>Page 1</h1>
                <button
                    onClick={() =>
                        router.push({
                            pathname: "/next-page",
                            query: { success: false },
                        })
                    }
                >
                    Go Next Page
                </button>
            </div>
        </main>
    );
}
