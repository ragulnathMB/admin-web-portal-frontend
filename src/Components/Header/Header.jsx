import styles from './Header.module.css';
import Logo from '../../assets/Logo.svg'
import profileIcon from '../../assets/profile_icon.svg'
import unifiedLogo from '../../assets/unified_logo.svg'
import horizontal_bg from '../../assets/horizontal_bg.png'

const Header = ()=>{

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headerContainer}>
                <div className={styles.logoContainer}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.titleContainer}>
                    <img src={unifiedLogo} alt='Unified Dynamic 365'/>
                </div>
            </div>
            <div className={styles.leftContainer}>
                <div className={styles.profileContainer}>
                    <img src={profileIcon} alt="profile_icon"/>
                </div>
            </div>
            <img src={horizontal_bg} className={styles.horizontal_bg} />
        </div>
    );
}
export default Header;