export const Button = ({ onClick, type, name, backgroundColor }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="transition-duration h-[48px] w-full rounded-md text-2xl hover:scale-105"
      style={{ backgroundColor: backgroundColor }}
    >
      {name}
    </button>
  );
};
