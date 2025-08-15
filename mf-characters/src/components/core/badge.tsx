

interface BadgeProps {
    text?: string;
    classNameAux?: string;
    action?: () => void;
}

export default function Badge(props: BadgeProps) {

    return (
            <div className={`${props.classNameAux ?? ""} px-2 py-1 text-xs font-medium rounded-2xl`}>
                {props.text}
            </div>
    )
}
