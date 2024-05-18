import { Html, Tailwind, Section } from "@react-email/components";

import config from "../../tailwind.config";

const Contact = ({ formData }) => {
  const { discord, email, howReach, message, name, pref, reason } = formData;
  const splitMessage = message.split("\n");
  const emptyCount = splitMessage.filter((item) => item === "").length;
  const detRows = splitMessage.length - emptyCount;

  return (
    <Tailwind config={config}>
      <Html
        lang="pt"
        className="flex h-[100dvh] items-center justify-center bg-von-lightGray font-page"
      >
        <Section className="max-h-screen min-h-fit max-w-[700px] rounded-lg bg-von-darkGray p-5 text-von-lightGray shadow-von">
          <table className=" w-full border-separate border-spacing-3">
            <thead>
              <tr>
                <th colSpan={2} className="text-left">
                  <h1 className="font-title">Olá!</h1>
                </th>
              </tr>
              <tr>
                <th colSpan={2} className="text-left">
                  <span>
                    {name} acabou de enviar uma mensagem para você usando o
                    formulário em seu website!
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Motivo:</strong>
                </td>
                <td>{reason}</td>
              </tr>
              <tr>
                <td>
                  <strong>E-mail:</strong>
                </td>
                <td>{email}</td>
              </tr>
              <tr>
                <td>
                  <strong>Discord:</strong>
                </td>
                <td>{discord}</td>
              </tr>
              <tr>
                <td>
                  <strong>Preferência para resposta:</strong>
                </td>
                <td>{pref}</td>
              </tr>
              <tr>
                <td>
                  <strong>Como descobruiu:</strong>
                </td>
                <td>{howReach}</td>
              </tr>
              <tr>
                <td rowSpan={detRows} valign="top">
                  <strong>Detalhes da mensagem:</strong>
                </td>
                <td>{splitMessage.at(0)}</td>
              </tr>
              {splitMessage.map((line, i) => {
                if (i === 0 || line === "") return null;
                return (
                  <tr key={i}>
                    <td>{line}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Section>
      </Html>
    </Tailwind>
  );
};

export default Contact;
