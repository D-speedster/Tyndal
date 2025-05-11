import Header from "../Home/Header/Header"
import Footer from '../Home/Footer/Footer';
import './index.css';
import { Button, Col, Container, Row } from "react-bootstrap";

export default function Websites() {

    return <div>
        <Header></Header>
        <div className="Web-Header">
            <Container>
                <Row>
                    <Col className="web-Header-text">
                        <h1>ایده شما مهم است
                            <br />
                            یک وبسایت بسازید
                        </h1>
                        <Button>شروع کنید</Button>
                    </Col>
                    <Col className="web-Header-woman">
                        <img src="img/woman.jpg" />

                    </Col>
                    <Col className="web-Header-site">
                        <img src="/img/site.jpg" />

                    </Col>
                </Row>


            </Container>
        </div>


        <Footer></Footer>
    </div>

}