import { useEffect, useState } from "react";
import { allCountries, postActivity } from "../../redux/action";
import styles from "./form.module.css"
import Validate from "./validation";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {

    const dispatch = useDispatch();

    const countries = useSelector((state) => state.countries);
    const sortedCountries = countries?.sort((a, b) => a.name.localeCompare(b.name));

    const [activity,setActivity] = useState({
        countries: "",
        name: "",
        difficulty: "",
        duration: "",
        season: ""
    })

    const [errors, setErrors] = useState({});

    const handleName = (event)=>{
        setActivity({...activity, [event.target.name]: event.target.value})
        setErrors(Validate({...activity, [event.target.name]: event.target.value}))
    }

    const handleDifficulty = (difficulty)=>{
        setActivity({...activity, [difficulty.target.name] : difficulty.target.value})
    }

    const handleDuration = (duration)=>{
        setActivity({...activity, [duration.target.name] : duration.target.value})
        setErrors(Validate({...activity, [duration.target.name]: duration.target.value}))
    }

    const handleSeason = (season) =>{
        setActivity({...activity, [season.target.name] : season.target.value})
        setErrors(Validate({...activity, [season.target.name] : season.target.value}))
    }
    

    const handleSubmit = (event)=>{
        event.preventDefault()
        if (activity.name || activity.duration || activity.countries || activity.difficulty || activity.season){
        dispatch(postActivity(activity))
        setActivity({
            name : "",
            difficulty : "",
            duration : "",
            season : "",
            countries : ""
        })
        }
    }

    useEffect(()=>{
        dispatch(allCountries());
    },[activity.countries])
    

    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.selectedCountries}>
            <label htmlFor="" className={styles.activityName}>
              Countries:
            </label>
            <div className={styles.eachCountry}>
                <select required className={styles.writeName} name="countries" onChange={(event) => setActivity({ ...activity, countries: event.target.value })}>
                    <option value="">Select a country</option>
                        {sortedCountries?.map((countries, key) => (
                    <option key={key} value={countries.name}>
                        {countries.name}
                    </option>
                ))}
                </select>
            </div>
            </div>
            {/* <p>{errors.country}</p> */}
            <div className={styles.activityContainer}>
                <label htmlFor="name" className={styles.activityName}>Activity: </label>
                <input type="text" required autoComplete="off" value={activity.name} onChange={handleName} name="name" className={styles.writeName} style={{ height: "18px" , width: "160px"}} />
            </div>
                <p>{errors.name}</p>
            <div className={styles.difficultyContainer}>
                <label htmlFor="difficulty" className={styles.activityName} >Difficulty: </label>
                <input type="range" style={{ width: "170px" }} min={1} max={5} value={activity.difficulty} onChange={handleDifficulty} required name="difficulty" />
                <span className={styles.activityName} style={{ fontSize: "0.8rem" }}>Nivel: {activity.difficulty}</span>
            </div>
            {/* <p>{errors.difficulty}</p> */}
            <div className={styles.durationContainer}>
                <label htmlFor="duration" className={styles.activityName} >Duration: </label>
                <input type="number" min={1} max={24} value={activity.duration} onChange={handleDuration} required className={styles.duration} name="duration" />
            </div>
            <p>{errors.duration}</p>
            <div>
                <label htmlFor="season" className={styles.activityName}>Season: </label>
                <select name="season" onChange={handleSeason} required className={styles.writeName} value={activity.season} >
                    <option value= "0" >Select season</option>
                    <option value="Summer">Summer</option>
                    <option value="Autumn">Autumn</option>
                    <option value="Winter">Winter</option>
                    <option value="Spring">Spring</option>
                </select>
            </div>
            <p>{errors.season}</p>
            <div>
                <button className={styles.createActivity}  >
                    ¡Create Activity!
                </button>
            </div>
        </form>
        </div>
    )
}
export default Form;