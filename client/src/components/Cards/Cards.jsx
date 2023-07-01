import { useSelector } from "react-redux";
import Card from "../Card/Card"
import styles from "./Cards.module.css"


const Cards = ({CountriesToFilt}) => {
  
  const allCountriesByName = useSelector((state) => state.AllCountriesByName);

  let countriesFilter = []

  if(allCountriesByName.length){
    countriesFilter = allCountriesByName
  } else {
    countriesFilter = CountriesToFilt
  }



  return (
    <div className={styles.cards}>
      {
      countriesFilter && countriesFilter?.map((country) => {
        return(
            <Card 
              key={country.id}
              name={country.name} 
              id={country.id}
              image={country.image}
              continent={country.continent}
              capital = {country.capital}
              subregion = {country.subregion}
              area = {country.area}
              population={country.population}
            />
        )
        })}
    </div>
  )
}





export default Cards;