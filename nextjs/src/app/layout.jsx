// app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header style={{ padding: '1rem', background: '#f0f0f0' }}>
          <h2>Daniel Barron</h2>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '1rem', background: '#f0f0f0' }}>
          <p>© 2025 Daniel Barron</p>
        </footer>
      </body>
    </html>
  );
}
