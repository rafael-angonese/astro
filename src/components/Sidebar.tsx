interface ISidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = ({ children }) => {
  return (
    <aside>
      <main>{children}</main>
    </aside>
  );
};

export default Sidebar;
