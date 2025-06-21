import style from "./Input.module.css"
import {useState} from "react";
export const Input = ({addTask}) => {

    const [title, setTitle] = useState("")
    const handleInputChange = (e) => {
        setTitle(e.currentTarget.value)
        console.log("heeelloooo")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim()) {
            addTask(title)
            console.log(title)
            setTitle("")
        }
    }

    return(
        <div className={`box ${style.element}`}>
            <h2 className={style.title}>&#127919; Ajoute ta prochaine tâche</h2>
            <form className={style.formContainer} onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    type="text"
                    className={style.input}
                    placeholder={"Indiquer un titre de tâche explicite"}
                    value={title}
                />
                <button className={"button-primary"} type={"submit"}>
                    Ajouter
                </button>
            </form>
        </div>
    )
}