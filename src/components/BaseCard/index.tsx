import './styles.css';

type BaseCardProps = {
    children?: React.ReactNode;
    className?: string;
}

export function BaseCard(props: BaseCardProps){
    return(
        <div className={`base-card ${props.className}`}>
            {props.children}
        </div>
    );
}