import { ImageIcon } from 'lucide-react';

interface PhotoPlaceholderProps {
  width?: string;
  height?: string;
  label?: string;
  className?: string;
}

export function PhotoPlaceholder({
  width = 'w-full',
  height = 'h-64',
  label = 'Photo Placeholder',
  className = '',
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`${width} ${height} bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center gap-2 ${className}`}
    >
      <ImageIcon className="w-10 h-10 text-gray-400" />
      <span className="text-sm text-gray-400 font-medium">{label}</span>
    </div>
  );
}
