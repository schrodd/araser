import Svg from "../Svg"

export default function Social(){
    return (
        <div className="social">
            <a href="https://www.linkedin.com/company/araser-srl/" target="_blank" rel="noopener noreferrer"><Svg route="/svg/lin.svg"/></a>
            <a href="https://www.facebook.com/arasersrl/" target="_blank" rel="noopener noreferrer"><Svg route="/svg/fb.svg"/></a>
            <a href="https://www.instagram.com/arasersrl.co/" target="_blank" rel="noopener noreferrer"><Svg route="/svg/ig.svg"/></a>
            <a href="https://twitter.com/AraserSrl" target="_blank" rel="noopener noreferrer"><Svg route="/svg/tw.svg"/></a>
        </div>
    )
}