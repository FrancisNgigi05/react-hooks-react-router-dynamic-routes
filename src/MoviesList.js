import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MoviesList({movies}) {
    const renderMovies = movies.map((movie) => {
        return (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{movies.title}</Link>
            </li>
        )
    });
    return (
        <ul>
            {renderMovies}
        </ul>
    )
}

export default MoviesList;