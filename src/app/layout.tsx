import '../styles/globals.css';
import { ThemeProvider } from '../context/ThemeProvider';

export const metadata = {
  title: 'DevLink Style Guide',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
