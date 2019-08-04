import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-content">
                    <p>Enhance Your Mapping with <strong>Mapping Tools</strong>, a program that has a bunch of cool mapping tools all in one place!</p>
                    <ul>
                        <li><strong>Map Cleaner</strong> cleans greenline usage, resnaps greenlines, hitobjects, bookmarks and more</li>
                        <li><strong>Property Transformer</strong>transforms various properties of objects in a way the editor doesn't let you</li>
                        <li><strong>Slider Merger</strong> merges multiple sliders into one big slider regardless of path type</li>
                        <li><strong>Slider Completionator</strong> changes duration and pixel length of one or more sliders</li>
                        <li><strong>Timing Helper</strong> helps you fix timing on off-beat sounds</li>
                        <li><strong>Hitsound Copier</strong> copies hitsounds from A to B with a lot of extra options</li>
                        <li><strong>Hitsound Studio</strong> lets you make osu! std hitsounds in a completely new way</li>
                        <li><strong>Hitsound Preview Helper</strong> places hitsounds on objects based on their position</li>
                        <li>... and many more to come!</li>
                    </ul>
                </div>
            </div>
            /*
            <Container fluid="true" className="col home-default">
                <Row className="justify-content-md-center">
                    <Col md="auto" className="header-col">
                        <Jumbotron className="heading" fluid>
                            <Container fluid="true" className="heading-container">
                                <h1>Enhance Your Mapping!</h1>
                                <ul>
                                    <li>Clean your map from excess code</li>
                                    <li>Merge multiple sliders into one</li>
                                    <li>Set up and structure projects for your map</li>
                                    <li>Easily add multi-layered hitsounding</li>
                                    <li>Copy hitsounds between maps</li>
                                    <li>And much more ...</li>
                                </ul>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
            */
        );
    }
}

export default Home;