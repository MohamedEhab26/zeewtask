import React, { useState, useRef, useEffect } from 'react';

interface EditableTextProps {
  value: string;
  onChange: (newValue: string) => void;
}

const EditableText: React.FC<EditableTextProps> = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (isEditing) {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      } else if (textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
      }
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onChange(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
      onChange(text);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setText(value);
    }
  };

  if (isEditing) {
    return text.length > 50 ? (
      <textarea
        ref={textareaRef}
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-full bg-white/80 backdrop-blur-sm border border-violet-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
        rows={Math.max(2, Math.ceil(text.length / 50))}
      />
    ) : (
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className="w-full bg-white/80 backdrop-blur-sm border border-violet-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
    );
  }

  return (
    <span 
      onClick={handleClick}
      className="cursor-text hover:bg-violet-100/50 px-1 py-0.5 rounded transition-colors duration-200 inline-block"
    >
      {text}
    </span>
  );
};

export default EditableText;