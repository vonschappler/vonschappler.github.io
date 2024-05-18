import { Grid } from "@mui/material";

import Title from "../../../../../ui/Title";
import { Link, NavLink } from "react-router-dom";
import { Settings } from "@mui/icons-material";

const NewWebsite = () => {
  return (
    <Grid container className="flex flex-col justify-center gap-4">
      <p>
        My website was redesigned and those are good news to share! Yes, you
        read it right. After years, I finally decided to update my website,
        meaning this is the time to share with everyone the new style, some new
        options and least, but not last (because there is much more to come in
        the future) introduce the mobible version for it (which is still under
        development).
      </p>
      <Grid item className="flex w-full grow flex-col">
        <Title divider>
          <h2 className="text-center">Reasons for the update</h2>
        </Title>
      </Grid>
      <p>
        Well, it's been a while since I had given some attention to my website,
        meaning the previous design was made using some (I would say) outdated
        tech-stack. This means that webdesign has changed a lot since the last
        time I updated my website and I have done nothing to make this site
        compatible with the new technologies used nowadays.
      </p>
      <p>
        After trying to find the best moment to update it and after all these
        years without a single update, I had the oportunity to "relearn React".
        I managed to make some online courses which allowed me to get in touch
        with the last updates on this technology, allowing me to have some nice
        ideas and provided a better understandment on websites design.
      </p>
      <p>
        The results of all the acquired knowledge can be seen{" "}
        <NavLink to="/projects" target="_blank" className="pageLink">
          on my projects page
        </NavLink>
        . With the whole new skills learnt, I then took the decision to show
        everyone what I'm capable of doing as well as how I'm capable of
        improving and convert an old website design into something modern with a
        better look and feel in a way that fits to my personal purposes.
      </p>
      <h3 className="text-center">
        The final result, this brand new style for my personal website!
      </h3>
      <Grid item className="flex w-full grow flex-col">
        <Title divider>
          <h2 className="text-center">About the site improvements</h2>
        </Title>
      </Grid>
      <p>
        By improvements, I would like detail some general changes to the whole
        design and pages changes, as described below:
      </p>
      <ul>
        <li>
          The website is now a <strong>SPA (Single Page Application)</strong>{" "}
          made with using Vite, React and some other 'React related'
          technologies, as for example techologias to manage forms
        </li>
        <li>
          Addition of both "light mode" and "dark mode" (which can be accessed
          on by clicking the <Settings className="-mb-[0.35rem]" /> icon) to
          improve visibility of the website, which initial selection is made
          based on the users Operational System settings
        </li>
        <li>
          Addition of a contact form, to make it easier for anyone to contact me
        </li>
        <li>
          A mobile-friendly design, which allow anyone to access the website
          from any device *
        </li>
        <li>
          Smoother animation models to provide better visuals to the website
        </li>
      </ul>
      <span className="text-center text-xs">
        * This is under development and will be released as soon as possible
      </span>
      <p>
        With this new desing I wish to achieve more visibility and provide
        improved capabilities to this site, meaning not only{" "}
        <strong>personal satisfaction</strong>, but also{" "}
        <strong>better user experience</strong> while viewing this website!
      </p>
      <Grid item className="flex w-full grow flex-col">
        <Title divider>
          <h2 className="text-center">
            There will be a frequency for the updates?
          </h2>
        </Title>
      </Grid>
      <p>
        The short answer to this question is: <strong>"No."</strong>
      </p>
      <p>
        In a explicit way, I would need to detail the reasons for it, which some
        of them are listed below:
      </p>
      <ul>
        <li>
          Updating a website, even though I'm making use of a tech-stack which
          would help me to implement updates faster, takes time, and at this
          moment, <strong>free time</strong> (since I take my free time to work
          on personal projects) is not something I have to spare
        </li>
        <li>
          I'm an autistc individual, which means, I may lose interest in
          updating this based on my "mood"
        </li>
        <li>
          Because I'm working on other projects, most of my time is being
          dedicated to the other projects, most of them being developed for
          paying clients, which implies I have deadlines to cover
        </li>
      </ul>
      <p>
        I could list a lot more reasons, but I belive those suffice for now.
        What really matters is that I finally managed to get time to update my
        website and THIS IS THE RESULT of much work to give you always the best!
      </p>
      <span className="text-center text-xs">
        The old website{" "}
        <Link
          className="pageLink"
          to="https://rebrand.ly/vonOldSite"
          target="_blank"
        >
          can still be accessed
        </Link>{" "}
        in case there is something missing on the new version
      </span>
    </Grid>
  );
};

export { NewWebsite };
