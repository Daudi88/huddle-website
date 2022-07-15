import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style-type: none;
    }

    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }
`

export default function SocialIcons() {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}
