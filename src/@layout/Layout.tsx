const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <p>Public</p>
      {children}
    </main>
  );
};

export default Layout;
