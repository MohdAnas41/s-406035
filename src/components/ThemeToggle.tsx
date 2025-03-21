
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-full"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] absolute transition-all ${
        theme === 'dark' ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
      }`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] absolute transition-all ${
        theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
      }`} />
    </Button>
  );
}
