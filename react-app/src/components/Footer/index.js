import styles from '../../css-modules/Footer.module.css'
import github from '../../assets/img/GitHub-Mark-32px.png'
import linkedin from '../../assets/img/LI-In-Bug.png'

function Footer() {

    return (
        <h3 className={styles.footer}>
            Created by 
                Esther Kang
                    &nbsp;
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/estherhrkang/")}/>
                    &nbsp;
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/estherhrkang")}/>,
                Jimson Ma
                    &nbsp;
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/jimson-ma-462197213/")}/>
                    &nbsp;
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/jimsonm")}/>,
                Richard Supe
                    &nbsp;
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/richard-supe/")}/>
                    &nbsp;
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/Rich-Supe")}/>,
                Victoria Tarane 
                    &nbsp;
                    <img src={linkedin} alt='LinkedIn' onClick={()=> window.open("https://www.linkedin.com/in/victoria-tarane-54a86b5b/")}/>
                    &nbsp;
                    <img src={github} alt='GitHub' onClick={()=> window.open("https://github.com/victoriatarane")}/>
        </h3>
    )
}

export default Footer;