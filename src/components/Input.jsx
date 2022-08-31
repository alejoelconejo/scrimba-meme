const Input = ({ placeholder, onChange, value, name }) => {
  return (
    <>
      <input
        className="font-sans text-lg text-slate-800 flex-1 rounded p-2 border-gray-300 border-2 dark:border-transparent"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        type="text"
      />
    </>
  )
}

export default Input
