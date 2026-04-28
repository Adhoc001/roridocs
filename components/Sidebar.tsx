import Link from "next/link";

type SidebarProps = {
  collapsed: boolean;
};

const menuItems = [
  { label: "Dashboard", icon: "🏠", href: "/" },
  { label: "Projects", icon: "📁", href: "/projects" },
  { label: "Analytics", icon: "📊", href: "/analytics" },
  { label: "Messages", icon: "💬", href: "/messages" },
  { label: "Settings", icon: "⚙️", href: "/settings" },
];

export default function Sidebar({ collapsed }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full border-r bg-white p-4 transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <h2 className="mb-8 text-center text-xl font-bold">
        {collapsed ? "⚡" : "My App"}
      </h2>

      <nav className="space-y-4">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-100"
          >
            <span className="text-xl">{item.icon}</span>

            {!collapsed && (
              <span className="text-sm font-medium">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}