export const Input = ({ placeholder, type, children, id }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-lg">{children}</label>
      <input
        className="rounded-md bg-[#eee] p-[16px] text-[#403F44] placeholder-[#403F44] outline-[#000]"
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
  );
};
