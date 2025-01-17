import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
  import { LucideIcon } from "lucide-react";
  import { useNavigate } from "react-router-dom";
  
  interface MenuItem {
    label: string;
    path?: string; // Optional navigation path
    onClick?: () => void; // Optional custom click handler
    icon?: LucideIcon; // Optional icon from Lucide
    className?: string; // Additional custom classes
  }
  
  interface CustomDropdownMenuProps {
    trigger: React.ReactNode; // The dropdown trigger (e.g., button, image)
    menuItems: MenuItem[]; // Array of menu items
  }
  
  const CustomDropdownMenu: React.FC<CustomDropdownMenuProps> = ({
    trigger,
    menuItems,
  }) => {
    const navigate = useNavigate();
  
    const handleItemClick = (item: MenuItem) => {
      if (item.onClick) {
        item.onClick(); // Execute custom click handler
      }
      if (item.path) {
        navigate(item.path); // Navigate to the specified path
      }
    };
  
    return (
      <DropdownMenu modal={false}>
        {/* Trigger */}
        <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
  
        {/* Dropdown Menu */}
        <DropdownMenuContent align="end">
          {menuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleItemClick(item)}
              className={`hover:cursor-pointer ${item.className || ""}`}
            >
              {item.icon && <item.icon className="mr-2 h-4 w-4" />}
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  export default CustomDropdownMenu;
  