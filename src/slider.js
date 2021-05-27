import React from 'react'
import Navbar from './components/Navbar'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import aireSlider from './images/img/airesEdit.jpg'
import campanaSlider from './images/img/campanaEdit.jpg'
import neveraSlider from './images/img/image.jpg'
import slider1 from './images/img/EDITSLIDER.jpg'
import serviciosimg from './images/img/colageImg.png'
import './slider.css'
import logo from './images/logo/logo.png'
import logo1 from './images/logo/logo.jpg'
import fotElq from './images/img/editElquinImage.png'
import { tiendaServicios } from './components/tiendaServicios'


function Slider() {

    return (
        <div>

            <Navbar />
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img src={campanaSlider} height="520px" width="100%" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={aireSlider} height="520px" width="100%" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={slider1} height="520px" width="100%" alt="" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={neveraSlider} height="550px" width="100%" alt="" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <br /> <br /> <br />
            <div className="container p-3px" id="somos">
                <div className="row" id="quiensoy">
                    <div className="col-md-12">
                        <img src={serviciosimg} alt="" width='500px' height='500px' />
                    </div>
                    <div className="col-md-12">
                        <h3>quienes somos</h3>
                        <h5><img src={logo1} alt="" /> EMERGENCIAS DOMESTICAS</h5>
                        <p>Somos una solución moderna y confiable para la reparación y mantenimiento de lavadoras, neveras, aires acondicionados y refrigeracion industrial en Bucaramanga y su área Metropolitana.</p>
                        <p>Servicio totalmente a domicilio y con garantía. Soy un técnico especializado con mas de 10 años de experiencia.</p>
                        <div className="box-direccion p-4 mb-3">
                            <h5>servicio a domicilio</h5>
                            <a href="https://api.whatsapp.com/send?phone=573172520702" class="d-flex justify-content-start">
                                <img src="https://www.tecnimastercol.com/assets/img/web/Tel_servicio_domicilio.png" alt="servicio a domicilio" className="img-fluid my-auto" />
                                <label class="ml-2 name my-auto">Tel:</label>
                                <label class="my-auto ml-1">(+57) 3172520702</label>
                            </a>
                            <a href="mailto: servicios@tecnimastercol.com" class="d-flex justify-content-start">
                                <img src="https://www.tecnimastercol.com/assets/img/web/email_servicio_domicilio.png" alt="Servicio técnico lavadoras neveras aires acondicionados a domicilio  " class="img-fluid my-auto" />
                                <label class="ml-2 name my-auto">Email:</label>
                                <label class="my-auto ml-1">emergenciasDomesticas@gmail.com</label>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div id="servicios-tecnicos">
                <div className="container pt-5">
                    <div className="row">
                        <div class="col-12 text-center">
                            <h3>Servicios Técnicos</h3>
                            <p>Reparación y mantenimiento de lavadoras, neveras, aires acondicionados y refrigeración comercial</p>
                        </div>
                        <div className="col-12">
                            <div className="p-2">
                                <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-domicilios-tab" data-toggle="pill" href="#pills-domicilios" role="tab" aria-controls="pills-domicilios" aria-selected="true">Servicio a domicilio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-empresas-tab" data-toggle="pill" href="#pills-empresas" role="tab" aria-controls="pills-empresas" aria-selected="false">Para empresas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="tab-content pt-3 px-1" id="pills-tabContent">
                                <div class="py-4 user border-left-success tab-pane fade show active" id="pills-domicilios" role="tabpanel" aria-labelledby="pills-domicilios-tab">
                                    <div className="row">
                                        <div class="col-12 col-lg-4">
                                            <div className="card">
                                                <div className="card-header p-0">
                                                    <img src="https://www.tecnimastercol.com/assets/img/web/1.png" alt="" className="img-fluid w-100" />
                                                </div>
                                                <div class="card-body text-center">
                                                    <h5>Reparación y mantenimiento lavadoras y secadoras</h5>
                                                    <p>Contamos con experiencia y calidad en reparación y mantenimiento preventivo para lavadoras y secadoras de todas las marcas. Alarga la vida de tu aparato en las manos de nuestros expertos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 padding-xs">
                                            <div className="card">
                                                <div className="card-header">
                                                    <img src="https://www.tecnimastercol.com/assets/img/web/2.png" alt="Técnicos de neveras bucaramanga" className="img-fluid w-100" />
                                                </div>
                                                <div className="card-body text-center">
                                                    <a href=""> <h5>Servicio técnico neveras</h5> </a>
                                                    <p>Especialistas en la reparación, mantenimiento preventivo e instalaciones de neveras, nevecones enfriadores. Servicio a domicilio garantizados .Reparamos tu nevera. Corregimos daños y prevenimos futuras falla </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-4 padding-xs">
                                            <div className="card">
                                                <div className="card-header">
                                                    <img src="https://www.tecnimastercol.com/assets/img/web/2.png" alt="Técnicos de neveras bucaramanga" className="img-fluid w-100" />
                                                </div>
                                                <div className="card-body text-center">
                                                    <a href=""> <h5>Servicio técnico neveras</h5> </a>
                                                    <p>Especialistas en la reparación, mantenimiento preventivo e instalaciones de neveras, nevecones enfriadores. Servicio a domicilio garantizados .Reparamos tu nevera. Corregimos daños y prevenimos futuras falla </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="promociones_box">
                <div class="container pt-5">
                    <div class="row">
                        <div class="col-12 text-center" id="letras">
                            <h3 class="label-white">Contáctanos y solicita tu servicio. </h3>
                            <p class="label-white">Nuestro compromiso es ser su solución  3172520702.</p>
                            <a class="btn btn-primary my-4" href="tel:+573183935895">Llámanos</a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div className='container' id="marcas">
                <div class="col-12 text-center">
                    <h5>Somos Expertos</h5>
                    <h3>En diferentes Marcas</h3>
                </div>
                <Carousel>
                    <Carousel.Item>
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/5.png" className="testimonial-img" alt="servicio técnico whirpool" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/6.png" class="testimonial-img" alt="servicio técnico centrales" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/7.png" class="testimonial-img" alt="servicio técnico lg" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/9.png" class="testimonial-img" alt="servicio técnico bosch" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/10.png" class="testimonial-img" alt="electrolux" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/1.png" class="testimonial-img" alt="servicio técnico mabe" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/2.png" class="testimonial-img" alt="servicio técnico challenger" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/3.png" class="testimonial-img" alt="servicio técnico haceb" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/4.png" class="testimonial-img" alt="servicio técnico samsung" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/6.png" class="testimonial-img" alt="servicio técnico centrales" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/7.png" class="testimonial-img" alt="servicio técnico lg" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/9.png" class="testimonial-img" alt="servicio técnico bosch" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/10.png" class="testimonial-img" alt="electrolux" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/1.png" class="testimonial-img" alt="servicio técnico mabe" />
                        <img src="https://www.tecnimastercol.com/assets/img/web/logos/2.png" class="testimonial-img" alt="servicio técnico challenger" />
                    </Carousel.Item>
                </Carousel>

            </div>
            <div className="footer">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-12 col-lg-5 d-flex align-items-center">
                            <a href="https://www.tecnimastercol.com/"><img src={logo} width="220px" height="220px" className="img-fluid" /> EMERGENCIAS DOMESTICAS</a>
                        </div>
                        <div class="col-12 col-lg-4">
                            <h5>Estamos para servirte</h5>
                            <a href="https://api.whatsapp.com/send?phone=573172025702" className="d-flex justify-content-start">
                                <img src="https://www.tecnimastercol.com/assets/img/web/tel2.png" className="img-fluid my-auto" />
                                <label className="ml-2 name my-auto">Tel:</label>
                                <label className="my-auto ml-1">(+57) 3172025702</label>
                            </a>
                            <a href="mailto: servicios@tecnimastercol.com" className="d-flex justify-content-start">
                                <img src="https://www.tecnimastercol.com/assets/img/web/email.png" className="img-fluid my-auto" />
                                <label className="ml-2 name my-auto">Email:</label>
                                <label className="my-auto ml-1"> </label>
                            </a>
                        </div>
                        <div className='imgElquin'>
                            <img src={fotElq} alt="" width="300px" height="300px" />
                        </div>
                    </div>
                </div>
            </div>
            <p>todos los derechos reservados - Emergencias Domesticas 2020 - 2022 </p>
        </div>
    )
}

export default Slider
