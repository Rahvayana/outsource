// This file is required for the app directory
// The actual routing is handled by next-intl middleware
// and the [locale] dynamic segment

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
