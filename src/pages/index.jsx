import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

import "./pages.sass"

const IndexPage = () => (
  <Layout>
    <div className="home-intro">
      <div className="home-intro-inner">
        <div className="buzzwords">
          <div className="buzzwords-line">
            <div className="buzzword-wrapper">
              <div className="__char __char__1">R</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__2">u</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__3">n</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__4">n</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__5">i</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__6">n</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__7">g</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__8">.</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__9">&nbsp;</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__10">C</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__11">o</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__12">d</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__13">e</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__14">.</div>
            </div>
          </div>
          <div className="buzzwords-line">
            <div className="buzzword-wrapper">
              <div className="__char __char__15">U</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__16">X</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__17">&nbsp;</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__18">D</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__19">e</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__20">s</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char __char__21">i</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__22">g</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__23">n</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__24">.</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__25">&nbsp;</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__26">C</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__26">a</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__27">f</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__28">é</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__29">.</div>
            </div>
          </div>
          <div className="buzzwords-line">
            <div className="buzzword-wrapper">
              <div className="__char  __char__30">L</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__31">e</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__32">a</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__33">r</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__34">n</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__35">i</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__36">n</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__37">g</div>
            </div>
            <div className="buzzword-wrapper">
              <div className="__char  __char__38">.</div>
            </div>
          </div>
        </div>
        <div className="social-links"></div>
        <div className="home-about">
          <p>
            Hello! I’m <strong>Cruz Burgos</strong> a self-taught & driven
            <strong> Designer & Developer</strong> with
            <strong> over 2 experience</strong>. I didn't grow up with a lot of
            technology in <strong>Puerto Rico</strong>, but I have always been
            intersted in <strong>visual animations</strong> and
            <strong> engineering</strong>. Now I’m based in
            <strong> Omaha Nebraska</strong>, United States, working as a
            freelancer while looking for new opportunities.
          </p>
          <p>
            Learn more
            <Link to="/about/"> about me</Link>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
