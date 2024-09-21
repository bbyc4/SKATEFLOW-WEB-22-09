import React from 'react';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinkItems,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    WebsiteRights,
    SocialIconLink,
    ExternalLink
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';
 
const Footer = () => {
 
    const toggleHome = () => {
        scroll.scrollToTop();
    }
 
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Sobre Nós </FooterLinkTitle>
                            <FooterLink to="/"> Termos de serviço </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle> Contato </FooterLinkTitle>
                            <FooterLink to="/"> 11 12345-67890 </FooterLink>
                            <FooterLink to="/"> suporte@skateflow.com </FooterLink>
                            <FooterLink to="/"> Patrocinadores </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Redes sociais </FooterLinkTitle>
                            {/* Substitua pela tag ExternalLink */}
                            <ExternalLink href="https://whatsapp.com/channel/0029Vap0T1vE50Uqn5VRK211" target="_blank" rel="noopener noreferrer"> Whatsapp </ExternalLink>
                            <ExternalLink href="/" target="_blank" rel="noopener noreferrer"> Instagram </ExternalLink>
                            <ExternalLink href="/" target="_blank" rel="noopener noreferrer"> Youtube </ExternalLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            SkateFlow
                        </SocialLogo>
                        <WebsiteRights> SkateFlow © {new Date().getFullYear()} Todos os direitos reservados. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://whatsapp.com/channel/0029Vap0T1vE50Uqn5VRK211" target="_blank" aria-label="Whatsapp">
                                <FaWhatsapp />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}
 
export default Footer;