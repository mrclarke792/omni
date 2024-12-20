import React from 'react';

const TopBar = () => {
    return (
        <div className="top-header-area top-bar hide-on-mobile">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="top-header-content">
                            <ul className="list-unstyled ps-0 mb-0 list">
                                <li>
                                    <i className=""></i>
                                    All-in-One Digital Partner.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="top-header-list text-end">
                            <ul className="list-unstyled ps-0 mb-0 list">
                                <li className="d-inline-block">
                                    <i className="ri-map-pin-line"></i>
                                    Proudly serving businesses across the globe.
                                </li>
                                <li className="d-inline-block">
                                    <i className="ri-mail-open-line"></i>
                                    <a className="text-decoration-none" href="mailto:info@omnidigitalsolutions.ai">info@omnidigitalsolutions.ai</a>
                                </li>
                                <li className="d-inline-block">
                                    <i className="ri-phone-line"></i>
                                    <a className="text-decoration-none" href="tel:++447 47 3255 886">+447 47 3255 886</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
