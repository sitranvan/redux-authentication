import { Button } from '@mui/material'
import './styles.scss'
function Counter({ count, onIncrease, onDecrease }) {
    return (
        <div className="counter">
            <h2>{count}</h2>
            <Button className='button-click' variant='contained' color='secondary' onClick={onIncrease}>Increase</Button>
            <Button className='button-click' variant='contained' color='secondary' onClick={onDecrease}>Decrease</Button>
        </div>
    )
}

export default Counter