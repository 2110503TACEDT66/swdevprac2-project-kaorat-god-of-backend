<<<<<<< HEAD
import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Link title='Signin' href='signin'></Link>
      </div>
      
=======
import Banner from '@/components/Banner'
import PromoteCard from '@/components/PromoteCard'

export default function Home() {
  return (
    <main>
      <Banner/>
      <PromoteCard/>
>>>>>>> aui
    </main>
  )
}
