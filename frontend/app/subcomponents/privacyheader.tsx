type HeaderPropType = {
    text: string;
}

export default function Header3({ text }:HeaderPropType) {

    return (
        <h3
            className="
                text-2xl
                text-white
                tracking-tighter
                font-normal
            "
        >
            {text}
        </h3>
    );
};