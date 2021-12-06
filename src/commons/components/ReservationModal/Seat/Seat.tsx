import React, {useState,useCallback} from 'react';

interface Props {
    number:number
    onClick: (uid: number, action: 'select' | 'remove') => void
}

export default ({number, onClick}:Props) => {
    const [selected, setSelected] = useState(false)

    const handleClick = useCallback(() => {
        setSelected(!selected)
            onClick(number, selected? 'remove' : 'select')
    }, [selected])

    // @ts-ignore
    return <div style={{width: 40, height: 40, margin: 2, border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: selected? '#aa00ff':'white'}} onClick={handleClick}><p>{number}</p></div>
}