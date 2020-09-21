import React from 'react';
import { Card } from 'react-bootstrap';

export const Details = ({ movies, select, click }) => {
    return (
        <div>
            {
                movies.map((user, i) => {
                        return (
                            <div className="details">
                            <div>

                                <Card.Body>
                                    <Card style={{ width: '18rem' }}>
                                        <img className="img card-img-top" alt="img" src={"https://image.tmdb.org/t/p/original/" + user.poster_path}></img>
                                        <Card.Title className="title">{user.title}</Card.Title>
                                        <Card-text className="overview"><span className="bold">Note: </span>{user.vote_average}</Card-text>
                                        <Card-text className="overview"> <span className="bold">Popularity: </span> {user.popularity}</Card-text>
                                        <Card-text className="overview"><span className="bold">Description: </span>{user.overview}</Card-text>
                                    </Card>
                                </Card.Body>
                            </div>

                            </div>
                        );
                })
            }

        </div>
    );
}