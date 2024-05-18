import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";

import {
  sendContato,
  setFormData,
} from "../../../features/emails/emails.slice";
import {
  reasonEn as reason,
  prefEn as pref,
  howReachEn as howReach,
} from "../../../constants/siteConstants";
// import sendEmail from "../../../services/apiEmail";

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
      {isSending && <Loader text="Sending email..." />}
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
              required: "Please, enter your name or nickname",
            }),
          }}
          errors={errors?.name}
          label="How should I call you?"
          placeholder="Provide your name or nickname"
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
                required: "Please provide a contact e-mail",
              }),
            }}
            errors={errors?.email}
            label="Do you have a contact e-mail?"
            placeholder="example@email.com"
            id="email"
          />
          <InputText
            type="text"
            variant="filled"
            register={{
              ...register("discord", {
                required: "Please provide your Discord nickname",
              }),
            }}
            errors={errors?.discord}
            label="Are you a Discord user?*"
            placeholder="youDiscordNickname"
            id="discord"
          />
        </Grid>
        <InputCombobox
          variant="filled"
          placeholder="Select one option"
          label="Why are you contacting me?"
          options={reason}
          id="reason"
          register={{
            ...register("reason", {
              required: "Please select the reason of contact",
            }),
          }}
          errors={errors?.reason}
          control={control}
          noOptionsText="The entered reason is invalid"
        />
        <InputCombobox
          variant="filled"
          placeholder="Select one option"
          label="How to reach you back?"
          options={pref}
          id="pref"
          register={{
            ...register("pref", {
              required: "Please tell me how I can reach you back",
            }),
          }}
          errors={errors?.pref}
          control={control}
          noOptionsText="The entered method is invalid"
        />
        <InputCombobox
          variant="filled"
          placeholder="Select one option"
          label="How did you find me?"
          options={howReach}
          id="howReach"
          register={{
            ...register("howReach", {
              required: "Please tell me how did you find me",
            }),
          }}
          errors={errors?.howReach}
          control={control}
          noOptionsText="The entered method is invalid"
        />

        <InputTextArea
          className="col-span-3 grid"
          label="Which message you wish to send?"
          variant="filled"
          id="message"
          register={{
            ...register("message", {
              required: "Please use the field above to write your message",
              maxLength: {
                value: 2000,
                message: `The message should have the max of 2000 characters`,
              },
            }),
          }}
          limit={2000}
          errors={errors?.message}
          rows={5}
          placeholder="Write your message here..."
          charCount={messageCount}
        />
        <InputCheckbox
          id="checkBox"
          register={{
            ...register("checkBox", {
              required: "You need to accept the terms and conditions above",
            }),
          }}
          errors={errors?.checkBox}
          className="col-span-3"
          control={control}
        >
          I aknowledge that any information provided here will allow von
          Schappler to contact me, if necessary. I also aknowledge that no
          information will be shared by von Schappler without my consentiment.
        </InputCheckbox>
        <span className="col-span-3 text-center text-xs">
          * If you are not a <strong>Discord</strong> user, fill in the field
          with "<strong>I'm not a discord user</strong>" in order to allow
          sending the message.
        </span>

        <FormActions className="col-span-3 w-[100%]">
          <Button
            disabled={Boolean(Object.keys(errors).length)}
            type="submit"
            className="grow px-6 transition-all duration-700 md:w-fit md:grow-0"
          >
            Send message
          </Button>
          <Button
            type="reset"
            onClick={resetForm}
            className="inverted grow px-6 transition-all duration-700 md:w-[150px] md:grow-0"
          >
            Clear fields
          </Button>
        </FormActions>
      </Form>
      {error && (
        <Toaster
          message="Unable to send message. Try again later..."
          className="errorMessage"
          severity="error"
          open={true}
        />
      )}
      {success && (
        <Toaster
          message={`Message sent with success! I'll contact you soon!`}
          className="successMessage"
          severity="success"
        />
      )}
    </>
  );
};

export { ContentContact };
