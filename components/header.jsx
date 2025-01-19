import styles from './header.module.css'
import Image from 'next/image'

function Header() {
    return(
        <div>
            <Image className={styles.image} src="/logo.jpg" width={100} height={100} alt="logo"/>
            <p className={styles.title}>edu.ai</p>
        </div>
    );
}

export default Header;