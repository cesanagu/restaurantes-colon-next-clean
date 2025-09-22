// components/BackButton.js
import Link from "next/link";

export default function BackButton() {
  return (
    <Link href="/">
      <a className="fixed top-6 left-6 bg-gray-200 hover:bg-gray-300 p-3 rounded-full shadow-lg flex items-center justify-center transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </a>
    </Link>
  );
}

