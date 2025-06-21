import style from "./Header.module.css"
import logo from "../../assets/logo.jpg"
export const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.titleContainer}>
                <img src={logo} alt="Logo" width={100} height={100} style={{borderRadius: 12}}/>
                <div>
                    <h1>Piorize</h1>
                    <div className="color-gray">
                        <code>Éliminez le chaos et priorisé !</code>
                    </div>
                </div>
            </div>
            <code className={"color-primary"}>v.1.0</code>
        </div>
    )
}