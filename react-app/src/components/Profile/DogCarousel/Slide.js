
import styles from '../../../css-modules/Slide.module.css'
import DogProfileModal from '../DogProfile';

function Slide({dog}){
    // console.log(`Dog from dog slide`, dog)


    return (
        <div className="slide">
            <div className="dog-image">
                {/* <img src={dog.image} alt={dog.name} /> */}
                <p>{dog.name}</p>
                <DogProfileModal dog={dog}/>
            </div>
        </div>
    )
}

export default Slide;