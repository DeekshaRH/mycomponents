import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  clearable?: boolean;
  onClear?: () => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({
    value,
    onChange,
    label,
    placeholder,
    helperText,
    errorMessage,
    disabled = false,
    invalid = false,
    variant = 'outlined',
    size = 'md',
    loading = false,
    clearable = false,
    onClear,
    type = 'text',
    className,
    id,
    ...props
  }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const hasError = invalid || !!errorMessage;
    const hasValue = value !== undefined && value !== '';
    
    // Size variants
    const sizeClasses = {
      sm: 'h-8 px-3 text-size-sm',
      md: 'h-10 px-4 text-size-base',
      lg: 'h-12 px-4 text-size-lg'
    };
    
    const labelSizeClasses = {
      sm: 'text-size-xs',
      md: 'text-size-sm',
      lg: 'text-size-base'
    };
    
    // Variant classes
    const variantClasses = {
      filled: hasError ? 'input-filled input-invalid' : 'input-filled',
      outlined: hasError ? 'input-outlined input-invalid' : 'input-outlined',
      ghost: hasError ? 'input-ghost input-invalid' : 'input-ghost'
    };
    
    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    
    const handleClear = () => {
      if (onClear) {
        onClear();
      }
    };

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block font-medium text-on-surface mb-2',
              labelSizeClasses[size],
              disabled && 'component-disabled'
            )}
          >
            {label}
          </label>
        )}
        
        {/* Input Container */}
        <div className="relative">
          <input
            ref={ref}
            id={inputId}
            type={inputType}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled || loading}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className={cn(
              'w-full rounded-radius transition-all duration-200 ease-in-out',
              'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-ring-offset',
              sizeClasses[size],
              variantClasses[variant],
              disabled && 'component-disabled bg-input-disabled',
              loading && 'pr-10',
              (clearable && hasValue && !loading) && 'pr-10',
              (isPassword) && 'pr-10',
              (clearable && hasValue && isPassword) && 'pr-16',
              className
            )}
            {...props}
          />
          
          {/* Loading Spinner */}
          {loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Loader2 className="h-4 w-4 animate-spin text-on-surface-variant" />
            </div>
          )}
          
          {/* Clear Button */}
          {clearable && hasValue && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className={cn(
                'absolute top-1/2 transform -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors',
                isPassword ? 'right-10' : 'right-3'
              )}
              disabled={disabled}
            >
              <X className="h-4 w-4" />
            </button>
          )}
          
          {/* Password Toggle */}
          {isPassword && !loading && (
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors"
              disabled={disabled}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        
        {/* Helper Text / Error Message */}
        {(helperText || errorMessage) && (
          <p
            className={cn(
              'mt-2 text-size-sm',
              hasError ? 'text-error' : 'text-on-surface-variant',
              disabled && 'component-disabled'
            )}
          >
            {errorMessage || helperText}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
export type { InputFieldProps };