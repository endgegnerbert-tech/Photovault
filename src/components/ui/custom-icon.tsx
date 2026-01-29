import { 
  Key, 
  Lock, 
  Shield, 
  Upload, 
  Smartphone, 
  Cloud, 
  Clock, 
  Search, 
  Image as ImageIcon, 
  FolderOpen, 
  RefreshCw, 
  ChevronRight,
  User
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  key: Key,
  lock: Lock,
  shield: Shield,
  upload: Upload,
  smartphone: Smartphone,
  cloud: Cloud,
  clock: Clock,
  search: Search,
  image: ImageIcon,
  folder: FolderOpen,
  refresh: RefreshCw,
  chevronRight: ChevronRight,
  user: User
} as const;

export type IconName = keyof typeof ICONS;

interface CustomIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function CustomIcon({ name, className, size = 24 }: CustomIconProps) {
  const Icon = ICONS[name];
  
  if (!Icon) return null;

  return (
    <Icon 
      className={cn("shrink-0", className)} 
      size={size}
    />
  );
}
