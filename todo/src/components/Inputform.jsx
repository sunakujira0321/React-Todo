import React, {useState } from 'react'


export const Inputform =({taskList,setTaskList}) => {
    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        // フォーム送信時にページ遷移を防ぐ
        e.preventDefault()
        // タスクを追加する
        setTaskList([
            ...taskList, 
            {
                id:taskList.length,
                text:inputText,
                completed:false
            }
        ])
        // 入力し文字を空にする
        setInputText("")
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
    }

    return (
    <div className="inputForm">
        <form onSubmit={handleSubmit} >
            <input type = "text" onChange={handleChange} value={inputText} />
            <button>
                <i class="fa-solid fa-plus"></i>
            </button>
        </form>
    </div>
    )
}
