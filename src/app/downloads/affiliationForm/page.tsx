
'use client';

import Link from 'next/link';

const GOOGLE_DRIVE_FILE_ID = '16hMdLTr91wK4jHuKlIA-6fe41kKC-2wL';

export default function Affiliation() {
  return (
    <section className="mt-1 md:mt-1 bg-gradient-to-b from-white via-[#f5f9fc] to-white py-6">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#01315A] sm:text-4xl md:text-5xl">
            Affiliation Form
          </h1>
          <p className="mt-2 text-sm sm:text-base lg:text-lg text-gray-600">
            Download and view our affiliation form below
          </p>
        </div>

        {/* Download Button */}
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-[#01315A] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition-all duration-200 hover:bg-[#02639f] active:scale-95"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Form
          </Link>

          <Link
            href={`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/view?usp=drive_link`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#01315A] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-[#01315A] transition-all duration-200 hover:bg-[#01315A] hover:text-white active:scale-95"
          >
            <svg
              className="mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View in Google Drive
          </Link>
        </div>

        {/* Embedded Preview */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <iframe
            src={`https://drive.google.com/file/d/${GOOGLE_DRIVE_FILE_ID}/preview`}
            width="100%"
            height="600"
            allow="autoplay"
            className="border-0"
          />
        </div>

        {/* Info Text */}
        <div className="mt-8 rounded-lg bg-blue-50 p-6 text-center">
          <p className="text-xs sm:text-sm text-gray-700">
            <span className="font-semibold text-[#01315A]">Note:</span> You can download the form directly or view it in Google Drive. The preview above shows a preview of the document.
          </p>
        </div>
      </div>
    </section>
  );
}