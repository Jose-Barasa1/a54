import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';

export const metadata = {
  title: 'A54 Racing — Go-Kart & Motorsport Hub',
  description:
    "A54 Racing — Kenya's home of go-karting, F1, MotoGP, and Safari Rally.",
};

export const viewport = { themeColor: '#e10600' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
