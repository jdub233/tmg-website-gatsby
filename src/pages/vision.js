import React from "react";

import "./vision.scss";
import gui from "../img/vision-image-gui.jpg";

import Layout from '../components/layout';

export default () => (
    <Layout>
        <div className="vision-statement">
            <h2 className="vision-text">
                The Tangible Media Group, led by
                Professor Hiroshi Ishii, explores the
                Tangible Bits &#38; Radical Atoms visions
                to seamlessly couple the dual world
                of bits and atoms by giving dynamic
                physical form to digital information
                and computation.
            </h2>
            <div className="vision-image">
                <img alt="TUI iceberg" src={gui} />
            </div>
        </div>
        <div className="half-column">
            <div className="text-block">
                <h3 class="box">Tangible Bits</h3>
                <p>
                    In 1997, we presented our vision of “<a href={`${process.env.MEDIA_LIBRARY}publishedmedia/Papers/349-Tangible%20Bits%20Beyond%20Pixels/Published/PDF`}>Tangible Bits</a>” at the CHI '97 conference. We proposed the concept of Tangible User Interface (TUI) that is based on physical embodiment of digital information & computation, in order to go beyond the current dominant paradigm of “Painted Bits” or Graphical User Interface (GUI).
                    Humans have evolved a heightened ability to sense and manipulate the physical world, yet the GUI based on intangible pixels takes little advantage of this capacity. The TUI builds upon our dexterity by embodying digital information in physical space. TUIs expand the affordances of physical objects, surfaces, and spaces so they can support direct engagement with the digital world.
                </p>
                <p>
                    Through the design of a variety of TUIs, however, we have learned that TUIs are limited by the rigidity of “atoms” in comparison with the fluidity of “bits”. TUIs have limited ability to change the form or properties of physical objects in real time. This constraint can make the physical state of TUIs inconsistent with the underlying digital models.
                </p>
            </div>
            <div className="text-block">
                <h3 class="box">Radical Atoms</h3>
                <p>
                    To address this challenge, we presented our new vision, “<a href={`${process.env.MEDIA_LIBRARY}publishedmedia/Papers/485-Radical%20Atoms%20Beyond%20Tangible/Published/PDF`}>Radical Atoms</a>”, in 2012. Radical Atoms takes a leap beyond Tangible Bits by assuming a hypothetical generation of materials that can change form and appearance dynamically, becoming as reconfigurable as pixels on a screen. <br />Radical Atoms is a computationally transformable and reconfigurable material that is bidirectionally coupled with an underlying digital model (bits) so that dynamic changes of physical form can be reflected in digital states in real time, and vice versa.
                </p>
                <p>
                    Radical Atoms is the future material that can transform their shape, conform to constraints, and inform the users of their affordances. Radical Atoms is a vision for the future of human-material interaction, in which all digital information has a physical manifestation so that we can interact directly with it. We no longer think of designing the interface, but rather of the interface itself as material. We may call it “Material User Interface (MUI).”
                </p>
            </div>
        </div>
        <div className="text-block">
            <h3 class="box">Vision–driven Design Research</h3>
            <p>
                Looking back on the history of HCI, we notice that quantum leaps have rarely resulted from studies on users’ needs; they have instead stemmed from the passion and dreams of visionaries like <a href="http://en.wikipedia.org/wiki/Douglas_Engelbart">Douglas Engelbart</a>. By looking beyond current limitations, we believe that vision-driven design is critical to foster these quantum leaps, while also complementing needs-driven and technology-driven design. From Tangible Bits, an early example of our vision-driven research, we are shifting to Radical Atoms, which seeks out new guiding principles and concepts to view the world of bits and atoms with new eyes, with the goal of trailblazing a new realm in interaction design.
            </p>
            <p>
                From the three approaches in design research: technology-driven, needs-driven, and vision-driven, we focus on the vision-driven approach due to its lifespan. We know that technologies become obsolete in ~1 year, users’ needs change quickly and dramatically in ~10 years. However, we believe that a clear vision can last beyond our lifespan. While we might need to wait decades before atom hackers (like material scientists or self-organizing nano-robot engineers) can invent the necessary enabling technologies for Radical Atoms, we strongly believe the exploration of interaction design should begin from today.
            </p>
        </div>

    </Layout>
);
