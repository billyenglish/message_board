"use client";

type CreateListProps ={
    items: string;
    id: number;
    key: number | string;
}

export default function CreateList({
    items,
    id,
}:CreateListProps) {
    return (
        <ul
            className="
                flex
                flex-col
                gap-8
            "
        >
            <li
                key={id}
                className="
                    list-disc
                "
            >
                {items}
            </li>
        </ul>
    )
}