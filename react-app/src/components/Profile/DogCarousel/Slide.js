
import styles from '../../../css-modules/Slide.module.css'
import DogProfileModal from '../DogProfile';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Slide({ dog }) {

    return (
        <div className={styles.slide}>
            <div className={styles.dogImage}>
                {/* <img src={dog.image} alt={dog.name} /> */}
                {/* <p>{dog.name}</p> */}
                <div>
                    <DogProfileModal dog={dog}/>
                </div>
            </div>
        </div>
    )
}

export default Slide;