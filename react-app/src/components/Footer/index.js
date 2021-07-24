import styles from '../../css-modules/Footer.module.css'
import github from '../../assets/img/GitHub-Mark-32px.png'
import linkedin from '../../assets/img/LI-In-Bug.png'

function Footer() {

    return (
        <h3 className={styles.footer}>
            Created by 
                Esther Kang 
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/estherhrkang/")}/>
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/estherhrkang")}/>,
                Jimson Ma 
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/jimson-ma-462197213/")}/>
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/jimsonm")}/>,
                Richard Supe
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/richard-supe/")}/>
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/Rich-Supe")}/>,
                Victoria Tarane 
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/victoria-tarane-54a86b5b/")}/>
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/victoriatarane")}/>
        </h3>
    )
}

export default Footer;