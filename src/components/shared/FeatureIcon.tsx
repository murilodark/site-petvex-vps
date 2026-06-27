import React from "react";
import * as Icons from "lucide-react";

export interface FeatureIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const FeatureIcon: React.FC<FeatureIconProps> = ({ name, className = "text-emerald-600", size = 24 }) => {
  // Get Icon dynamically from mapped Lucide Icons, fallback to HelpCircle
  const IconComponent = (Icons as any)[name] || Icons.HelpCircle;
  
  return <IconComponent className={className} size={size} />;
};

export default FeatureIcon;
