import { render } from "@react-email/render";
import { Email } from "smtp-js-mailer";

import Contact from "../emails/Contact";

const host = import.meta.env.VITE_EMAILAPI_HOST;
const port = import.meta.env.VITE_EMAILAPI_PORT;
const user = import.meta.env.VITE_EMAILAPI_USER;
const from = import.meta.env.VITE_EMAILAPI_FROM;
const to = import.meta.env.VITE_EMAILAPI_TO;
const pass = import.meta.env.VITE_EMAILAPI_PASS;

const sendEmail = async ({ data }) => {
  const results = await Email.send({
    Host: host,
    Port: port,
    Username: user,
    Password: pass,
    To: to,
    From: from,
    Subject: "Alguém lhe enviou um e-mail!",
    Body: render(<Contact formData={data} />),
  });
  return results;
};

export default sendEmail;
