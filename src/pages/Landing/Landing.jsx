import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>{user ? user.name : `Welcome to TBD the web app that helps you and your squad decide what to do, because indecision happens. Whether it's a movie night, game night, or video games with your friends sometime we all just need a little help.`}</h1>
    </main>
  )
}

export default Landing
