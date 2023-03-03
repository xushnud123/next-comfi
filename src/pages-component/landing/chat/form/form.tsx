import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import * as CompanyEmailValidator from "company-email-validator";
import { AnimatePresence, domMax, LazyMotion, m } from "framer-motion";
import Select from "react-select";

import close from "/public/assets/images/form/Close.webp";
import pdf from "/public/assets/images/form/Frame 2.svg";
import successImg from "/public/assets/images/form/illustrations 7.svg";
import error from "/public/assets/images/icons/Warning.svg";
import logo from "/public/assets/images/landing/Logo.svg";

import cls from "./form.module.scss";

interface FormProps {
  onValidated: (e: { EMAIL: string; FNAME: string; ACV: string }) => void;
  status: any;
  message: string;
  onState: Dispatch<SetStateAction<boolean>>;
}

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "0-$5k", label: "0-$5k" },
  { value: "$5k- $10k", label: "$5k- $10k" },
  { value: "$10k - $20k", label: "$10k - $20k" },
  { value: "$20k and above", label: "$20k and above" },
];

const colorStyles = {
  control: (baseStyles: any, state: any) => ({
    ...baseStyles,
    border: state.isActive && "3px solid rgba(96, 255, 131, 0.15)",
  }),
  option: (baseStyles: any, state: any) => ({
    ...baseStyles,
    background: state.isDisabled && "rgba(0, 0, 0, 0.03)",
  }),
  // option: (styles, { data, isFocused, isSelect, isDisabled }) => ({ ...styles })
};

const Form: FC<FormProps> = ({ onValidated, status, message, onState }) => {
  const [state, setState] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [auth, setAuth] = useState<{
    name: string;
    email: string;
    select: OptionType | string;
  }>({
    name: "",
    email: "",
    select: "",
  });

  useEffect(() => {
    setState(status);
  }, [status]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!CompanyEmailValidator.isCompanyEmail(auth.email)) {
      setErrorEmail(true);
      return;
    }
    if (CompanyEmailValidator.isCompanyEmail(auth.email)) {
      auth.email &&
        auth.name &&
        auth.select &&
        auth.email.indexOf("@") > -1 &&
        onValidated({
          EMAIL: auth.email,
          FNAME: auth.name,
          // @ts-ignore
          ACV: auth.select.value,
        });
    }

    setAuth({ name: "", email: "", select: options[0] });
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.container}>
        <div className={cls.left}>
          <div className={cls.closeBtn}>
            <button type='button' onClick={() => onState(false)}>
              <Image src={close} className={cls.close} alt='img not found' />
            </button>
          </div>
          <div className={cls.logo}>
            <h1 className={cls.title}>Flexible payments by</h1>
            <Image src={logo} alt='img not found' />
            <div className={cls.pdf2}>
              <Image src={pdf} alt='' />
            </div>
          </div>
          <div className={cls.card}>
            <h2 className={cls.description}>
              <span>5-Step </span>
              guide <br /> on revenue <br /> growth
            </h2>
          </div>
          <div className={cls.pdf}>
            <Image src={pdf} alt='img not found' />
          </div>
        </div>
        <div className={cls.right}>
          <div className={cls.closeBtn}>
            <button type='button' onClick={() => onState(false)}>
              <Image src={close} className={cls.close} alt='img not found' />
            </button>
          </div>
          <AnimatePresence
            initial={false}
            mode='wait'
            onExitComplete={() => null}>
            <LazyMotion features={domMax}>
              {state === "success" ? (
                <m.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  key='1'
                  className={cls.successMsg}>
                  <div className={cls.message}>
                    <Image src={successImg} alt='img not found' />
                    <h1 className={cls.title}>Thank you!</h1>
                    <h2 className={cls.description}>
                      Your guide is on its way to your inbox. Remember to check
                      spam folder in case it’s not there.
                    </h2>
                  </div>
                  <button
                    type='button'
                    onClick={() => setState("")}
                    className={cls.changeBtn}>
                    Change Email
                  </button>
                </m.div>
              ) : (
                <m.div
                  initial={{ scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                  key='2'
                  className={cls.wrap}>
                  <h1 className={cls.title}>Revenue plan for 2023!</h1>
                  <p className={cls.text}>
                    Guide has a ton of actionable information, especially if you
                    are a bootstrapped or a seed-stage startup.
                  </p>
                  <div className={cls.line} />
                  <form className={cls.form} onSubmit={handleSubmit}>
                    <label htmlFor='firstName'>
                      First name
                      <input
                        type='text'
                        name='name'
                        value={auth.name}
                        onChange={(e) =>
                          setAuth({ ...auth, name: e.target.value })
                        }
                        placeholder='Name'
                        required
                      />
                    </label>
                    <label htmlFor='email_text'>
                      Email
                      <input
                        className={cx(errorEmail && cls.error)}
                        type='email'
                        name='email'
                        value={auth.email}
                        onChange={(e) => {
                          setAuth({ ...auth, email: e.target.value });
                          errorEmail && setErrorEmail(false);
                        }}
                        placeholder='Email'
                        required
                      />
                      {errorEmail && (
                        <div className={cls.error}>
                          <Image src={error} alt='img not found' />
                          <p className={cls.msg}>
                            Please use your company email
                          </p>
                        </div>
                      )}
                    </label>

                    <div className={cls.select}>
                      What is your ACV?
                      <Select
                        // menuIsOpen={true}
                        classNamePrefix='react-select'
                        className={cls["custom-select"]}
                        name='select'
                        placeholder='Choose your ACV'
                        // @ts-ignore
                        onChange={(e) =>
                          setAuth({
                            ...auth,
                            // @ts-ignore
                            select: { label: e?.label, value: e?.value },
                          })
                        }
                        styles={colorStyles}
                        options={options}
                        required
                      />
                    </div>
                    <button
                      disabled={!auth.email && !auth.name && !auth.select}
                      type='submit'
                      className={cls.btn}>
                      {status === "sending" ? (
                        <span>Loading...</span>
                      ) : (
                        <span>Get my Copy</span>
                      )}
                    </button>

                    {status === "error" && (
                      <div className={cls.error}>
                        <Image src={error} alt='img not found' />
                        <p className={cls.msg}>{message}</p>
                      </div>
                    )}
                    <button
                      type='reset'
                      className={cls["btn-not"]}
                      onClick={() => onState(false)}>
                      Not Now
                    </button>
                  </form>
                </m.div>
              )}
            </LazyMotion>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Form;
