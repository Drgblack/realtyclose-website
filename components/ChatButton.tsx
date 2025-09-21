'use client';

interface ChatButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChatButton({ children, className }: ChatButtonProps) {
  const handleClick = () => {
    // This would trigger the live chat widget
    const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
    if (chatButton) chatButton.click();
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}