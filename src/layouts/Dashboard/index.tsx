interface DashboardProps {
  sidebar: JSX.Element;
  children: JSX.Element;
  topHeader: JSX.Element;
}

const Dashboard = ({
  children,
  sidebar,
  topHeader,
}: DashboardProps): JSX.Element => {
  return (
    <div className="w-full h-screen">
      <aside className="fixed top-0 left-0 h-full w-2/12">{sidebar}</aside>
      <main className="fixed top-0 right-0 h-full w-10/12 overflow-auto bg-gray-200">
        <header className="fixed top-0 right-0 w-10/12 h-12">{topHeader}</header>
        <div className="pt-12">{children}</div>
      </main>
    </div>
  );
};

export default Dashboard;
