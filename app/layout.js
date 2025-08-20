import "./globals.css"

export const metadata = {
  title: "Clean Comfort Quiz by Mohammad Farooqi",
  description: "Personalized meal plans from Clean Comfort"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="max-w-2xl mx-auto p-6">
          {children}
        </main>
      </body>
    </html>
  )
}
