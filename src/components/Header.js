// import classes from './Header.module.css'
import Link from 'next/link';
import styles from './Header.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

const Header = () => {
	const router = useRouter();

	const [username, setUsername] = useState('');

	useEffect(() => {
		const username = localStorage.getItem('username')
		setUsername(username)
	}, [])

	const imageUrl = `https://github.com/${username}.png`

	const handleLogout = () => {
		router.push('/logout')
	}
	
	return (
		<>
			<nav className={styles.wrapper}>
			<div>{' '}</div>
			<h1 className={styles.title}>Gabriel WEBCHAT</h1>
				{username && username !== '' ? (
					<>
						<div className={styles.profileWrapper}>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
								<div className={styles.imageWrapper}>
									<img className={styles.loginImage} src={imageUrl} alt="Teste" />
								</div>
								<p>{username}</p>					
								<button onClick={handleLogout}>LOGOUT</button>
							</div>
						</div>
					</>
				) : (
					<div>
						<Link href="/login"><button>login</button></Link>
					</div>
				)}
			</nav>
		</>
	)
}

export default Header