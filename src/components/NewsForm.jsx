import { useRef, useState } from "react"

function NewsForm({ handleAdd }) {
    const titleRef = useRef()
    const descriptionRef = useRef()

   

    const handleSubmit = (e) => {
        e.preventDefault()

        const title = titleRef.current.value
        const description = descriptionRef.current.value

        if(!title || !description) return
        handleAdd({
            id: Date.now().toString(),
            title,
            description,
            hidden: false
        })
        
        titleRef.current.value = ''
        descriptionRef.current.value = ''
    }

    return (
        <form className="news-form" onSubmit={handleSubmit}>
            <label>
                Заголовок
                <input type="text" ref={titleRef} />
            </label>

            <label>
                Описание
                <input type="text" ref={descriptionRef}/>
            </label>

            <button type="submit" >
                Добавить новость
            </button>
        </form>
    )
}

export default NewsForm