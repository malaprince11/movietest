import React from 'react';
import { Card } from 'react-bootstrap';


export const List = ({ movies, click }) => {
    return (
        <div >
            <div className="movie-list">
                {
                    movies.map((user, i) => {
                        return (
                            <div>

                            <Card.Body key={i} className="movies">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Title className="title">{user.title}</Card.Title>
                                </Card>
                            </Card.Body>
                            </div>
                        );
                    })
                }
                <div>

                <Card.Link onClick={click} className="btn">More...</Card.Link>
                </div>
            </div>


        </div>

    );
}