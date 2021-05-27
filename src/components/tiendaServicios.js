import React from 'react'

function tiendaServicios() {
    return (
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
                                            <img src="https://www.tecnimastercol.com/assets/img/web/1.png" alt="" className="img-fluid w-100"/>       
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
                                            <img src="https://www.tecnimastercol.com/assets/img/web/2.png" alt="Técnicos de neveras bucaramanga" className="img-fluid w-100"/>
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
                                            <img src="https://www.tecnimastercol.com/assets/img/web/2.png" alt="Técnicos de neveras bucaramanga" className="img-fluid w-100"/>
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

    )
}

export default tiendaServicios
