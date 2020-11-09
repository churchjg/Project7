import React from 'react'
import { Link } from 'react-router-dom'

function Homepage(props) {
    let mealList = props.meal.map((data) => {

        return (
                <div className="homepage-meal-image" style={{ backgroundImage: `url${data.image}` }}>
                <Link classname="get-started" to={`/meal/${data.id}`} onClick={() => props.fetchMeal(data.id, data.name, data.image, data.category, data.tags, data.instructions, data.area, data.video, data.url)}>Click Here to get started.
                <h3 className="homepage-meal-title" >{data.name}</h3>
                </Link>

            </div>
        )
    })
    console.log(mealList)
}

export default Homepage