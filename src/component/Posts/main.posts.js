import React from "react";
import { Container } from "react-bootstrap"
import Collections from "./collections.posts";

const Posts = () => {
    return (
        <React.Fragment>
            <Container className="mt-2">
                <Collections />
            </Container>
        </React.Fragment>
    )
    
}

export default Posts;