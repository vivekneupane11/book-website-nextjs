"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from "../app/header.module.css"

export default function Header({onChange}: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
  return (
   <header className={styles.headerStyle}>
    <motion.div className={styles.leftContainerStyle}
    transition={{type:'spring',damping:18,mass:0.75}}
    initial={{opacity:0,x:-1000}} animate={{opacity:1,x:0}}
>
    <h1 className={styles.bookTitleStyle}>Book App</h1>
        <motion.input  type="text" placeholder='Tell me what you like to read and we will get that ....'
        onChange={onChange}
        className={styles.searchInputStyle}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        />

     
    </motion.div>

    <motion.div className={styles.rightContainerStyle} 
    transition={{type:'spring',damping:18,mass:0.75}}
    initial={{opacity:0,x:1000}} animate={{opacity:1,x:0}}
    >
<Link href="/profile" >
    <motion.img src="https://imageio.forbes.com/specials-images/imageserve/6244c655b6ecfb569a31a3ba/John-Cena-performing-his-famous--You-Can-t-See-Me--taunt-/0x0.jpg?format=jpg&crop=1200,675,x0,y0,safe&width=960" alt="avatar" className={styles.avatarStyle} initial={{opacity:0,x:100}} animate={{opacity:1,x:0}}  />

   
</Link>

    </motion.div>
   </header>
  )
}


