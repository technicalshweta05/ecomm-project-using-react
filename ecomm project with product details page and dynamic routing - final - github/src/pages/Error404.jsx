import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Text */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-300 mx-auto mb-6"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-2">
            We can't seem to find the page you're looking for.
          </p>
          <p className="text-gray-500 text-sm">
            It might have been moved or deleted.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-slate-800 rounded-full w-32 h-32 flex items-center justify-center mx-auto border-2 border-slate-700">
              <svg
                className="w-16 h-16 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 9v2m0 4v2m0-12a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-12 text-gray-600 text-sm">
          Error Code: <span className="text-gray-400 font-mono">404 NOT_FOUND</span>
        </p>
      </div>
    </div>
  )
}
