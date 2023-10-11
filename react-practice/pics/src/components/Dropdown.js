function Dropdown({ options }) {

    const listOptions = options.map((item) => {
        return (<option>{item}</option>)
    })

    return (
        <div>
            <select>
                {listOptions}
            </select>
        </div>
    )
}
export default Dropdown