import { Inter } from 'next/font/google';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

import { AuthProvider } from '@/utils/context/authContext'; // ✅ Make sure this path is correct

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {' '}
          {/* ✅ Wrap your entire app */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  return {
    title: `TEMPLATE - ${slug || 'HOME'}`,
    description: `This is a dynamically generated description for ${slug}.`,
    keywords: [`${slug}`, 'dynamic', 'page'],
    openGraph: {
      title: `Open Graph Title for ${slug}`,
      description: `Open Graph Description for ${slug}`,
      url: `https://yourwebsite.com/${slug}`,
    },
  };
};
