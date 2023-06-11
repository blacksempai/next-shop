interface TimeData {
    datetime: string 
}

interface Todo {
    title: string
}

export default async function Products() {
    const res = await fetch('http://worldtimeapi.org/api/timezone/Europe/Kyiv', {
        next: {
            revalidate: 5
        }
    });
    const data: TimeData = await res.json();

    const res2 = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[] = await res2.json();

    return (
        <>
            <h1>Product</h1>
            <p>Current time: {data.datetime}</p>
            {todos.map(t => <p key={t.title}>{t.title}</p>)}
        </>
    )
}