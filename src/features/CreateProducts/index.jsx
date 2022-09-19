import { useEffect, useState } from 'react'
import productAPI from '../../api/productAPI'
import CreateList from './components/CreateList'

function CreateListFeature() {
    const [createList, setCreateList] = useState([])
    useEffect(() => {
        const fetchProductCreate = async () => {
            const data = await productAPI.getAll({
                _limit: 5
            })
            setCreateList(data)
        }
        fetchProductCreate()
    }, [])
    return (
        <div style={{ textAlign: 'center', marginTop: 80 }}>
            <h2 style={{ marginBottom: 20 }}>Create At Products</h2>
            <CreateList createList={createList} />
        </div>
    )
}

export default CreateListFeature