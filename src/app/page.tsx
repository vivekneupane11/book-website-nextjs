"use client"
import BookCard from '@/components/BookCard'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import { motion } from 'framer-motion'
import { useFilters } from './hooks/setFilters'
import styles from './page.module.css'
export default function Home() {
  const { handleFilter, filteredBooks } = useFilters()

  return (
    <main className={styles.main}>
  <div>

    <Header  onChange={handleFilter}/>

      <div className={styles.containerStyle}>
    <section className={styles.content}>
<SideBar/>
    </section>

<div className={styles.grouper}>
  <h1 className={styles.title}>ALL BOOKS</h1>
  <ul className={styles.ulGroupStyle}>
    {
      filteredBooks.map((book,i)=>
        <motion.li 
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        transition={{type:'spring',damping:50,mass:0.75}}
        initial={{opacity:0,x:200*(i+1)}}
        animate={{opacity:1,x:0}}
        key={i}>
          <a href={`/book/${book.id}`} style={{textDecoration:'none'}} >
           <BookCard title={book.title} coverImage={book.image} description={book.description} />
          </a>
        </motion.li>
      )
    }
  </ul>
</div>

      </div>

  </div>
    </main>
  )
}


