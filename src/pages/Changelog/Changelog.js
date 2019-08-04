import React, { Component } from 'react';
import "./Changelog.css";
import ReactHtmlParser from 'react-html-parser';

import { Accordion, Card } from "react-bootstrap";

class Changelog extends Component {
    constructor() {
        super();

        this.state = {
            data: null
        }
    }

    async componentDidMount() {
        const res = await fetch("https://mappingtools.seira.moe/changelog/logs", {
            method: "POST"
        });

        const data = await res.json();

        this.setState((state) => {
            return { data: data }
        });
    }

    render() {
        return (
            <div className="changelog">
                <Accordion className="changelog-accordion" defaultActiveKey="0">
                    {this.state.data ?
                        this.state.data.map((element, index) => {
                            const html_text = element.text;
                            return (
                                <Card bg={element.type} text="white" className="changelog-card">
                                    <Card.Header className="changelog-card-header">
                                        <Accordion.Toggle as={Card.Header} eventKey={index}>
                                            {element.title} <span className="changelog-card-header-date">at {new Date(element.date).toLocaleDateString()}</span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={index}>
                                        <Card.Body className="changelog-card-body">
                                            <p>{ReactHtmlParser(html_text)}</p>
                                            <p>by {element.author}</p>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            )
                        })

                        :

                        <h2>Loading...</h2>
                    }
                </Accordion>
            </div>
        );
    }
}

export default Changelog;