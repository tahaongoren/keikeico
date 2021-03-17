import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'





function HomePage() {
    return (
        <div id="main">

        <Head>
            <title>KeiKei</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    <header>
        <nav>
            <div className="nav-container">
                <div className="toggle-menu">
                     <Link href="">
                        <a>
                         <div className="line"></div>
                         <div className="line"></div>
                         <div className="line"></div>
                        </a>
                     </Link>
                </div>
                     <Link href="#">
                        <a className="site-logo">
                            <Image
                                src="/logo.jpg"
                                width={300}
                                height={150}

                            />
                        </a>
                     </Link>
            </div>
            <div className="nav-svg-container">
                <Link href="#"><a className="navbar-svg-container-link"><svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                        d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                </svg></a></Link>
                <Link href="#"><a className="navbar-svg-container-link"><svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                        d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                </svg></a></Link>
                <Link href="#"><a className="navbar-svg-container-link"><svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                        d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"></path>
                </svg></a></Link>
            </div>
        </nav>
    </header>
    <section id="firstSection">
    <div className="section-text-container">
        <p className="section-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, saepe!</p>
        <h4 className="section-title">HAPPY <br/>VALENTINES DAY</h4>
        <h6 className="section-subtitle">WINTER 2021</h6>
    </div>
        <Link href="#"><a className="first-section-link">DISCOVER NOW</a></Link>

        <div className="svg-container">
         <svg className="svg-icon svg-icon-prev" viewBox="0 0 20 20">
             <path fill="#888"
                   d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
         </svg>
         <svg className="svg-icon svg-icon-next" viewBox="0 0 20 20">
             <path fill="#888"
                   d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
         </svg>
     </div>
    </section>
    <section className="section">
            <div className="section-text-container second-section-text-container ">
                <h4 className="section-title">HAPPY <br/>VALENTINES DAY</h4>
                <h6 className="section-subtitle">WINTER 2021</h6>
                <Link href="#"><a className="section-link">DISCOVER NOW</a></Link>
            </div>
    </section>
    <section className="section third-section">
        <div className="third-section-container">
            <div className="third-section-title-container">
            <h4 className="product-title product-title-first">ÖNE ÇIKAN</h4><h4 className="product-title">ÜRÜNLER</h4>
            </div>
            <div className="third-section-product-container">
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={300}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={300}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={300}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={300}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={300}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>


            </div>
                <div className="third-section-svg-container">
                <svg className="svg-icon svg-previous-icon" viewBox="0 0 20 20">
                    <path fill="#888"
                          d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>
            </div>
            <div className="third-section-svg-container">
                <svg className="svg-icon svg-next-icon" viewBox="0 0 20 20">
                    <path fill="#888"
                          d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>
            </div>
        </div>
        <div className="radio-container">
            <input type="radio" name="image-slider" checked="checked" id="trigger1"/>
            <label htmlFor="trigger1"></label>
            <input type="radio" name="image-slider" id="trigger2"/>
            <label htmlFor="trigger2"></label>
            <input type="radio" name="image-slider" id="trigger3"/>
            <label htmlFor="trigger3"></label>
            <input type="radio" name="image-slider" id="trigger4"/>
            <label htmlFor="trigger4"></label>
            <input type="radio" name="image-slider" id="trigger5"/>
            <label htmlFor="trigger5"></label>
            <input type="radio" name="image-slider" id="trigger6"/>
            <label htmlFor="trigger6"></label>
            <input type="radio" name="image-slider" id="trigger7"/>
            <label htmlFor="trigger7"></label>
            <input type="radio" name="image-slider" id="trigger8"/>
            <label htmlFor="trigger8"></label>

        </div>

    </section>
    <section className="section fourth-section">
        <div className="section-text-container fourth-section-text-container ">
            <h4 className="section-title fourth-section-title">NEW <br/>COLLECTION</h4>
            <h6 className="section-subtitle fourth-section-subtitle">WINTER 2021</h6>
            <Link href="#"><a className="section-link fourth-section-link">SHOP NOW</a></Link>
        </div>
    </section>
    <section className="section fifth-section">
        <div className="fifth-section-container">
            <div className="fifth-section-svg-container">
                <svg className="svg-icon fifth-svg-icon-prev" viewBox="0 0 20 20">
                    <path fill="#888"
                          d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
                </svg>
                <svg className="svg-icon fifth-svg-icon-next" viewBox="0 0 20 20">
                    <path fill="#888"
                          d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                </svg>
            </div>
            <div className="fifth-section-product-container">
                <div className="product-container">

                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={400}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={250}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={300}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">
                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={250}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
                <div className="product-container">

                    <Image
                        src="/200x400.jpg"
                        width={200}
                        height={350}

                    />
                    <p className="product-title">DERI UZUN YAGMURLUK</p>
                    <h4 className="product-price">$ 299</h4>
                </div>
            </div>
            <div className="fifth-section-title-container">
                <h4 className="fifth-section-title">KOMBİNİNİ</h4><h4 className="fifth-section-title">TAMAMLA</h4>
            </div>
        </div>
    </section>
    <section className="section sixth-section">
        <div className="sixth-section-container">

             <div className="sixth-section-container-items sixth-section-container-items1">
                <h3 className="sixth-section-title section-title">TEDDY <br/>COLECTION</h3>
                <span className="sixth-section-text section-text">WINTER 2021</span>
                <Link href="#"><a className="sixth-section-link section-link">DISCOVER NOW</a></Link>
             </div>
             <div className="sixth-section-container-products-img sixth-section-container-products-img1">
                 <Image
                     src="/200x400.jpg"
                     width={300}
                     height={400}

                 />
             </div>


            <div className="sixth-section-container-items sixth-section-container-items2">
                <h3 className="sixth-section-title section-title">TEDDY <br/>COLECTION</h3>
                <span className="sixth-section-text section-text">WINTER 2021</span>
                <Link href="#"><a className="sixth-section-link section-link">DISCOVER NOW</a></Link>
            </div>
            <div className="sixth-section-container-products-img sixth-section-container-products-img2">
                <Image
                    src="/200x400.jpg"
                    width={300}
                    height={400}

                />
            </div>
        </div>
    </section>
    <footer id="footer">
        <div className="footer-container">
                <div className="footer-container-column footer-grid-area-logo">
                    <Link href="#"><a>
                        <Image
                            src="/logo.png"
                            width={50}
                            height={70}

                        />
                    </a></Link>
                </div>

            <div className="footer-container-column">
                <h4 className="footer-title">KEİKEİ</h4>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
            </div>
            <div className="footer-container-column">
                <h4 className="footer-title">KEİKEİ</h4>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
            </div>
            <div className="footer-container-column">
                <h4 className="footer-title">KEİKEİ</h4>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
                <Link href="#"><a className="footer-link"><p>Mağazalar</p></a></Link>
            </div>
                <div className="footer-container-column footer-grid-area1">
                    <h4 className="footer-title">BÜLTENİMİZE KATILIN</h4>
                    <input type="text" className="footer-input" placeholder="e-posta adresinizi giriniz"/>
                    <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, reiciendis.</p>
                    <p className="copyright">KeiKei all rights reserved</p>
                </div>
                <div className="footer-container-column footer-grid-area2">
                    <h4 className="footer-title">UYGULAMAMIZI İNDİRİN</h4>
                    <div className="footer-download-img">
                        <Link href="#"><a><Image
                            src="/Adsız.png"
                            width={150}
                            height={50}

                        /></a></Link>
                    </div>
                    <div className="footer-download-img">
                        <Link href="#"><a>
                            <Image
                                src="/Adsız.png"
                                width={150}
                                height={50}

                        />
                        </a></Link>
                    </div>
                </div>
        </div>
    </footer>
    <div className="footer-nav">
            <p className="footer-nav-text">TÜM TÜRKİYE'YE ÜCRETSİZ KARGO!</p>
            <p className="footer-nav-text"><Link href="#">YARDIM</Link></p>
        </div>

        </div>

    )
}

export default HomePage
