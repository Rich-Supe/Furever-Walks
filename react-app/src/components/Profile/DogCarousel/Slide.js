
import styles from '../../../css-modules/Slide.module.css'

function Slide({dog}){
    console.log(`Dog from dog slide`, dog)

    return (
        <div className="slide">
            <div className="dog-image">
                {/* <img src={dog.image} alt={dog.name} /> */}
                <p>{dog.name}</p>
            </div>
        </div>
    )
}

export default Slide;