export interface MenuItem {
  label: string;
  path?: string; // Optional navigation path
  onClick?: () => void;
  icon?: LucideIcon; // Optional icon from Lucide
  className?: string; // Additional custom classes
}
