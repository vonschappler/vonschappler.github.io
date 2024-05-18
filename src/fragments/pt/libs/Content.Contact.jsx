import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";

import {
  sendContato,
  setFormData,
} from "../../../features/emails/emails.slice";
import {
  reasonPt as reason,
  prefPt as pref,
  howReachPt as howReach,
} from "../../../constants/siteConstants";

import Form from "../../../ui/Form";
import FormActions from "../../../ui/Form.Actions";
import Toaster from "../../../ui/Toaster";
import Loader from "../../../ui/Loader";
import InputText from "../../../ui/Form.Input";
import InputTextArea from "../../../ui/Form.TextArea";
import InputCheckbox from "../../../ui/Form.Checkbox";
import InputCombobox from "../../../ui/Form.Combobox";
import Button from "../../../ui/Button";

const ContentContact = () => {
  const { error, success, isSending } = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  const { formState, reset, handleSubmit, control, register, watch } = useForm({
    defaultValues: {
      name: "",
      email: "",
      discord: "",
      reason: "",
      message: "",
      pref: "",
      howReach: "",
      checkBox: false,
    },
  });
  const { errors } = formState;
  const [messageCount, setMessageCount] = useState(0);
  const [message] = watch(["message"]);
  useEffect(() => {
    setMessageCount(message?.length);
  }, [message?.length]);
  const submitForm = async (data) => {
    dispatch(setFormData({ data }));
    dispatch(sendContato({ data }));
    reset();
  };
  const resetForm = () => {
    reset();
  };
  return (
    <>
      {isSending && <Loader text="Enviando e-mail..." />}
      <Form
        className="mx-auto my-5 flex w-[90%] flex-col gap-4 rounded-lg bg-von-teal/25 p-5 shadow-von md:grid md:grid-cols-3"
        onSubmit={handleSubmit(submitForm)}
        control={control}
        noValidate
      >
        <InputText
          autoFocus={true}
          type="text"
          variant="filled"
          register={{
            ...register("name", {
              required: "Por favor entre seu nome ou apelido",
            }),
          }}
          errors={errors?.name}
          label="Como posso lhe chamar?"
          placeholder="Digite seu nome ou apelido"
          className="col-span-3"
          id="name"
        />
        <Grid
          container
          className="col-span-3 flex flex-col gap-4 md:grid md:grid-cols-2"
        >
          <InputText
            type="text"
            variant="filled"
            register={{
              ...register("email", {
                required: "Por favor forneça um e-mail de contato",
              }),
            }}
            errors={errors?.email}
            label="Qual o seu e-mail?"
            placeholder="example@email.com"
            id="email"
          />
          <InputText
            type="text"
            variant="filled"
            register={{
              ...register("discord", {
                required: "Por favor me diga seu nick no Discord",
              }),
            }}
            errors={errors?.discord}
            label="Você usa Discord?*"
            placeholder="youDiscordNickname"
            id="discord"
          />
        </Grid>
        <InputCombobox
          variant="filled"
          placeholder="Escolha uma opção"
          label="Qual o motivo de contato?"
          options={reason}
          id="reason"
          register={{
            ...register("reason", {
              required: "Por favor me diga o motivo de contato",
            }),
          }}
          errors={errors?.reason}
          control={control}
          noOptionsText="A opção digitada não é válida"
        />
        <InputCombobox
          variant="filled"
          placeholder="Escolha uma opção"
          label="Como posso falar contigo?"
          options={pref}
          id="pref"
          register={{
            ...register("pref", {
              required: "Por favor infome como posso retornar",
            }),
          }}
          errors={errors?.pref}
          control={control}
          noOptionsText="A opção digitada não é válida"
        />
        <InputCombobox
          variant="filled"
          placeholder="Escolha uma opção"
          label="Onde me encontrou?"
          options={howReach}
          id="howReach"
          register={{
            ...register("howReach", {
              required: "Por favor me diga como me encontrou",
            }),
          }}
          errors={errors?.howReach}
          control={control}
          noOptionsText="A opção digitada não é válida"
        />

        <InputTextArea
          className="col-span-3 grid"
          label="Qual mensagem deseja enviar?"
          variant="filled"
          id="message"
          register={{
            ...register("message", {
              required:
                "Por favor, use o campo acima para escrever a sua mensagem",
              maxLength: {
                value: 2000,
                message: `A mensagem não pode conter mais que 2000 caracteres`,
              },
            }),
          }}
          limit={2000}
          errors={errors?.message}
          rows={5}
          placeholder="Escreva sua mensagem aqui..."
          charCount={messageCount}
        />
        <InputCheckbox
          id="checkBox"
          register={{
            ...register("checkBox", {
              required: "Você precisa aceitar os termos acima.",
            }),
          }}
          errors={errors?.checkBox}
          className="col-span-3"
          control={control}
        >
          Compreendo que as informações providas neste fomulário permitem com
          que von Schappler entre em contato comigo, se necessário. Também
          compreendo que nenhuma das informações será compartilhada sem meu
          consetimento.
        </InputCheckbox>
        <span className="col-span-3 text-center text-xs">
          * Se você não utiliza o serviço <strong>Discord</strong>, para que
          seja possível enviar o formulário, digite no campo "
          <strong>Não utilizo</strong>".
        </span>

        <FormActions className="col-span-3 w-[100%]">
          <Button
            disabled={Boolean(Object.keys(errors).length)}
            type="submit"
            className="grow px-6 transition-all duration-700 md:w-fit md:grow-0"
          >
            Enviar
          </Button>
          <Button
            type="reset"
            onClick={resetForm}
            className="inverted grow px-6 transition-all duration-700 md:w-[150px] md:grow-0"
          >
            Limpar
          </Button>
        </FormActions>
      </Form>
      {error && (
        <Toaster
          message="Não foi possível enviar a mensagem. Por favor tente novamente mais tarde..."
          className="errorMessage"
          severity="error"
          open={true}
        />
      )}
      {success && (
        <Toaster
          message={`Mensagem enviada com sucesso! Retornarei o contato assim que possível.`}
          className="successMessage"
          severity="success"
        />
      )}
    </>
  );
};

export { ContentContact };
