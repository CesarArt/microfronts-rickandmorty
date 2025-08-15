interface ButtonProps {
    text?: string;
    children?: React.ReactNode;
    className?: string;
    disabled?:boolean
    select?:boolean
    action: () => void;
}

export default function Button(props:ButtonProps) {

  return (
    <div className={`${props.className ?? "rounded-full p-2 cursor-pointer" } ${props.disabled ? "text-zinc-400 bg-zinc-300 pointer-events-none":""} ${ props.select ? "bg-sky-700":"bg-slate-800"}  text-white hover:bg-cyan-700 `} onClick={props.action}>
        {props.text}
        {props.children}
    </div>
  )
}
