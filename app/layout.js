import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({
  weight: ["400", "600"], // Array of weights you want to use
  subsets: ["latin"], // Array of subsets you want to use
});

export const metadata = {
  title: "Banid Prajapati Portfolio",
  description: "Banid prajapati is Sa programmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav>
          <ul className="flex justify-center gap-16 text-2xl mt-2 text-red-600 ">
            <Link href="/">
              <li className="hover:underline">Home</li>
            </Link>
            <Link href="/projects">
              <li className="hover:underline">Projects</li>
            </Link>
            <Link href="/">
              <li className="hover:underline">Contact</li>
            </Link>
          </ul>
        </nav>

        {children}
        <footer className="grid grid-cols-3 justify-between mt-16 px-24 py-2">
          <div>
            <p>Contact</p>
            <div className="text-2xl my-2">
              <h1 className="my-2">
                Mail: <br />
                <b>banidprajapati98@gmail.com</b>
              </h1>
              <h1 className="my-2">
                Phone: <br />
                <b>+977 - 9847297346</b>
              </h1>
            </div>
          </div>

          <div>
            <ul className="flex flex-col justify-center ">
              <p>Socials</p>
              <div className="text-2xl my-2">
                <li className="my-2">Github</li>
                <li className="my-2">Linked in</li>
                <li className="my-2">Instagram</li>
                <li className="my-2">Behance</li>
              </div>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col justify-center ">
              <p>Others</p>
              <div className="text-2xl my-2">
                <li className="my-2">Download my cv</li>
                <li className="my-2">Blog</li>
              </div>
            </ul>
          </div>
        </footer>
        <p className="text-xl mt-2 leading-loose text-center bg-yellow-200">
          © 2024 Banid Prajapati
        </p>
      </body>
    </html>
  );
}
