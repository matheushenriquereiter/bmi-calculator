export const Button = ({ onClick, type, name, backgroundColor }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="h-[48px] w-full rounded-md text-2xl"
      style={{ backgroundColor: backgroundColor }}
    >
      {name}
    </button>
  );
};
