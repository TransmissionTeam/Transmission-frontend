import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './img/moh.abufarweh.jpg';
import mohTalfha from './img/moh.talafha.jpeg';
import yousef from './img/yousef.jpg';
import hanen from './img/hanen.jpg';
import nawal from './img/nawal.jpg';
import yazan from './img/yazan.jpg';
import imgGitHub from './img/003-github.png'
import imgLinkIn from './img/001-linkedin.png'
import './AboutUs.css'

import Container from 'react-bootstrap/Container'


export class aboutUs extends Component {
    render() {
        return (
            <main class="mainAboutUs">
                <div class='con'>
                    <img class='hero' src="https://static-cse.canva.com/blob/141399/unique-inspiring-about-page.317625a3.jpg" alt='' />
                    <Container>
                        <h1 class='h1'>
                            The Experience Of Working Together As A Team
                        </h1>
                        <p class='p1'>
                            During this 301 project,, We all worked together to plan and manage the implementation schedule, We were each assigned different sectors to focus on, and we helped each other out if we were having any difficulties. we really appreciated the way we worked together. Our team always completed our tasks ahead of schedule with very positive reviews from our instructor. Our ability to communicate effectively was what made us such a good team. People expressed concerns clearly and openly, so we resolved issues as soon as they arose.</p>

                    </Container>
                </div>
                <Container>
                    <h1 class='team'>Our Team</h1>
                    <div class='general'>

                        <div class='cards'>
                            <Card style={{ width: '20rem'  }}>
                                <Card.Img class='profileImg' variant="top" style={{ height: '350px'  }} src={img} />
                                <Card.Body>
                                    <Card.Title class='title' >Mohammad Abufarweh</Card.Title>
                                    <p class='des'> Software Developer</p>
                                </Card.Body>

                                <Card.Body class='gitHubAndLinkesInIcon'>
                                    <Card.Link href="https://www.linkedin.com/in/mohammad-abu-farweh-905952185"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                                    <Card.Link href="https://github.com/mohammadabufarweh"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                                </Card.Body>
                            </Card>

                            <div>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img class='profileImg' variant="top" style={{ height: '350px'  }} src={yousef} />
                                    <Card.Body>
                                        <Card.Title class='title' >Yousef Abu-Jalboush</Card.Title>
                                        <p class='des'>Software Developer</p>

                                    </Card.Body>

                                    <Card.Body class='gitHubAndLinkesInIcon'>
                                        <Card.Link href="https://www.linkedin.com/in/yousef-abu-jalboush/"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                                        <Card.Link href="https://github.com/YousefAbuJalboush"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                                    </Card.Body>
                                </Card>


                            </div>



                            <div>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img class='profileImg' variant="top" style={{ height: '350px'  }} src={yazan} />
                                    <Card.Body>
                                        <Card.Title class='title' >Yazan Ahmad</Card.Title>
                                        <p class='des'> Software Developer</p>

                                    </Card.Body>

                                    <Card.Body class='gitHubAndLinkesInIcon'>
                                        <Card.Link href="https://www.linkedin.com/in/mohammad-abu-farweh-905952185"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                                        <Card.Link href="https://github.com/YazanAhmad18"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                                    </Card.Body>
                                </Card>


                            </div>



                        </div>
                        <div class='cards'>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img class='profileImg' variant="top" style={{ height: '350px'  }} src={nawal} />
                                <Card.Body>
                                    <Card.Title class='title' >Nawal Ahmad</Card.Title>
                                    <p class='des'>Software Developer</p>

                                </Card.Body>

                                <Card.Body class='gitHubAndLinkesInIcon'>
                                    <Card.Link href="https://www.linkedin.com/mwlite/in/nawal-ahmad-48a2131b8"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                                    <Card.Link href="https://github.com/nawal-ahmad"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                                </Card.Body>
                            </Card>


                            <div>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img class='profileImg' variant="top" style={{ height: '350px'  }} src={mohTalfha} />
                                    <Card.Body>
                                        <Card.Title class='title' >Mohammad Talafha</Card.Title>
                                        <p class='des'>Software Developer</p>

                                    </Card.Body>

                                    <Card.Body class='gitHubAndLinkesInIcon'>
                                        <Card.Link href="http://linkedin.com/in/mohammad-k-talafha"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                                        <Card.Link href="https://github.com/Talafhamohammad-cloud"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                                    </Card.Body>
                                </Card>


                            </div>



                            <div>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img class='profileImg' variant="top" style={{ height: '350px'  }} src={hanen} />
                                    <Card.Body>
                                        <Card.Title class='title' > Haneen Bader</Card.Title>
                                        <p class='des'>Software Developer</p>

                                    </Card.Body>

                                    <Card.Body class='gitHubAndLinkesInIcon'>
                                        <Card.Link href="https://www.linkedin.com/mwlite/in/haneen-bader"><img style={{ width: '1.5rem' }} src={imgLinkIn} alt="" /></Card.Link>
                                        <Card.Link href="https://github.com/haneenbader"><img style={{ width: '1.5rem' }} src={imgGitHub} alt="" /></Card.Link>
                                    </Card.Body>
                                </Card>


                            </div>



                        </div>
                    </div>
                </Container>
            </main>

        )
    }
}

export default aboutUs
