import './globals.css';
import Navbar from '../components/Navbar/Navbar.jsx';
export const metadata = {
  title: 'Shop.co',
  description: 'Find clothes that matches your style',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
