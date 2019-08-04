import React, { Component } from "react";

import "./Header.css";
import logo from "../../resources/logo.svg";

import { Nav, Navbar, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
    state = {
        OS: this.defineOS()
    }

    defineOS() {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            os = null,
            isSupported = false;

        if (SUPPORTED_OS.macos.hasOwnProperty(platform)) {
            os = "macos";
            if(SUPPORTED_OS.macos[platform] === true) isSupported = true;
        }
        else if (SUPPORTED_OS.windows.hasOwnProperty(platform)) {
            os = "windows";
            if(SUPPORTED_OS.windows[platform] === true) isSupported = true;
        }
        else if (SUPPORTED_OS.ios.hasOwnProperty(platform)) {
            os = "ios";
            if(SUPPORTED_OS.ios[platform] === true) isSupported = true;
        } else if (/Android/.test(userAgent)) {
            os = 'android';
            if(SUPPORTED_OS.andoid === true) isSupported = true;
        } else if (!os && /Linux/.test(platform)) {
            os = 'linux';
            if(SUPPORTED_OS.linux === true) isSupported = true;
        }

        /*
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'mac';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'ios';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'windows';
        } else if (/Android/.test(userAgent)) {
            os = 'android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'linux';
        }
        */
        return {
            currentOS: os,
            isSupported: isSupported
        };
    }

    download(os) {
        if (os === "windows") this.downloadWin();
    }

    async downloadLinux() {

    }

    async downloadMac() {

    }

    async downloadWin() {
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

    render() {
        return (
            <Navbar variant="dark" expand="lg">
                <LinkContainer exact to="/">
                    <Navbar.Brand><img className="header-logo" src={logo} alt="mapping tools - logo" /> Mapping Tools</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" activeKey="/">
                        <LinkContainer exact to="/downloads">
                            <Nav.Link>Downloads</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/documentation">
                            <Nav.Link>Documentation</Nav.Link>
                        </LinkContainer>
                        <LinkContainer exact to="/changelog">
                            <Nav.Link>Changelog</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <div inline="true">
                        <span className="os-content"><strong>Auto Detected:</strong> {OS_STATES[this.state.OS.currentOS]} {!this.state.OS.isSupported && "-> Currently not supported!"}</span>
                        {this.state.OS.isSupported && 
                            <Button variant="outline-primary" onClick={() => this.download(this.state.OS.currentOS)}>Download now</Button>
                        }
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const OS_STATES = {
    windows: "Windows",
    macos: "Mac",
    linux: "Linux",
    android: "Android",
    ios: " iOS",
    "": "Error while detecting!",
    undefined: "Error while detecting!",
    null: "Error while detecting!"
}

const SUPPORTED_OS = {
    "macos": {
        "Macintosh": false,
        "MacIntel": false,
        "MacPPC": false,
        "Mac68K": false
    },
    "windows": {
        'Win32': true,
        'Win64': true,
        'Windows': true,
        'WinCE': true
    },
    "ios": {
        'iPhone': false,
        'iPad': false,
        "iPod": false
    },
    "andoid": false,
    "linux": false
}

export default Header;