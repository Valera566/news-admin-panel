function PublickPage({ news }) {
    const visible = news.filter((item) => !item.hidden)

    return (
        <section className="page admin">
            <h1>Новости</h1>
            <ul className="news-list">
            {visible.length === 0 && <li>Новостей нет</li>}

            {visible.map((item) => (
                <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>   
                </li>
            ))}
            </ul>
        </section>
    )

}

export default PublickPage