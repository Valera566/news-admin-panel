import { Link } from "react-router-dom"
import NewsForm from "../components/NewsForm"

function AdminPanel({ news, handleAdd, handleDelete, handleToggleHidden }) {
 

    return (
        <section className='page admin'>
            <h1>Админ-панель</h1>

            <NewsForm handleAdd={handleAdd}/>

            <h2>Список новостей</h2>

            <ul className="news-list">
                {news.length === 0 && <li>Новостей нет</li>}

                {news.map((item) => (
                    <li key={item.id} className={`news-item ${item.hidden ? 'muted' : ''}`}>
                        <div className="news-header ">
                            <strong>{item.title}</strong>
                            {item.hidden && <span>Скрыта</span>}
                        </div>

                        <p>{item.description}</p>

                        <div className="actions">
                            <button onClick={() => handleToggleHidden(item.id)}>
                                {item.hidden ? "Показать" : "Скрыть"}
                            </button>

                            <button onClick={() => handleDelete(item.id)}>
                                Удалить
                            </button>

                        </div>
                    </li>
                ))}
            </ul>

        </section>
    )
}

export default AdminPanel