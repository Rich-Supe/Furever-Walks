
import styles from '../../../css-modules/Slide.module.css'
import DogProfileModal from '../DogProfile';
import { useState } from 'react';

function Slide({ dog }) {
    const [showModal, setShowModal] = useState(false);
    // console.log(`Dog from dog slide`, dog)


    return (
        <div className="slide">
            <div className="dog-image">
                {/* <img src={dog.image} alt={dog.name} /> */}
                {/* <p>{dog.name}</p> */}
                <p>
                    <DogProfileModal dog={dog} setShowModal={setShowModal} showModal={showModal}/>
                </p>
            </div>
        </div>
    )
}

export default Slide;