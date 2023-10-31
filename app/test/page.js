import styles from '../page.module.css'
import CreateUserForm from 'component/CreateUserForm'
import Login from 'component/LoginForm'


export default function Home() {
  return (
    <main className={styles.main}>
        test페이지
      <CreateUserForm/>
      <Login/>
    </main>
  )
}