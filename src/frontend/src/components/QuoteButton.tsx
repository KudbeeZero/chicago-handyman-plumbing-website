import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

interface QuoteButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  href?: string;
  phone?: boolean;
}

export default function QuoteButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href = "/contact",
  phone = false,
}: QuoteButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all";

  const variantClasses = {
    primary:
      "bg-brand-orange-500 hover:bg-brand-orange-600 text-white shadow-brand-sm hover:shadow-brand-md",
    secondary: "bg-brand-navy-800 hover:bg-brand-navy-700 text-white",
    outline:
      "border-2 border-brand-orange-500 text-brand-orange-500 hover:bg-brand-orange-500 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (phone) {
    return (
      <a href="tel:+17738669429" className={classes}>
        <Phone className="h-4 w-4" />
        {children || "Call Now"}
      </a>
    );
  }

  return (
    <Link to={href} className={classes}>
      {children || "Get Free Quote"}
    </Link>
  );
}
