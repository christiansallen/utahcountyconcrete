export default function Button({ children, variant = "primary", icon, className = "", ...rest }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[14px] font-semibold w-full cursor-pointer transition-opacity hover:opacity-90 bg-black text-white ${className}`}
      {...rest}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </button>
  );
}
