interface Props {
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value: string
  name: string
}

const Input = ({ placeholder, onChange, value, name }: Props) => {
  return (
    <>
      <input
        className='flex flex-1 font-sans text-lg text-slate-800 rounded p-2 border-gray-300 border-2 dark:border-transparent w-3/4 md:w-4/5'
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        type='text'
      />
    </>
  )
}

export default Input
