import { useRef } from "react"

export const EachTD = ({ color, code }) => {
    const ref = useRef();
    const onClick = () => {
        alert(ref.current.style.background);
        // window.CopyToClipboard(ref.current.style.background)
    }
    return <div ref={ref} onClick={onClick} style={{ background: color, border:` 4px solid ${color}` }} className="rowBox">{code}</div>


}