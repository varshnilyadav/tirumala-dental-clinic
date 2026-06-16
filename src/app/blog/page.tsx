"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [success, setSuccess] = useState(false);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <div className="lead-form_success" style={{ display: "block" }}>
          <div className="lead-form_title">Thanks! You're all set.</div>
          <div className="lead-form_sub">Our team will call you within 10 minutes.</div>
        </div>
      ) : (
<div className="page-wrapper">
            <div data-collapse="medium" data-animation="default" data-duration="400" fs-scrolldisable-element="smart-nav" data-easing="ease" data-easing2="ease" role="banner" className="navbar_wrap w-nav">
                <div className="navbar_container">
                    <a href="/" className="navbar_logo w-nav-brand">
                        <img loading="eager" src="assets/img/tirumala-logo-dark.svg" alt="Tirumala logo" className="logo_image"/>
                    </a>
                    <div className="navbar-content_wrap">
                        <nav role="navigation" className="navbar_menu w-nav-menu">
                            <a href="/" className="navbar_link w-inline-block">
                                <div>Home</div>
                            </a>
                            <a href="/about" className="navbar_link w-inline-block">
                                <div>About Us</div>
                            </a>
                            <a href="/service" className="navbar_link w-inline-block">
                                <div>Services</div>
                            </a>
                            <a href="/blog" aria-current="page" className="navbar_link w-inline-block w--current">
                                <div>Blog</div>
                            </a>
                            <div data-delay="200" data-hover="false" className="navbar_dropdown w-dropdown">
                                <div className="navbar-dropdown_toggle w-dropdown-toggle">
                                    <div>Pages</div>
                                    <div className="dropdown_chevron">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                            <path d="M9.99991 10.9763L14.1247 6.85156L15.3032 8.03007L9.99991 13.3334L4.69666 8.03007L5.87516 6.85156L9.99991 10.9763Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                                <nav className="navbar-dropdown_list w-dropdown-list">
                                    <div className="navbar-dropdown_wrapper">
                                        <div className="navbar-dropdown_column">
                                            <a href="/" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Home</div>
                                            </a>
                                            <a href="/about" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>About </div>
                                            </a>
                                            <a href="/service" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Services</div>
                                            </a>
                                            <a href="/service" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Services Details</div>
                                            </a>
                                            <a href="/about" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Doctor Details</div>
                                            </a>
                                            <a href="https://wa.me/919307512816" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Contact Us</div>
                                            </a>
                                        </div>
                                        <div className="navbar-dropdown_column">
                                            <a href="/blog" data-animation="text-flip" aria-current="page" className="navbar-dropdown_link w-inline-block w--current">
                                                <div>Blogs</div>
                                            </a>
                                            <a href="/blog" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Blog Details</div>
                                            </a>
                                            <a href="/privacy" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Privacy Policy</div>
                                            </a>
                                            <a href="/cookies" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Cookies</div>
                                            </a>
                                            <a href="404.html" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>404</div>
                                            </a>
                                        </div>
                                        <div className="navbar-dropdown_column">
                                            <a href="/terms" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Terms &Conditions</div>
                                            </a>
                                            <a href="/" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Styleguide</div>
                                            </a>
                                            <a href="/" data-animation="text-flip" className="navbar-dropdown_link w-inline-block">
                                                <div>Instruction</div>
                                            </a>
                                            
                                        </div>
                                    </div>
                                    <div className="navbar-dropdown_bottom">
                                        <p className="dropdown-info_text">
                                            © 2026 Tirumala Dental Clinic
                                        </p>
                                        <div className="navbar-dropdown_social">
                                            <a aria-label="social-icon" href="https://www.facebook.com" target="_blank" className="dropdown-social_icon-item w-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 24" fill="none" className="social_icon is-facebook">
                                                    <path d="M12.2558 5.33333H8.92242C8.30875 5.33333 7.81131 5.8308 7.81131 6.44444V9.77778H12.2558C12.3821 9.77498 12.502 9.83378 12.5771 9.93544C12.6522 10.0371 12.6733 10.1689 12.6335 10.2889L11.8113 12.7333C11.7355 12.9577 11.5259 13.1093 11.2891 13.1111H7.81131V21.4444C7.81131 21.7512 7.56253 22 7.25575 22H4.47798C4.17116 22 3.92242 21.7512 3.92242 21.4444V13.1111H2.25575C1.94893 13.1111 1.7002 12.8623 1.7002 12.5556V10.3333C1.7002 10.0266 1.94893 9.77778 2.25575 9.77778H3.92242V6.44444C3.92242 3.98984 5.9123 2 8.36687 2H12.2558C12.5625 2 12.8113 2.24873 12.8113 2.55556V4.77778C12.8113 5.0846 12.5625 5.33333 12.2558 5.33333Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                            <a aria-label="social-icon" href="https://www.instagram.com" target="_blank" className="dropdown-social_icon-item w-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 24" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8194 2H8.93056C5.86231 2 3.375 4.48731 3.375 7.55556V16.4444C3.375 19.5127 5.86231 22 8.93056 22H17.8194C20.8876 22 23.375 19.5127 23.375 16.4444V7.55556C23.375 4.48731 20.8876 2 17.8194 2ZM21.4305 16.4444C21.4244 18.4362 19.8112 20.0494 17.8194 20.0556H8.93056C6.93873 20.0494 5.32555 18.4362 5.31945 16.4444V7.55556C5.32555 5.56372 6.93873 3.95054 8.93056 3.94444H17.8194C19.8112 3.95054 21.4244 5.56372 21.4305 7.55556V16.4444ZM18.6527 7.83333C19.2664 7.83333 19.7638 7.33587 19.7638 6.72222C19.7638 6.10858 19.2664 5.61111 18.6527 5.61111C18.0391 5.61111 17.5416 6.10858 17.5416 6.72222C17.5416 7.33587 18.0391 7.83333 18.6527 7.83333ZM13.375 7C10.6136 7 8.375 9.23858 8.375 12C8.375 14.7614 10.6136 17 13.375 17C16.1364 17 18.375 14.7614 18.375 12C18.378 10.673 17.8521 9.39952 16.9137 8.4612C15.9754 7.52288 14.702 6.99704 13.375 7ZM10.3194 12C10.3194 13.6876 11.6874 15.0556 13.375 15.0556C15.0625 15.0556 16.4305 13.6876 16.4305 12C16.4305 10.3124 15.0625 8.94444 13.375 8.94444C11.6874 8.94444 10.3194 10.3124 10.3194 12Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                            <a aria-label="social-icon" href="https://www.twitter.com" target="_blank" className="dropdown-social_icon-item w-inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 31 24" fill="none">
                                                    <path d="M26.3412 4.89857C25.7342 5.7084 25.0003 6.41482 24.168 6.99055C24.168 7.20209 24.168 7.41363 24.168 7.63694C24.1747 11.4786 22.6402 15.1622 19.9085 17.8621C17.1767 20.562 13.4764 22.0522 9.63693 21.9986C7.41724 22.0061 5.22597 21.4993 3.23479 20.5178C3.12742 20.4709 3.05817 20.3647 3.05858 20.2475V20.1182C3.05858 19.9494 3.19533 19.8127 3.36401 19.8127C5.54591 19.7407 7.64996 18.9842 9.37849 17.6502C7.40357 17.6104 5.62665 16.4404 4.80889 14.6415C4.76759 14.5433 4.78044 14.4305 4.84283 14.3441C4.90521 14.2577 5.0081 14.2101 5.11431 14.2185C5.71453 14.2787 6.32076 14.2229 6.89987 14.0539C4.71972 13.6013 3.08157 11.7914 2.84713 9.5761C2.8388 9.46982 2.88642 9.36694 2.9728 9.30446C3.05917 9.24211 3.17181 9.22917 3.27003 9.2706C3.85508 9.52877 4.48665 9.66472 5.12606 9.67008C3.21573 8.4163 2.39059 6.03145 3.11731 3.86435C3.19233 3.65377 3.37256 3.4982 3.59176 3.45483C3.81095 3.41144 4.03681 3.48665 4.1863 3.6528C6.76417 6.39642 10.3062 8.03133 14.0655 8.21281C13.9693 7.82858 13.922 7.43369 13.9246 7.03755C13.9598 4.96043 15.245 3.11008 17.1786 2.35277C19.112 1.59548 21.3113 2.08109 22.7467 3.58228C23.725 3.39589 24.6709 3.06726 25.5542 2.60681C25.6189 2.56642 25.7009 2.56642 25.7657 2.60681C25.806 2.67155 25.806 2.75362 25.7657 2.81836C25.3378 3.79807 24.6151 4.61977 23.6982 5.16888C24.5011 5.07577 25.2898 4.88637 26.0476 4.60477C26.1114 4.56134 26.1952 4.56134 26.259 4.60477C26.3125 4.62921 26.3525 4.67597 26.3683 4.73258C26.3841 4.7892 26.3742 4.84992 26.3412 4.89857Z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </nav>
                        <div className="navbar-button_wrapper">
                            <div className="navbar_button hide-mobile">
                                <div className="button-container">
                                    <a data-wf--button-primary--variant="light-small" href="https://wa.me/919307512816" className="button_primary w-variant-fb89ee7f-8db1-8e54-55c6-075f0151c951 w-inline-block">
                                        <div className="button_inner">
                                            <div className="button-text_wrap">
                                                <div className="button_text">Get Appointment</div>
                                            </div>
                                            <div className="button-icon_group w-variant-fb89ee7f-8db1-8e54-55c6-075f0151c951">
                                                <div className="button-icon_wrap w-variant-fb89ee7f-8db1-8e54-55c6-075f0151c951">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                        <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                    </svg>
                                                </div>
                                                <div className="button-icon_wrap w-variant-fb89ee7f-8db1-8e54-55c6-075f0151c951 is-hover">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                        <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="navbar-toggler-button w-nav-button">
                                <div className="navbar-toggle_icon">
                                    <div className="navbar-toggler_bar_top"></div>
                                    <div className="navbar-toggler_bar-middle">
                                        <div className="navbar-toggler_bar-middle_inner"></div>
                                    </div>
                                    <div className="navbar_toggler-bar-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="main-wrapper">
                <header className="section_hero">
                    <div className="section-padding padding-hero bottom-none">
                        <div className="container">
                            <div className="section_component">
                                <div className="margin-bottom margin-56px">
                                    <div className="blog_header">
                                        <h1 hero-text-split="" data-w-id="2302474f-6bba-a7ff-4dba-3e5a91ca8caa" style={{ "transform": "translate3d(0, 25%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", "opacity": "0" }}>Insights for a Healthier Smile</h1>
                                        <div id="w-node-_2302474f-6bba-a7ff-4dba-3e5a91ca8cac-965ec343" className="blog-header_para">
                                            <p data-w-id="2302474f-6bba-a7ff-4dba-3e5a91ca8cad" style={{ "transform": "translate3d(0, 25%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", "opacity": "0" }} className="body-text-18px">From everyday habits to advanced treatments, our dental experts share insights </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_element">
                                    <div className="w-dyn-list">
                                        <div role="list" className="w-dyn-items">
                                            <div role="listitem" className="w-dyn-item">
                                                <div data-w-id="f8ffd085-611f-daf7-4a70-712769d2ff5f" style={{ "transform": "translate3d(0, 25%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", "opacity": "0" }} className="feature_blog">
                                                    <a aria-label="feature-blog-link" data-w-id="e648eab7-213c-2ade-0555-73a5a8607885" href="/blog" className="feature-blog_image-wrap w-inline-block">
                                                        <div className="image-animation-trigger">
                                                            <div style={{ "transform": "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="image-animation-scale">
                                                                <img src="assets/img/gen_blog-image-4.jpg" loading="lazy" style={{ "transform": "translate3d(0, 0, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} data-w-id="2677f78a-9aa8-f7a1-dcc6-f54a9eb50a6a" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-4.jpg 500w, assets/img/gen_blog-image-4.jpg 800w, assets/img/gen_blog-image-4.jpg 1080w, assets/img/gen_blog-image-4.jpg 1600w, assets/img/gen_blog-image-4.jpg 1620w" className="feature-blog_image"/>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <div className="feature-blog_content">
                                                        <div className="feature-blog_content-inner">
                                                            <div className="margin-bottom margin-24px">
                                                                <div className="feature-blog_header">
                                                                    <div className="feature-blog_tag">
                                                                        <div>Preventive Care</div>
                                                                    </div>
                                                                    <div className="feature-blog_info">
                                                                        <div className="feature-blog_info-text">Oral Health Tips</div>
                                                                        <div className="feature-blog_info-divider"></div>
                                                                        <div className="feature-blog_info-text">April 30, 2026</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="margin-bottom margin-24px">
                                                                <a aria-label="feature-blog-link" href="/blog" className="feature-blog_title-wrap w-inline-block">
                                                                    <h2 className="feature-blog_title">The ultimate guide to brushing: are you doing it right?</h2>
                                                                </a>
                                                            </div>
                                                            <p className="feature-blog_text">Discover how cosmetic dentistry treatments can transform your smile, improve appearance, and boost your confidence with personalized solutions designed for natural, lasting results.</p>
                                                        </div>
                                                        <div className="feature-blog_button">
                                                            <a data-wf--button-primary--variant="light" href="/blog" className="button_primary w-variant-62db4792-8717-dbe8-e811-0d36eb02f9ec w-inline-block">
                                                                <div className="button_inner">
                                                                    <div className="button-text_wrap">
                                                                        <div className="button_text">Read More</div>
                                                                    </div>
                                                                    <div className="button-icon_group w-variant-62db4792-8717-dbe8-e811-0d36eb02f9ec">
                                                                        <div className="button-icon_wrap">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                                <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                                            </svg>
                                                                        </div>
                                                                        <div className="button-icon_wrap is-hover">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                                <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </a>
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
                    <div className="hero_gradient"></div>
                </header>
                <section className="section_blog">
                    <div className="section-padding padding-120x120">
                        <div className="container">
                            <div className="section_component">
                                <div className="margin-bottom margin-56px">
                                    <div className="blog_header is-blog">
                                        <div className="blog-header_conten">
                                            <div data-w-id="b62c61d9-7a76-dfb9-82e2-fb5fc4d55c2e" style={{ "transform": "translate3d(0, 25%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", "opacity": "0" }} className="margin-bottom margin-12px">
                                                <div className="section_tag">
                                                    <div className="icon_wrap is-small">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                            <path d="M12 5.45455H7.31455L10.6255 2.14364L9.85636 1.37455L6.54545 4.68545V0H5.45455V4.68545L2.14364 1.37455L1.37455 2.14364L4.68545 5.45455H0V6.54545H4.68545L1.37455 9.85636L2.14364 10.6255L5.45455 7.31455V12H6.54545V7.31455L9.85636 10.6255L10.6255 9.85636L7.31455 6.54545H12V5.45455Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                    <div>Blogs</div>
                                                </div>
                                            </div>
                                            <h1 data-w-id="c32f64b1-f80e-fd86-d9f9-b03e6561da0c" style={{ "transform": "translate3d(0, 25%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", "opacity": "0" }}>
                                                Stories and Tips From <span className="text-highlighted">Around the World</span>
                                            </h1>
                                        </div>
                                        <div id="w-node-f0574d8d-d7db-5d0b-1fe7-ab60f4e5adac-965ec343" data-w-id="f0574d8d-d7db-5d0b-1fe7-ab60f4e5adac" style={{ "transform": "translate3d(0, 25%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", "opacity": "0" }} className="blog-header_button">
                                            <a data-wf--button-primary--variant="base" href="https://wa.me/919307512816" className="button_primary w-inline-block">
                                                <div className="button_inner">
                                                    <div className="button-text_wrap">
                                                        <div className="button_text">Book Appointment</div>
                                                    </div>
                                                    <div className="button-icon_group">
                                                        <div className="button-icon_wrap">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="button-icon_wrap is-hover">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="blog_list w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <a href="/blog" className="blog_item w-inline-block">
                                                <div className="blog-content_wrap">
                                                    <div className="blog-item_content">
                                                        <div className="blog-item_content-inner">
                                                            <h2 className="blog-item_title">Dental myths busted: what your teeth really need for you career</h2>
                                                            <div className="blog-item_cta">
                                                                <div>Read More</div>
                                                                <div className="blog-item_icon-wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M9.17105 5L15 5.0002L15 10.8016M5 15L14.7593 5.24093" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-item_image-wrap">
                                                    <img src="assets/img/gen_blog-image-6.jpg" loading="lazy" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-6.jpg 500w, assets/img/gen_blog-image-6.jpg 800w, assets/img/gen_blog-image-6.jpg 1080w, assets/img/gen_blog-image-6.jpg 1600w, assets/img/gen_blog-image-6.jpg 1620w" className="blog-item_image"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <a href="/blog" className="blog_item w-inline-block">
                                                <div className="blog-content_wrap">
                                                    <div className="blog-item_content">
                                                        <div className="blog-item_content-inner">
                                                            <h2 className="blog-item_title">The truth about flossing: why skipping it isn’t an option</h2>
                                                            <div className="blog-item_cta">
                                                                <div>Read More</div>
                                                                <div className="blog-item_icon-wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M9.17105 5L15 5.0002L15 10.8016M5 15L14.7593 5.24093" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-item_image-wrap">
                                                    <img src="assets/img/gen_blog-image-5.jpg" loading="lazy" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-5.jpg 500w, assets/img/gen_blog-image-5.jpg 800w, assets/img/gen_blog-image-5.jpg 1080w, assets/img/gen_blog-image-5.jpg 1600w, assets/img/gen_blog-image-5.jpg 1620w" className="blog-item_image"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <a href="/blog" className="blog_item w-inline-block">
                                                <div className="blog-content_wrap">
                                                    <div className="blog-item_content">
                                                        <div className="blog-item_content-inner">
                                                            <h2 className="blog-item_title">The ultimate guide to brushing: are you doing it right?</h2>
                                                            <div className="blog-item_cta">
                                                                <div>Read More</div>
                                                                <div className="blog-item_icon-wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M9.17105 5L15 5.0002L15 10.8016M5 15L14.7593 5.24093" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-item_image-wrap">
                                                    <img src="assets/img/gen_blog-image-4.jpg" loading="lazy" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-4.jpg 500w, assets/img/gen_blog-image-4.jpg 800w, assets/img/gen_blog-image-4.jpg 1080w, assets/img/gen_blog-image-4.jpg 1600w, assets/img/gen_blog-image-4.jpg 1620w" className="blog-item_image"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <a href="/blog" className="blog_item w-inline-block">
                                                <div className="blog-content_wrap">
                                                    <div className="blog-item_content">
                                                        <div className="blog-item_content-inner">
                                                            <h2 className="blog-item_title">Foods that secretly harm your teeth, and what to eat instead</h2>
                                                            <div className="blog-item_cta">
                                                                <div>Read More</div>
                                                                <div className="blog-item_icon-wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M9.17105 5L15 5.0002L15 10.8016M5 15L14.7593 5.24093" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-item_image-wrap">
                                                    <img src="assets/img/gen_blog-image-3.jpg" loading="lazy" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-3.jpg 500w, assets/img/gen_blog-image-3.jpg 800w, assets/img/gen_blog-image-3.jpg 1080w, assets/img/gen_blog-image-3.jpg 1600w, assets/img/gen_blog-image-3.jpg 1620w" className="blog-item_image"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <a href="/blog" className="blog_item w-inline-block">
                                                <div className="blog-content_wrap">
                                                    <div className="blog-item_content">
                                                        <div className="blog-item_content-inner">
                                                            <h2 className="blog-item_title">How veneers can you completely transform your smile</h2>
                                                            <div className="blog-item_cta">
                                                                <div>Read More</div>
                                                                <div className="blog-item_icon-wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M9.17105 5L15 5.0002L15 10.8016M5 15L14.7593 5.24093" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-item_image-wrap">
                                                    <img src="assets/img/gen_blog-image-2.jpg" loading="lazy" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-2.jpg 500w, assets/img/gen_blog-image-2.jpg 800w, assets/img/gen_blog-image-2.jpg 1080w, assets/img/gen_blog-image-2.jpg 1600w, assets/img/gen_blog-image-2.jpg 1620w" className="blog-item_image"/>
                                                </div>
                                            </a>
                                        </div>
                                        <div role="listitem" className="w-dyn-item">
                                            <a href="/blog" className="blog_item w-inline-block">
                                                <div className="blog-content_wrap">
                                                    <div className="blog-item_content">
                                                        <div className="blog-item_content-inner">
                                                            <h2 className="blog-item_title">The top 5 daily dental habits that can protect your smile for a lifetime</h2>
                                                            <div className="blog-item_cta">
                                                                <div>Read More</div>
                                                                <div className="blog-item_icon-wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 20" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M9.17105 5L15 5.0002L15 10.8016M5 15L14.7593 5.24093" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog-item_image-wrap">
                                                    <img src="assets/img/gen_blog-image-1.jpg" loading="lazy" alt="" sizes="100vw" srcSet="assets/img/gen_blog-image-1.jpg 500w, assets/img/gen_blog-image-1.jpg 800w, assets/img/gen_blog-image-1.jpg 1080w, assets/img/gen_blog-image-1.jpg 1600w, assets/img/gen_blog-image-1.jpg 1620w" className="blog-item_image"/>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_faq">
                    <div className="section-padding padding-120x140">
                        <div className="container">
                            <div className="section_component">
                                <div className="faq-element">
                                    <div id="w-node-_7aff3246-7436-183d-9639-5ab4a844114f-a844114a" className="faq_info">
                                        <div className="faq-info_content">
                                            <div data-w-id="7aff3246-7436-183d-9639-5ab4a8441151" className="margin-bottom margin-12px">
                                                <div className="section_tag">
                                                    <div className="icon_wrap is-small">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                            <path d="M12 5.45455H7.31455L10.6255 2.14364L9.85636 1.37455L6.54545 4.68545V0H5.45455V4.68545L2.14364 1.37455L1.37455 2.14364L4.68545 5.45455H0V6.54545H4.68545L1.37455 9.85636L2.14364 10.6255L5.45455 7.31455V12H6.54545V7.31455L9.85636 10.6255L10.6255 9.85636L7.31455 6.54545H12V5.45455Z" fill="currentColor"></path>
                                                        </svg>
                                                    </div>
                                                    <div>FAQ</div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom margin-16px">
                                                <h2 data-w-id="7aff3246-7436-183d-9639-5ab4a8441155">
                                                    <span className="text-highlighted">Questions </span>
                                                    We Get Often
                                                </h2>
                                            </div>
                                            <p data-w-id="7aff3246-7436-183d-9639-5ab4a8441159" className="body-text-18px">Answers to Your Most Common Questions About Dental Care and Our Services</p>
                                        </div>
                                        <div data-w-id="7aff3246-7436-183d-9639-5ab4a844115b" className="faq_cta">
                                            <div className="faq-cta_icon-wrap">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none" className="faq-cta_icon">
                                                    <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div className="faq-cta_info">
                                                <div className="faq-cta_info-content">
                                                    <div className="faq-cta_info-title">Still have a question?</div>
                                                    <p>Our team is ready to assist you with anything you need.</p>
                                                </div>
                                                <div className="faq-cta_info-button">
                                                    <a data-wf--button-primary--variant="small" href="https://wa.me/919307512816" className="button_primary w-variant-1a94fba4-1615-e418-bbea-f08bbc622622 w-inline-block">
                                                        <div className="button_inner">
                                                            <div className="button-text_wrap">
                                                                <div className="button_text">Make A Call</div>
                                                            </div>
                                                            <div className="button-icon_group">
                                                                <div className="button-icon_wrap">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-icon_wrap is-hover">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                                        <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="faq_list">
                                        <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="faq_tabs w-tabs">
                                            <div className="faq-tabs_menu w-tab-menu">
                                                <a data-w-tab="Tab 1" className="faq_item w-inline-block w-tab-link w--current">
                                                    <div className="faq_header">
                                                        <div className="faq-header_title">How often should I visit the dentist?</div>
                                                        <div className="faq-header_icon-wrap">
                                                            <div className="faq-header_icon-line"></div>
                                                            <div className="faq-header_icon-line is-absolute"></div>
                                                        </div>
                                                    </div>
                                                    <div className="faq_description">
                                                        <div className="faq-description_inner">
                                                            <p>We recommend a routine dental checkup every six months to maintain optimal oral health and catch any issues early.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a data-w-tab="Tab 2" className="faq_item w-inline-block w-tab-link">
                                                    <div className="faq_header">
                                                        <div className="faq-header_title">Do you offer emergency dental services?</div>
                                                        <div className="faq-header_icon-wrap">
                                                            <div className="faq-header_icon-line"></div>
                                                            <div className="faq-header_icon-line is-absolute"></div>
                                                        </div>
                                                    </div>
                                                    <div className="faq_description">
                                                        <div className="faq-description_inner">
                                                            <p>Yes, we provide emergency dental care for urgent issues like pain, injury, or infections with prompt attention.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a data-w-tab="Tab 3" className="faq_item w-inline-block w-tab-link">
                                                    <div className="faq_header">
                                                        <div className="faq-header_title">Are your treatments painful?</div>
                                                        <div className="faq-header_icon-wrap">
                                                            <div className="faq-header_icon-line"></div>
                                                            <div className="faq-header_icon-line is-absolute"></div>
                                                        </div>
                                                    </div>
                                                    <div className="faq_description">
                                                        <div className="faq-description_inner">
                                                            <p>Most treatments are comfortable with modern techniques and anesthesia, ensuring minimal pain and a stress-free experience.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a data-w-tab="Tab 4" className="faq_item w-inline-block w-tab-link">
                                                    <div className="faq_header">
                                                        <div className="faq-header_title">What dental services do you provide?</div>
                                                        <div className="faq-header_icon-wrap">
                                                            <div className="faq-header_icon-line"></div>
                                                            <div className="faq-header_icon-line is-absolute"></div>
                                                        </div>
                                                    </div>
                                                    <div className="faq_description">
                                                        <div className="faq-description_inner">
                                                            <p>We offer preventive, cosmetic, restorative, and specialized dental services tailored to maintain and improve your health.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a data-w-tab="Tab 5" className="faq_item is-last w-inline-block w-tab-link">
                                                    <div className="faq_header">
                                                        <div className="faq-header_title">Do you accept insurance?</div>
                                                        <div className="faq-header_icon-wrap">
                                                            <div className="faq-header_icon-line"></div>
                                                            <div className="faq-header_icon-line is-absolute"></div>
                                                        </div>
                                                    </div>
                                                    <div className="faq_description">
                                                        <div className="faq-description_inner">
                                                            <p>Yes, we accept most major insurance plans and assist patients in maximizing their benefits for affordable dental care.</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="faq-tabs_content w-tab-content">
                                                <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active"></div>
                                                <div data-w-tab="Tab 2" className="w-tab-pane"></div>
                                                <div data-w-tab="Tab 3" className="w-tab-pane"></div>
                                                <div data-w-tab="Tab 4" className="w-tab-pane"></div>
                                                <div data-w-tab="Tab 5" className="w-tab-pane"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_cta">
                    <div className="section-padding padding-100x100">
                        <div className="container">
                            <div className="section_component">
                                <div className="cta_element">
                                    <div className="cta_content">
                                        <div data-w-id="875ac5c5-fc76-0575-598a-0f09e52c4247" className="cta_tag">
                                            <div className="icon_wrap is-small">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M12 5.45455H7.31455L10.6255 2.14364L9.85636 1.37455L6.54545 4.68545V0H5.45455V4.68545L2.14364 1.37455L1.37455 2.14364L4.68545 5.45455H0V6.54545H4.68545L1.37455 9.85636L2.14364 10.6255L5.45455 7.31455V12H6.54545V7.31455L9.85636 10.6255L10.6255 9.85636L7.31455 6.54545H12V5.45455Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>Get In Touch</div>
                                        </div>
                                        <h2 data-w-id="875ac5c5-fc76-0575-598a-0f09e52c424d">
                                            Let’s Talk Teeth, We’re <span className="text-highlighted">Just a Smile Away</span>
                                        </h2>
                                        <p data-w-id="875ac5c5-fc76-0575-598a-0f09e52c424f" className="text-color-light">Your health journey starts with one simple step, we’re here to guide you.</p>
                                    </div>
                                    <div data-w-id="875ac5c5-fc76-0575-598a-0f09e52c4251" className="button-container">
                                        <a data-wf--button-primary--variant="light" href="https://wa.me/919307512816" className="button_primary w-variant-62db4792-8717-dbe8-e811-0d36eb02f9ec w-inline-block">
                                            <div className="button_inner">
                                                <div className="button-text_wrap">
                                                    <div className="button_text">Get Started</div>
                                                </div>
                                                <div className="button-icon_group w-variant-62db4792-8717-dbe8-e811-0d36eb02f9ec">
                                                    <div className="button-icon_wrap">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                            <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="button-icon_wrap is-hover">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                            <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cta-overlay-wrap">
                        <div className="cta_overlay is-bottom-right"></div>
                        <div className="cta_overlay is-top-right"></div>
                    </div>
                </section>
            </main>
            <footer className="section_footer">
                <div className="section-padding">
                    <div className="container">
                        <div data-w-id="a1b41f4f-e78b-52e6-2492-2ff9a80f251e" className="footer_header">
                            <a id="w-node-_69a072d1-69e6-8783-2548-858b3e84bf4f-4af74ce9" href="/" className="footer_brand w-inline-block">
                                <img src="assets/img/tirumala-logo-dark.svg" loading="lazy" alt="Tirumala logo" className="brand_logo"/>
                            </a>
                            <div className="footer-contact_wrap">
                                <a href="tel:+91 9307512816" className="footer-contact_link w-inline-block">
                                    <div>+91 9307512816</div>
                                </a>
                                <a href="mailto:hello@tirumaladental.com?subject=Support" className="footer-contact_link w-inline-block">
                                    <div>hello@tirumaladental.com</div>
                                </a>
                            </div>
                        </div>
                        <div data-w-id="62445903-4aac-6534-d392-fbc69f50ef16" className="footer_element">
                            <div className="footer_info">
                                <div className="margin-bottom margin-24px">
                                    <div className="footer-info_para-wrap">
                                        <p className="footer-info_para">Advanced technology, a caring team, and treatments designed to keep your smile healthy for life. </p>
                                    </div>
                                </div>
                                <a data-wf--button-primary--variant="light" href="https://wa.me/919307512816" className="button_primary w-variant-62db4792-8717-dbe8-e811-0d36eb02f9ec w-inline-block">
                                    <div className="button_inner">
                                        <div className="button-text_wrap">
                                            <div className="button_text">Get Appointment</div>
                                        </div>
                                        <div className="button-icon_group w-variant-62db4792-8717-dbe8-e811-0d36eb02f9ec">
                                            <div className="button-icon_wrap">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                </svg>
                                            </div>
                                            <div className="button-icon_wrap is-hover">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 12 12" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M4.70139 0.75L10.5303 0.750201L10.5303 6.55165M0.530334 10.75L10.2896 0.990932" stroke="currentColor" stroke-width="1.5"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="w-node-_90aa065e-2d95-4aa8-f2ac-04b04859c2d0-4af74ce9" className="footer_menu">
                                <div className="footer-links-column">
                                    <div className="footer-menu_title">Navigation</div>
                                    <div className="footer-menu_link-wrap">
                                        <a href="/" className="footer-menu_link w-inline-block">
                                            <div>Home</div>
                                        </a>
                                        <a href="/about" className="footer-menu_link w-inline-block">
                                            <div>About</div>
                                        </a>
                                        <a href="/service" className="footer-menu_link w-inline-block">
                                            <div>Services</div>
                                        </a>
                                        <a href="/blog" aria-current="page" className="footer-menu_link w-inline-block w--current">
                                            <div>Blogs</div>
                                        </a>
                                    </div>
                                </div>
                                <div id="w-node-_8ecb3a12-ee6e-7ca0-b061-e7854131557d-4af74ce9" className="footer-links-column">
                                    <div className="footer-menu_title">Legal</div>
                                    <div className="footer-menu_link-wrap">
                                        <a href="/terms" className="footer-menu_link w-inline-block">
                                            <div>Terms &Conditions</div>
                                        </a>
                                        <a href="/cookies" className="footer-menu_link w-inline-block">
                                            <div>Cookies</div>
                                        </a>
                                        <a href="licenses.html" className="footer-menu_link w-inline-block">
                                            <div>Licenses</div>
                                        </a>
                                        <a href="404.html" className="footer-menu_link w-inline-block">
                                            <div>404</div>
                                        </a>
                                    </div>
                                </div>
                                <div id="w-node-_02084d99-4d3e-67aa-07d3-fc9302298ce0-4af74ce9" className="footer-links-column">
                                    <div className="footer-menu_title">Follow us</div>
                                    <div className="footer-menu_link-wrap is-social">
                                        <a href="#" target="_blank" className="footer-menu_link w-inline-block">
                                            <div className="footer-social_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M9.33464 8.9987H11.0013L11.668 6.33203H9.33464V4.9987C9.33464 4.31244 9.33464 3.66536 10.668 3.66536H11.668V1.42543C11.4508 1.3966 10.63 1.33203 9.76324 1.33203C7.95357 1.33203 6.66797 2.4366 6.66797 4.46517V6.33203H4.66797V8.9987H6.66797V14.6654H9.33464V8.9987Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>Facebook </div>
                                        </a>
                                        <a href="#" target="_blank" className="footer-menu_link w-inline-block">
                                            <div className="footer-social_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M11.7929 2.04297L8.46177 5.8508L5.5816 2.04297H1.41016L6.39438 8.56044L1.67049 13.9596H3.69327L7.33917 9.7937L10.5255 13.9596H14.5936L9.39797 7.09077L13.8145 2.04297H11.7929ZM11.0834 12.7496L3.77088 3.18942H4.97294L12.2036 12.7496H11.0834Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>Tweeter</div>
                                        </a>
                                        <a href="#" target="_blank" className="footer-menu_link w-inline-block">
                                            <div className="footer-social_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M8.00067 6.36637C8.61207 5.74185 9.40807 5.33301 10.334 5.33301C12.359 5.33301 14.0007 6.97461 14.0007 8.99967V13.9997H12.6673V8.99967C12.6673 7.71101 11.6227 6.66634 10.334 6.66634C9.04533 6.66634 8.00067 7.71101 8.00067 8.99967V13.9997H6.66733V5.66634H8.00067V6.36637ZM3.33398 4.33301C2.7817 4.33301 2.33398 3.88529 2.33398 3.33301C2.33398 2.78072 2.7817 2.33301 3.33398 2.33301C3.88626 2.33301 4.33398 2.78072 4.33398 3.33301C4.33398 3.88529 3.88626 4.33301 3.33398 4.33301ZM2.66732 5.66634H4.00065V13.9997H2.66732V5.66634Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>LinkedIn</div>
                                        </a>
                                        <a href="#" target="_blank" className="footer-menu_link w-inline-block">
                                            <div className="footer-social_icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 16 16" fill="none" vector-effect="non-scaling-stroke" preserveAspectRatio="none">
                                                    <path d="M8.00067 5.99967C6.89573 5.99967 6.00065 6.89507 6.00065 7.99967C6.00065 9.10454 6.89607 9.99967 8.00067 9.99967C9.10553 9.99967 10.0007 9.10427 10.0007 7.99967C10.0007 6.89481 9.10527 5.99967 8.00067 5.99967ZM8.00067 4.66634C9.84093 4.66634 11.334 6.15774 11.334 7.99967C11.334 9.84001 9.8426 11.333 8.00067 11.333C6.16034 11.333 4.66732 9.84161 4.66732 7.99967C4.66732 6.15936 6.15872 4.66634 8.00067 4.66634ZM12.334 4.49911C12.334 4.95918 11.9601 5.33245 11.5007 5.33245C11.0406 5.33245 10.6673 4.95861 10.6673 4.49911C10.6673 4.03961 11.0411 3.66634 11.5007 3.66634C11.9595 3.66576 12.334 4.03961 12.334 4.49911ZM8.00067 2.66634C6.351 2.66634 6.08212 2.67071 5.31484 2.70487C4.7921 2.72941 4.44168 2.79972 4.1161 2.92612C3.82677 3.03833 3.61806 3.17233 3.39568 3.39471C3.17244 3.61794 3.03869 3.82609 2.92693 4.11556C2.80024 4.44189 2.72995 4.79175 2.70585 5.31377C2.67135 6.04981 2.66732 6.30704 2.66732 7.99967C2.66732 9.64934 2.67168 9.91821 2.70584 10.6854C2.7304 11.2079 2.8008 11.5589 2.92689 11.8837C3.0394 12.1734 3.17366 12.3826 3.39497 12.6039C3.61908 12.8277 3.82786 12.9619 4.11458 13.0726C4.44412 13.2 4.79432 13.2704 5.31474 13.2945C6.05078 13.3289 6.30802 13.333 8.00067 13.333C9.65033 13.333 9.9192 13.3286 10.6864 13.2945C11.2078 13.27 11.559 13.1994 11.8847 13.0734C12.1736 12.9612 12.3835 12.8265 12.6049 12.6053C12.8291 12.3809 12.963 12.1726 13.0738 11.8852C13.2009 11.5569 13.2714 11.2062 13.2955 10.6856C13.3299 9.94954 13.334 9.69227 13.334 7.99967C13.334 6.35002 13.3296 6.08115 13.2955 5.31392C13.2709 4.79238 13.2003 4.44067 13.0742 4.11513C12.9623 3.82659 12.8278 3.61724 12.6056 3.39471C12.382 3.17111 12.1744 3.03763 11.8847 2.92595C11.5587 2.79937 11.2083 2.72898 10.6865 2.70488C9.95053 2.67037 9.69326 2.66634 8.00067 2.66634ZM8.00067 1.33301C9.81173 1.33301 10.0379 1.33967 10.749 1.37301C11.4584 1.40579 11.9423 1.51801 12.3673 1.68301C12.8067 1.85245 13.1779 2.08134 13.5484 2.45189C13.9184 2.82245 14.1473 3.19467 14.3173 3.63301C14.4817 4.05745 14.594 4.54189 14.6273 5.25134C14.659 5.96245 14.6673 6.18856 14.6673 7.99967C14.6673 9.81081 14.6607 10.0369 14.6273 10.748C14.5945 11.4575 14.4817 11.9413 14.3173 12.3663C14.1479 12.8058 13.9184 13.1769 13.5484 13.5475C13.1779 13.9175 12.8051 14.1463 12.3673 14.3163C11.9423 14.4808 11.4584 14.593 10.749 14.6263C10.0379 14.658 9.81173 14.6663 8.00067 14.6663C6.18954 14.6663 5.96342 14.6597 5.25232 14.6263C4.54287 14.5935 4.05954 14.4808 3.63398 14.3163C3.19509 14.1469 2.82342 13.9175 2.45287 13.5475C2.08232 13.1769 1.85398 12.8041 1.68398 12.3663C1.51898 11.9413 1.40732 11.4575 1.37398 10.748C1.34232 10.0369 1.33398 9.81081 1.33398 7.99967C1.33398 6.18856 1.34065 5.96245 1.37398 5.25134C1.40676 4.54134 1.51898 4.05801 1.68398 3.63301C1.85342 3.19412 2.08232 2.82245 2.45287 2.45189C2.82342 2.08134 3.19565 1.85301 3.63398 1.68301C4.05898 1.51801 4.54232 1.40634 5.25232 1.37301C5.96342 1.34134 6.18954 1.33301 8.00067 1.33301Z" fill="currentColor"></path>
                                                </svg>
                                            </div>
                                            <div>Instagram</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-w-id="c179c474-dbf0-a107-6eba-5d7b4af74d6f" className="footer_bottom">
                            <div className="footer-bottom_element">
                                <div className="text-color-dark">
                                    © 2026 Tirumala Dental Clinic. Crafted by RapidXAI
                                    .
                                </div>
                                <div className="footer-bottom_right">
                                    <div className="text-color-dark">
                                        © 2026 Tirumala Dental Clinic
                                    </div>
                                    <div className="footer-bottom_right-divider"></div>
                                    <a href="/privacy" className="footer-menu_link w-inline-block">
                                        <div>Privacy Policy</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
      )}
    </>
  );
}
