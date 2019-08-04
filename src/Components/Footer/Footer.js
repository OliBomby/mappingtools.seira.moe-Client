import React, { Component } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <div className="footer footer-flex-container">
                <div className="footer-flex-container footer-description">
                    <p>made by Olibomby and Potoofu</p>
                </div>
                <div className="footer-flex-container footer-social">
                    <div className="footer-github">
                        <a href="https://github.com/Potoofu/Mapping_Tools">
                            <FontAwesomeIcon icon={["fab", "github"]}></FontAwesomeIcon> GitHub
                        </a>
                    </div>
                    <div className="footer-discord">
                        <a href="https://discord.gg/JhP964H">
                            <FontAwesomeIcon icon={["fab", "discord"]}></FontAwesomeIcon> Discord
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;