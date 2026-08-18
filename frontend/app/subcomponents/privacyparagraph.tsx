type PrivacyParagraphProps = {
    text: string;
}

export default function PrivacyParagraph({ text }:PrivacyParagraphProps) {
    return (
        <p
            className="
                font-light
                tracking-tighter
            "
        >
            {text}
        </p>
    );
};