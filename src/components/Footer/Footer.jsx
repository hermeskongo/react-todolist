import style from "./Footer.module.css"

export const Footer = ({ completedTasks }) => {
    console.log(completedTasks)
    if(completedTasks) {
        return (
            <div className={`color-gray ${style.text}`}>
                <code>Avec Priorize, tu as fini <span className="important">{completedTasks}</span> priorités</code>
            </div>
        )
    }
    return <></>
}