interface ISidebarProps {
  title: React.ReactNode;
  children: React.ReactNode;
  socialLinks: React.ReactNode;
}

const Sidebar: React.FC<ISidebarProps> = (props) => {
  return (
    <aside>
      <header>{props.title}</header>
      <main>{props.children}</main>
      <footer>{props.socialLinks}</footer>
    </aside>
  );
};

export default Sidebar;
