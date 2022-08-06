type ButtonProps = {
    text?: string;
    width?: string;
    height?: string;
    radius?: string;
    border?: string;
    color?: string;
    bgColor?:string;
    className?: string;
    padding?: string;
}

export function Button(props: ButtonProps){
    return(
        <button className={props.className} 
        style={{
            width: props.width ? props.width : '100%',
            height: props.height ? props.height : '50px',
            borderRadius: props.radius ? props.radius : '4px',
            border: props.border ? props.border : 'none',
            color: props.color,
            backgroundColor: props.bgColor ? props.bgColor : '#FFC700',
            padding: props.padding
        }}>
            {props.text}
        </button>
    );
}

