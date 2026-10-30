// Thank-you page: useful to visitors, but should not appear in search results.
export const metadata = {
  robots: { index: false, follow: true },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
