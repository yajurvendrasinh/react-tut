function Accordion( { id, header, copy } ) {
    return (
        <div key={id}>
            <h2>{header}</h2>
            <p>{copy}</p>
        </div>
    )
}

export default Accordion;