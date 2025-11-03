import styles from './Loading.module.css'
import Logo from '../../assets/Logo.svg'
import { useEffect, useState } from 'react'

const Loading = ()=>{
    const dots = ['','.','..','...']
    const [dot, setDot] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setDot(prev => (prev + 1) % dots.length) 
        }, 500) 

        return () => clearInterval(interval) 
    }, [])

    return (
        <div className={styles.body}>
            <div><img className={styles.icon} src={Logo} /></div>
            <div className={styles.text}><p>Loading{dots[dot]}</p></div>
        </div>
    )
}

export default Loading
