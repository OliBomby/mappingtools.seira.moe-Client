import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./Downloads.css";

class Downloads extends Component {
    async downloadWinEXE() {
        const response = await fetch("/download/win/installer", {
            method: 'POST'
        });
        if (!response.ok) return;
        const data = await response.blob();
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = "mapping-tools.exe";
        a.click();
        window.URL.revokeObjectURL(url);
    }

    async downloadWinArchive() {
        const response = await fetch("/download/win/archive", {
            method: 'POST'
        });
        if (!response.ok) return;
        const data = await response.blob();
        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        let url = window.URL.createObjectURL(data);
        a.href = url;
        a.download = "mapping-tools.zip";
        a.click();
        window.URL.revokeObjectURL(url);
    }

    render() {
        return (
            <div className="dl-container">
                <div className="dl-content">
                    <Card className="dl-card" bg="dark" text="white">
                        <Card.Header><FontAwesomeIcon icon={["fab", "windows"]}></FontAwesomeIcon> Windows</Card.Header>
                        <Card.Body className="dl-title" onClick={this.downloadWinEXE}>
                            <Card.Title><FontAwesomeIcon icon={["fas", "download"]}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                        <Card.Body className="dl-title" onClick={this.downloadWinArchive}>
                            <Card.Title><FontAwesomeIcon icon={["fas", "file-archive"]}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className="dl-card" bg="dark" text="white">
                        <Card.Header><FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon> GitHub Source</Card.Header>
                        <Card.Body className="dl-title" onClick={() => window.location.href = "https://github.com/Potoofu/Mapping_Tools"}>
                            <Card.Title><FontAwesomeIcon icon={["fas", "code"]}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                        <Card.Body className="dl-title" onClick={() => window.location.href = "https://github.com/Potoofu/Mapping_Tools/archive/master.zip"}>
                            <Card.Title><FontAwesomeIcon icon={["fas", "file-archive"]}></FontAwesomeIcon></Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            /*
            <Container fluid="true" className="col dl">
                <Row className="justify-content-md-center">
                    <Col className="dl-col" xs={12} sm={6}>
                        <Card className="dl-card" bg="dark" text="white">
                            <Card.Header><FontAwesomeIcon icon={["fab", "windows"]}></FontAwesomeIcon> Windows</Card.Header>
                            <Card.Body className="dl-title" onClick={this.downloadWinEXE}>
                                <Card.Title><FontAwesomeIcon icon={["fas", "download"]}></FontAwesomeIcon></Card.Title>
                            </Card.Body>
                            <Card.Body className="dl-title" onClick={this.downloadWinArchive}>
                                <Card.Title><FontAwesomeIcon icon={["fas", "file-archive"]}></FontAwesomeIcon></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="dl-col" xs={12} sm={6}>
                        <Card className="dl-card" bg="dark" text="white">
                            <Card.Header><FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon> GitHub Source</Card.Header>
                            <Card.Body className="dl-title" onClick={() => window.location.href = "https://github.com/Potoofu/Mapping_Tools"}>
                                <Card.Title><FontAwesomeIcon icon={["fas", "code"]}></FontAwesomeIcon></Card.Title>
                            </Card.Body>
                            <Card.Body className="dl-title" onClick={() => window.location.href = "https://github.com/Potoofu/Mapping_Tools/archive/master.zip"}>
                                <Card.Title><FontAwesomeIcon icon={["fas", "file-archive"]}></FontAwesomeIcon></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            */
        );
    }
}

export default Downloads;