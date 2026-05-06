/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
// Content should likely be moved to an mdx file.
import React from 'react';

import './vision.scss';

import Layout from '../components/layout';
import Statement from '../components/vision/statement';

function Vision() {
  return (
    <Layout>
      <Statement />
      <div className="half-column">
        <div className="text-block">
          <h3 className="box">Tangible Bits</h3>
          <p>
            In 1997, Hiroshi Ishii &amp; Brygg Ulmer presented their vision of “<a href={`${process.env.GATSBY_MEDIA_LIBRARY}publishedmedia/Papers/349-Tangible%20Bits%20Beyond%20Pixels/Published/PDF`}>Tangible Bits</a>” at the CHI &apos;97 conference. They proposed the concept of a Tangible User Interface (TUI), based on the physical embodiment of digital information and computation, in order to transcend the current dominant paradigm of “Painted Bits” or Graphical User Interfaces (GUI). Humans have evolved a heightened ability to sense and manipulate the physical world, yet the GUI based on intangible pixels takes little advantage of this capacity. The TUI builds upon our natural dexterity by embodying digital information in physical space. TUIs expand the affordances of physical objects, surfaces, and spaces so they can support direct engagement with the digital world.
          </p>
          <p>
            Through designing a variety of TUIs, however, we have learned that they are limited by the rigidity of “atoms” in comparison with the fluidity of “bits.” TUIs have a limited ability to change the form or properties of physical objects in real-time. This constraint can make the physical state of TUIs inconsistent with underlying digital models.
          </p>
        </div>
        <div className="text-block">
          <h3 className="box">Radical Atoms</h3>
          <p>
            To address this issue of inconsistency, we presented our new vision, which we call “<a href={`${process.env.GATSBY_MEDIA_LIBRARY}publishedmedia/Papers/485-Radical%20Atoms%20Beyond%20Tangible/Published/PDF`}>Radical Atoms</a>”, in 2012. Radical Atoms takes a leap beyond Tangible Bits by assuming a hypothetical generation of materials that can change form and appearance dynamically, becoming as reconfigurable as pixels on a screen.
          </p>
          <p>
            Radical Atoms is a computationally transformable and reconfigurable material that is bidirectionally coupled with an underlying digital model (bits) so that dynamic changes in physical form can be reflected in digital states in real-time, and vice versa.
          </p>
          <p>
            Radical Atoms are future materials that can transform their shape, conform to constraints, and inform the users of their affordances. Radical Atoms represent a vision for the future of Human-Material Interaction, in which all digital information has a physical manifestation so that we can interact directly with it. We no longer focus on designing the interface, but rather the material itself becomes the interface, which we refer to as a “Material User Interface (MUI).”
          </p>
        </div>
      </div>
      <div className="text-block">
        <h3 className="box">Seamless Telepresence</h3>
        <p>
          Telepresence has traditionally pursued the idea of “being there and together” by overcoming distance through the use of real-time video communication to digitally connect geographically distributed remote participants.
          In the early 1990s, Professor Ishii explored the vision of “Seamless Telepresence” through systems such as <i>ClearBoard</i> while at <i>NTT Human Interface Laboratories</i>. This work sought to dissolve the boundary between remote collaborators by creating the illusion of a seamless shared workspace, where digital and physical media could be fused. By carefully aligning gaze, gesture, and drawing surfaces, <i>ClearBoard</i> enabled participants to read each other’s gaze and facial expressions while simultaneously interacting over a shared workspace.
        </p>
      </div>
      <div className="text-block">
        <h3 className="box">TeleAbsence</h3>
        <p>
          TeleAbsence proposes a new vision of “Past and Afterlife Telepresence.” Rather than overcoming physical distance, it addresses the profound emotional and temporal distances shaped by fading memories and the loss of loved ones. TeleAbsence embraces absence not as a limitation, but as a fundamental condition and as a new design space.
          Instead of explicit or literal representations, TeleAbsence explores poetic encounters with the digital and physical traces left behind by others. It fosters illusory communication—evoking the feeling of being with those who are no longer present—without relying on synthetic or generative representations of an absent person.
          This vision is deeply inspired by the Portuguese concept of saudade—a longing for people, places, and moments made more poignant by their absence. TeleAbsence is guided by five design principles: presence of absence, illusory communication, materiality of memory, traces of reflection, and remote time, which together create opportunities to revisit and re-experience cherished moments.
          By expanding telepresence to encompass the full spectrum of human existence—from before birth to the afterlife—TeleAbsence offers a framework for engaging with memory, legacy, and loss. Through thoughtful human–computer interaction design, it envisions a future in which personal memories are meaningfully preserved and reconstituted, allowing individuals to reconnect with their past selves and sustain bonds with those who are no longer with us.
          <b>
            TeleAbsence expands our capacity to care, to remember, and to see ourselves as part of a longer human arc (continuum). It is a living medium, stretching across generations and weaving fragments of identity into continuity.
            In this way, memory becomes more than remembrance. It becomes a human bond across time.
          </b>
        </p>
      </div>
      <div className="text-block">
        <h3 className="box">Vision-driven Design</h3>
        <p>
          Looking back on the history of Human-Computer Interaction (HCI), we notice that quantum leaps have rarely resulted from studies on users’ needs; they have instead stemmed from the passion and dreams of visionaries like Dr.  <a href="https://en.wikipedia.org/wiki/Douglas_Engelbart">Douglas Engelbart</a>. By looking beyond current limitations, we believe that vision-driven design is critical to foster these quantum leaps, while also complementing needs-driven and technology-driven design. From Tangible Bits, an early example of our vision-driven research, we shifted to Radical Atoms, which seeks out new guiding principles and concepts to view the world of bits and atoms in a new light, with the goal of trailblazing a new realm in interaction design. From Telepresence to TeleAbsence, we propose a jump from across space to across time, to see ourselves as part of a longer human arc.
          From three approaches in design research — technology-driven, needs-driven, and vision-driven — we focus on the vision-driven approach due to its lifespan. We know that technologies become obsolete in ~1 year, and users’ needs change quickly and dramatically in ~10 years. However, we believe that a clear vision can last beyond our lifespan. While it may be centuries before artists, scientists, and engineers invent the necessary theories and enabling technologies, the exploration of interaction design should begin today.
        </p>
      </div>

    </Layout>
  );
}

export default Vision;

export function Head() {
  return (
    <title>Tangible Media Group | Vision</title>
  );
}
