import React from "react";

export function HeaderText() {
    return (
        <div>
            <h1>Header 1</h1>
            <h2>Header 2</h2>
            <h3>Header 3</h3>
            <h4>Header 4</h4>
            <h5>Header 5</h5>
        </div>
    )
}

export function BodyText(props) {
    return (
        <div>
            <p>
                Nullam quis risus eget urna mollis ornare vel eu leo.{" "}
                <a href="/#" style={{ color: props.color }}>Cum sociis natoque penatibus</a> et magnis dis
                parturient montes, nascetur ridiculus mus. Nullam id dolor id
                nibh ultricies vehicula.
            </p>
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Veritatis, tempora similique!</li>
                <li>Hic, itaque molestias.</li>
            </ul>
        </div>
    )
}

export function TextColor(props) {
    return (
        <p
            key={props.color}
            style={{ color: props.color}}
        >
            Nullam quis risus eget urna mollis ornare vel eu leo.
        </p>
    )
}

export function TextStyle() {
    return (
        <div>
            <p className="fw-bold">
                This is a bold text
            </p>
            <small>
                This is a small/caption text
            </small>
        </div>
    )
}