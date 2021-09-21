import styles from '../../css-modules/Footer.module.css'
import github from '../../assets/img/GitHub-Mark-32px.png'
import linkedin from '../../assets/img/LI-In-Bug.png'

function Footer() {

    return (
        <div className={styles.footer}>
            <div className={styles.personDiv}>
                <p>Esther Kang</p>
                    &nbsp;
                    <img className={styles.icon} src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/estherhrkang/")}/>
                    &nbsp;
                    <img className={styles.icon} src={github} alt='GitHub' onClick={()=> window.open("https://github.com/estherhrkang")}/>
            </div>
            <div>
                <p>Jimson Ma</p>
                    &nbsp;
                    <img className={styles.icon} src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/jimson-ma-462197213/")}/>
                    &nbsp;
                    <img className={styles.icon} src={github} alt='GitHub' onClick={()=> window.open("https://github.com/jimsonm")}/>
            </div>
            <div>
                <p>Richard Supe</p>
                    &nbsp;
                    <img className={styles.icon} src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/richard-supe/")}/>
                    &nbsp;
                    <img className={styles.icon} src={github} alt='GitHub' onClick={()=> window.open("https://github.com/Rich-Supe")}/>
            </div>
            <div>
                <p>Victoria Tarane</p>
                    &nbsp;
                    <img className={styles.icon} src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/victoria-tarane-54a86b5b/")}/>
                    &nbsp;
                    <img className={styles.icon} src={github} alt='GitHub' onClick={()=> window.open("https://github.com/victoriatarane")}/>
            </div>
        </div>
    )
}

export default Footer;