import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import {  CountryById } from "../../redux/action";
import styles from "./detail.module.css"

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const countryById = useSelector((state) => state.CountryById);

    let [detailState, setDetailState] = useState("");
    
    useEffect(()=>{
        dispatch(CountryById(id));
    }, [detailState])

    return(
        <div className={styles.container}>
            <div className={styles.detail}>
                <h1>{countryById?.name}</h1>
                <h2>ID: {countryById?.id}</h2>
                <h3>Continent: {countryById?.continent}</h3>
                <h3>Capital: {countryById?.capital}</h3>
                <h3>Sub-region: {countryById?.subregion}</h3>
                <h3>Area: {countryById?.area}</h3>
                <h3>Population: {countryById?.population}</h3>
                <img src={countryById?.image} style={{ width: "170px", borderRadius: "20px", cursor: "pointer" }} alt="" />
            </div>
            <div className={styles.activities}> 
                <h2 className={styles.activitiesTitle} >Activities</h2>
                {countryById?.activitiesCountry && countryById?.activitiesCountry.map((activity)=>{
                    return(
                        <div className={styles.eachActivity} key={activity?.id}> 
                        <h4>{activity?.name}</h4>
                        <h5>Difficulty: {activity?.difficulty}</h5>
                        <h5>Duration: {activity?.duration}</h5>
                        <h5>Season: {activity?.season}</h5>
                        </div>
                    )
                })}
            </div>
       
        </div>
    
    )
} 

export default Detail