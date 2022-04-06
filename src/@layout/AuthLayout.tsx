const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <p>Private</p>
      {children}
    </main>
  );
};

export default AuthLayout;
