import React from 'react'
import styled from 'styled-components'
import SocialIcons from './SocialIcons'
import Container from './styles/Container.styled'
import Flex from './styles/Flex.styled'

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.color.footer};
    color: #fff;
    padding: 100px 0 60px;

    ul {
        list-style-type: none;
    }

    ul li {
        margin-bottom: 20px;
    }

    p {
        text-align: right;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }
    }
`

export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />
                <Flex>
                    <ul>
                        <li>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Accusamus consectetur porro, sint hic minus maiores!
                        </li>
                        <li>+1-543-123-4567</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                    <SocialIcons />
                </Flex>
                <p>&copy; 2022 Huddle. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
