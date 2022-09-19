import './styles.scss'

function CreateList({ createList }) {
    return (
        <ul className="create-list">
            {createList.map(create => (
                <li key={create.id}>{create.created_at}</li>
            ))}
        </ul>
    )
}

export default CreateList