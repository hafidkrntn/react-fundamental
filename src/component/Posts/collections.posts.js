import React, { useEffect, useState } from "react"
import axios from "axios"
import Loaders from "../Utilities/loaders"
import { ButtonGroup, Card, Container, Row, Col } from "react-bootstrap"


const Collections = () => {

  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isCancelled = false
    if (isCancelled === false)
      setLoading(true)
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`
      }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => 
      setLoading(false))

    // clean up render
    return () => { isCancelled = true }
  }, [limit])

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
  }

  if (loading) return <Loaders />

  return (
    <div>
      <p className="limit">
        Currently showing <bold>{limit}</bold>
      </p>
      {datas.map((post, i) => {
        return (
          <div>
          <Container>
            <Row> 
            <Col md={4} className="d-flex justify-content-center align-items-center m-2 sm-4">
              <Card key={i} className="">
                <Card.Header as="h5">{post.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </Row>
          </Container>
        </div>
        );
      })}
      <ButtonGroup className="d-flex justify-content-center align-items-center m-2">
        {limit > 1 ? (
          <button className="btn btn-danger" onClick={() => handleLimit("-")}>
            -
          </button>
        ) : (
          ""
        )}
        <button className="btn btn-primary" onClick={() => handleLimit("+")}>
          +
        </button>
      </ButtonGroup>
    </div>
  );
};

export default Collections;