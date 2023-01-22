const Input = ({ icon, placeholder, type, children, id }) => {
  return (
    <div className="flex flex-col gap-4">
      <label className="text-3xl ml-2">{children}</label>
      <div className="flex rounded-xl bg-neutral-700 placeholder-neutral-100 pl-2 mx-2 items-center">
        {icon}
        <input
          className="bg-neutral-700 placeholder-neutral-100 p-2 h-full w-full rounded-xl outline-none"
          placeholder={placeholder}
          type={type}
          id={id}
        />
      </div>
    </div>
  );
};

export default Input;
