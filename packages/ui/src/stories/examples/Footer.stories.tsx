import { Meta } from "@storybook/react";
import { Card } from '@bootwind/card'
import { Table, TableBody, TableCell, TableRow } from '@bootwind/table'
import { HiEnvelope } from 'react-icons/hi2'
import { BiLogoDribbble, BiLogoFacebook, BiLogoFacebookCircle, BiLogoFigma, BiLogoWhatsapp, BiLogoYoutube } from 'react-icons/bi'
import { Input } from '@bootwind/forms'
import { Button } from '@bootwind/button'

export default {
    title: 'Examples/Footer',
    argTypes: {},
} as Meta;

const menus = {
    About: ["About Us", "Blog", "Careers", "Jobs", "In Press", "Gallery"],
    Support: ["Contact Us", "Online Chat", "Whatsapp", "Telegram", "Ticketing", "Call Center"],
    FAQ: ["Account", "Manage Deliveries", "Orders", "Payments", "Returns", "Privacy Policy"],
}

export const FooterWithNewsletter = () => {
    return (
        <footer className="py-8 border-t color-default">
            <div className="container mx-auto">
                <section className="footer-top grid lg:grid-cols-2 gap-10">
                    <div className="footer-menus grid lg:grid-cols-3">
                        {
                            Object.keys(menus).map(menu => (
                                <div className="footer-menu">
                                    <div className="footer-menu-title font-bold mb-5">
                                        <h4>{menu}</h4>
                                    </div>
                                    <div className="footer-menu-items ">
                                            {menus[menu as keyof typeof menus].map(item => {
                                                return (
                                                    <div className="footer-menu-item mb-5">
                                                        <a href="#" className="color-default">{item}</a>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="footer-newsletter">
                        <h4 className="font-bold text-lg mb-5">Newsletter</h4>
                        <p className="mb-8">Be the first one to know  about discounts, offers and events. Unsubscribe whenever you like.</p>
                        <Input placeholder="Enter your email" leftSection={<HiEnvelope/>} rightSection={<Button className="mr-9">Submit</Button>}></Input>
                    </div>
                </section>
                <section className="footer-copyright text-center py-5">
                    &copy; 2000-2023, All Rights Reserved
                </section>
            </div>
        </footer>
    )
}
const SocialMediaIcons = () => (
    <div className="social-media">
        <ul className="flex gap-3">
            {
            [<BiLogoFacebookCircle/>, <BiLogoYoutube/>, <BiLogoDribbble/>, <BiLogoFigma/>, <BiLogoWhatsapp/>].map(logo => {
                return (
                <li>
                    <a href="#" className="p-3 bg-indigo-100 block rounded-full">
                        {logo}
                    </a>
                </li>
                )
                })
            }
        </ul>
    </div>
)

export const FooterWithLogo = () => {
    return (
        <footer className="py-8 border-t color-default">
            <div className="container mx-auto">
                <section className="footer-top grid lg:grid-cols-2 gap-10">
                    <div className="footer-left pr-48">
                        <h4 className="font-bold text-lg mb-5">Logo</h4>
                        <p className="mb-8">
                        We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... Read More
                        </p>
                        <SocialMediaIcons/>
                    </div>
                    <div className="footer-menus grid lg:grid-cols-3">
                        {
                            Object.keys(menus).map(menu => (
                                <div className="footer-menu">
                                    <div className="footer-menu-title font-bold mb-5">
                                        <h4>{menu}</h4>
                                    </div>
                                    <div className="footer-menu-items ">
                                            {menus[menu as keyof typeof menus].map(item => {
                                                return (
                                                    <div className="footer-menu-item mb-5">
                                                        <a href="#" className="color-default">{item}</a>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <section className="footer-copyright text-center py-5">
                    &copy; 2000-2023, All Rights Reserved
                </section>
            </div>
        </footer>
    )
}