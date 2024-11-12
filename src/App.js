const App = () => {
  return (
    <div>
      <div id="preloader">
        <div id="loader" />
      </div>
      {/* site header
    ================================================== */}
      <header className="s-header">
        <div className="header-logo">
          <a className="site-logo" href="index.html">
            <img src="images/logo.svg" alt="Homepage" />
          </a>
        </div>
        <nav className="header-nav-wrap">
          <ul className="header-main-nav">
            <li className="current">
              <a className="smoothscroll" href="#intro" title="intro">
                Intro
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="services">
                Services
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works" title="works">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="contact us">
                Say Hello
              </a>
            </li>
          </ul>
          <ul className="header-social">
            <li>
              <a href="#0">
                <i className="fab fa-facebook-f" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-dribbble" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="fab fa-behance" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
        <a className="header-menu-toggle" href="#">
          <span>Menu</span>
        </a>
      </header>{" "}
      {/* end s-header */}
      {/* intro
    ================================================== */}
      <section id="intro" className="s-intro target-section">
        <div className="row intro-content">
          <div className="column large-9 mob-full intro-text">
            <h3>Hello, I'm John Doe</h3>
            <h1>
              Digital Designer <br />
              and Web Developer <br />
              Based In Somewhere.
            </h1>
          </div>
          <div className="intro-scroll">
            <a href="#about" className="intro-scroll-link smoothscroll">
              Scroll For More
            </a>
          </div>
          <div className="intro-grid" />
          <div className="intro-pic" />
        </div>{" "}
        {/* end row */}
      </section>{" "}
      {/* end intro */}
      {/* about
    ================================================== */}
      <section id="about" className="s-about target-section">
        <div className="about-me">
          <div className="row heading-block" data-aos="fade-up">
            <div className="column large-full">
              <h2 className="section-heading">About Me</h2>
            </div>
          </div>
          <div className="row about-me__content" data-aos="fade-up">
            <div className="column large-full about-me__text">
              <p className="lead">
                Nulla aspernatur nam et accusantium. Tempore delectus
                dignissimos aut ab commodi. Labore et cupiditate temporibus odio
                debitis eaque. Officia provident aut iste et dicta perferendis.
                Velit iure adipisci. Molestiae qui fuga rerum facilis.
              </p>
              <p>
                Reprehenderit quia id facilis nihil odit perferendis fugiat
                quidem voluptas. Non ratione tenetur. Quis earum quia deleniti
                fugit fugiat minus omnis. Iure dolore dolorum. Aspernatur quos
                cumque ea dolorum nemo nihil beatae magnam. Qui molestiae rem.
                Maxime enim provident ipsum reprehenderit tenetur. Et cupiditate
                repellendus. Et modi ipsum aut harum. Ratione alias.
              </p>
              <p>
                Rerum consequatur dolore quae. Qui excepturi facilis quam quae
                quasi. Mollitia occaecati minus voluptas veniam. Qui excepturi
                facilis quam quae quasi. Mollitia occaecati minus voluptas
                veniam. Est est occaecati dolor qui aut et eum. Aspernatur quos
                cumque ea dolorum nemo nihil beatae magnam. Qui molestiae rem.
              </p>
              <p>
                Maxime enim provident ipsum reprehenderit tenetur. Et cupiditate
                repellendus. Et modi ipsum aut harum. Ratione alias sed. Rerum
                consequatur dolore quae. Qui excepturi facilis quam quae quasi.
                Mollitia occaecati minus voluptas veniam. Est est occaecati
                dolor qui aut et eum. Aspernatur quos cumque ea dolorum nemo
                nihil beatae magnam. Qui molestiae rem. Aspernatur quos cumque
                ea dolorum nemo nihil. Qui molestiae rem.
              </p>
            </div>
          </div>
          <div className="row about-me__buttons">
            <div className="column large-half tab-full" data-aos="fade-up">
              <a href="#0" className="btn btn--stroke full-width">
                Hire Me
              </a>
            </div>
            <div className="column large-half tab-full" data-aos="fade-up">
              <a href="#0" className="btn btn--primary full-width">
                Download CV
              </a>
            </div>
          </div>
        </div>{" "}
        {/* end about-me */}
        <div className="about-experience">
          <div className="row heading-block" data-aos="fade-up">
            <div className="column large-full">
              <h2 className="section-heading">Work &amp; Education</h2>
            </div>
          </div>
          <div className="row about-experience__timeline">
            <div className="column large-half tab-full" data-aos="fade-up">
              <div className="timeline">
                <div className="timeline__icon-wrap">
                  <span className="timeline__icon timeline__icon--work" />
                </div>
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">July 2018 - Present</p>
                    <h3 className="item-title">Awesome Studio</h3>
                    <h5>Lead Designer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">July 2017 - June 2018</p>
                    <h3 className="item-title">Super Cool Agency</h3>
                    <h5>Frontend Developer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">
                      March 2016 - June 2017
                    </p>
                    <h3 className="item-title">Epic Design Studio</h3>
                    <h5>Frontend Developer</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="column large-half tab-full" data-aos="fade-up">
              <div className="timeline">
                <div className="timeline__icon-wrap">
                  <span className="timeline__icon timeline__icon--education" />
                </div>
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">July 2011 - June 2015</p>
                    <h3 className="item-title">University of Life</h3>
                    <h5>Master Degree</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">July 2009 - June 2011</p>
                    <h3 className="item-title">State Design University</h3>
                    <h5>Bachelor Degree</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
                <div className="timeline__block">
                  <div className="timeline__bullet" />
                  <div className="timeline__header">
                    <p className="timeline__timeframe">July 2005 - June 2009</p>
                    <h3 className="item-title">School of Hard Knocks</h3>
                    <h5>Bachelor Degree</h5>
                  </div>
                  <div className="timeline__desc">
                    <p>
                      Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in
                      magna consectetur nisi cupidatat laboris esse eiusmod
                      deserunt aute do quis velit esse sed Ut proident cupidatat
                      nulla esse cillum laborum occaecat nostrud sit dolor
                      incididunt amet est occaecat nisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end about-experience */}
      </section>{" "}
      {/* end s-about */}
      {/* services
    ================================================== */}
      <section id="services" className="s-services ss-dark target-section">
        <div className="shadow-overlay" />
        <div
          className="row heading-block heading-block--center"
          data-aos="fade-up"
        >
          <div className="column large-full">
            <h2 className="section-heading section-heading--centerbottom">
              Capabilities
            </h2>
            <p className="section-desc">
              My passion and goal is to help you make your business standout.
            </p>
          </div>
        </div>{" "}
        {/* end heading-block */}
        <div className="row services-list block-large-1-3 block-medium-1-2 block-tab-full">
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Brand Identity</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Illustration</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Web Design</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Product Strategy</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">UI/UX Design</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
          <div className="column item-service" data-aos="fade-up">
            <div className="item-service__content">
              <h4 className="item-title">Mobile Design</h4>
              <p>
                Sit ut cum molestiae. Dolore ducimus qui quasi. Fugiat
                consequatur sit vel illum vel et a delectus. Vel sequi vitae
                voluptatem perspiciatis eligendi. Voluptatibus optio natus
                asperiores est commodi amet quia architecto. Dolores
                necessitatibus et.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* end services-list */}
      </section>{" "}
      {/* end s-services */}
      {/* CTA
    ================================================== */}
      <section className="s-cta ss-dark">
        <div
          className="row heading-block heading-block--center"
          data-aos="fade-up"
        >
          <div className="column large-full">
            <h2 className="section-desc">Need a great reliable web hosting?</h2>
          </div>
        </div>{" "}
        {/* end heading-block */}
        <div className="row cta-content" data-aos="fade-up">
          <div className="column large-full">
            <p>
              We highly recommend{" "}
              <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
              Powerful web and Wordpress hosting. Guaranteed. Starting at $2.95
              per month.
            </p>
            <a
              href="https://www.dreamhost.com/r.cgi?287326"
              className="btn full-width"
            >
              Get Started
            </a>
          </div>
        </div>{" "}
        {/* end ad-content */}
      </section>{" "}
      {/* end s-cta */}
      {/* works
    ================================================== */}
      <section id="works" className="s-works target-section">
        <div
          className="row heading-block heading-block--center"
          data-aos="fade-up"
        >
          <div className="column large-full">
            <h2 className="section-heading section-heading--centerbottom">
              Selected Works
            </h2>
            <p className="section-desc">
              Here are some of my selected works I have done lately. Feel free
              to check them out.
            </p>
          </div>
        </div>{" "}
        {/* end heading-block */}
        <div className="masonry-wrap">
          <div className="masonry">
            <div className="grid-sizer" />
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-city-building.jpg"
                    className="thumb-link"
                    title="Shutterbug"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/city-building.jpg"
                      srcSet="images/portfolio/city-building.jpg 1x, images/portfolio/city-building@2x.jpg 2x"
                      alt
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">City Building</h4>
                  <p className="item-folio__cat">Branding</p>
                </div>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-woodcraft.jpg"
                    className="thumb-link"
                    title="Woodcraft"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/woodcraft.jpg"
                      srcSet="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x"
                      alt
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">Woodcraft</h4>
                  <p className="item-folio__cat">Web Design</p>
                </div>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-beetle.jpg"
                    className="thumb-link"
                    title="The Beetle Car"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/the-beetle.jpg"
                      srcSet="images/portfolio/the-beetle.jpg 1x, images/portfolio/the-beetle@2x.jpg 2x"
                      alt
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">The Beetle</h4>
                  <p className="item-folio__cat">Web Development</p>
                </div>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-shutterbug.jpg"
                    className="thumb-link"
                    title="Grow Green"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/shutterbug.jpg"
                      srcSet="images/portfolio/shutterbug.jpg 1x, images/portfolio/shutterbug@2x.jpg 2x"
                      alt
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">Shutterbug</h4>
                  <p className="item-folio__cat">Branding</p>
                </div>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-lamp.jpg"
                    className="thumb-link"
                    title="Guitarist"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/lamp.jpg"
                      srcSet="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x"
                      alt
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">Lamp</h4>
                  <p className="item-folio__cat">Web Design</p>
                </div>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-fuji.jpg"
                    className="thumb-link"
                    title="Palmeira"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/fuji.jpg"
                      srcSet="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x"
                      alt
                    />
                  </a>
                  <a
                    href="https://www.behance.net/"
                    className="item-folio__project-link"
                    title="Project link"
                    target="_blank"
                    rel="noreferrer"
                  />
                </div>
                <div className="item-folio__text">
                  <h4 className="item-folio__title">Fuji</h4>
                  <p className="item-folio__cat">Web Design</p>
                </div>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
          </div>{" "}
          {/* end masonry */}
        </div>{" "}
        {/* end masonry-wrap */}
      </section>{" "}
      {/* end s-work */}
      {/* testimonies
    ================================================== */}
      <section className="s-testimonials">
        <div className="row testimonials" data-aos="fade-up">
          <div className="column large-full testimonials__slider">
            <div className="testimonials__slide">
              <p>
                Molestiae incidunt consequatur quis ipsa autem nam sit enim
                magni. Voluptas tempore rem. Explicabo a quaerat sint autem
                dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga
                rem nihil nostrum. Laudantium quia consequatur molestias
                delectus culpa.
              </p>
              <div className="testimonials__info">
                <img
                  src="images/avatars/user-02.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <cite className="testimonials__cite">
                  <strong>Tim Cook</strong>
                  <span>CEO, Apple</span>
                </cite>
              </div>
            </div>{" "}
            {/* end testimonials__slide */}
            <div className="testimonials__slide">
              <p>
                Excepturi nam cupiditate culpa doloremque deleniti repellat.
                Veniam quos repellat voluptas animi adipisci. Nisi eaque
                consequatur. Voluptatem dignissimos ut ducimus accusantium
                perspiciatis. Quasi voluptas eius distinctio. Atque eos maxime.
              </p>
              <div className="testimonials__info">
                <img
                  src="images/avatars/user-01.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <cite className="testimonials__cite">
                  <strong>Sundar Pichai</strong>
                  <span>CEO, Google</span>
                </cite>
              </div>
            </div>{" "}
            {/* end testimonials__slide */}
            <div className="testimonials__slide">
              <p>
                Repellat dignissimos libero. Qui sed at corrupti expedita
                voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                Autem eaque officia cum exercitationem sunt voluptatum
                accusamus. Quasi voluptas eius distinctio. Voluptatem
                dignissimos ut.
              </p>
              <div className="testimonials__info">
                <img
                  src="images/avatars/user-04.jpg"
                  alt="Author image"
                  className="testimonials__avatar"
                />
                <cite className="testimonials__cite">
                  <strong>Satya Nadella</strong>
                  <span>CEO, Microsoft</span>
                </cite>
              </div>
            </div>{" "}
            {/* end testimonials__slide */}
          </div>{" "}
          {/* end testimonials__slider */}
        </div>{" "}
        {/* end testimonials */}
      </section>{" "}
      {/* end s-testimonials */}
      {/* contact
    ================================================== */}
      <section id="contact" className="s-contact ss-dark target-section">
        <div className="row heading-block" data-aos="fade-up">
          <div className="column large-full">
            <h2 className="section-heading">Get In Touch</h2>
          </div>
        </div>
        <div className="row contact-main" data-aos="fade-up">
          <div className="column large-full">
            <p className="contact-email">
              <a href="mailto:#0">hello@epitome.com</a>
            </p>
            <p className="section-desc">
              I'm happy to connect, listen and help. Let's work together and
              build something awesome. Let's turn your idea to an even greater
              product.
              <a href="mailto:#0">Email Me</a>.
            </p>
          </div>
        </div>
        <div
          className="row contact-infos"
          data-aos="fade-up"
          data-aos-anchor=".contact-main"
        >
          <div className="column large-5 medium-full contact-phone">
            <h4>Call Me</h4>
            <a href="tel:197-543-2345">+197 543 2345</a>
          </div>
          <div className="column large-7 medium-full contact-social">
            <h4>Social</h4>
            <ul>
              <li>
                <a href="#0" title="Facebook">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#0" title="Twitter">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#0" title="Instagram">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>{" "}
        {/* end contact-infos */}
      </section>{" "}
      {/* end s-contact */}
      {/* footer
    ================================================== */}
      <footer>
        <div className="row">
          <div className="column large-full ss-copyright">
            <span>© Copyright Epitome 2019</span>
            <span>
              Design by <a href="https://www.styleshout.com/">StyleShout</a>
            </span>
          </div>
          <div className="ss-go-top">
            <a className="smoothscroll" title="Back to Top" href="#top" />
          </div>
        </div>
      </footer>
      {/* photoswipe background
    ================================================== */}
      <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />{" "}
              <button
                className="pswp__button pswp__button--share"
                title="Share"
              />{" "}
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />{" "}
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip" />
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />{" "}
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
      {/* end photoSwipe background */}
      {/* Java Script
    ================================================== */}
    </div>
  );
};

export default App;
