import styles from './header.module.css'
import Image from 'next/image'

function Header() {
    return(
        <div className={styles.header}>
            <Image className={styles.image} src="/logo.png" width={200} height={100} alt="logo"/>
        </div>
    );
}

export default Header;