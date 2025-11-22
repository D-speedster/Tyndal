import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { WEBSITES_CONTENT } from '../../constants/content';
import Header from "../Home/Header";
import { Footer } from '../Home/components';
import './index.css';

export default function Websites() {
    const { title, subtitle, buttonText } = WEBSITES_CONTENT.hero;
    
    return (
        <div>
            <Header />
            <div className="web-header">
                <Container>
                    <Row>
                        <Col className="web-header-text">
                            <h1>
                                {title}
                                <br />
                                {subtitle}
                            </h1>
                            <Button>{buttonText}</Button>
                        </Col>
                        <Col className="web-header-woman">
                            <img src="img/woman.jpg" alt="Woman" />
                        </Col>
                        <Col className="web-header-site">
                            <img src="/img/site.jpg" alt="Website" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
}