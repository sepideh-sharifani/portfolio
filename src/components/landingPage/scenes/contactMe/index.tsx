import { useContext } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { AiOutlineGithub, AiOutlinePhone } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { LanguageContext, Text } from "@/container/Language";

type Props = {
  setSelctedPage: (value: SelectedPage) => void;
};

const ContactMe = ({ setSelctedPage }: Props) => {
  const inputStyles =
    "w-full rounded-lg mt-6 bg-gray-300 p-2 px-3 border-none outline-none placeholder:text-black placeholder:text-sm";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSumbit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  const { userLanguage } = useContext(LanguageContext);
  return (
    <footer
      dir={userLanguage === "fa" ? "rtl" : "ltr"}
      id="contactme"
      className="mt-20 flex flex-col font-sans"
    >
      <fieldset className="mb-10 block border-t-2 border-black text-center">
        <legend className="relative m-auto px-2 text-5xl font-bold md:text-6xl">
          <Text tid="CONTACT" />{" "}
          <span className="text-gray-2">
            <Text tid="me" />
          </span>
        </legend>
      </fieldset>
      <section className="flex h-full items-center justify-center bg-contactBg bg-cover">
        <motion.div
          className="flex h-fit w-11/12 flex-col justify-center gap-5 rounded-t-lg bg-gray-1 bg-opacity-95 p-5 sm:flex-row md:w-4/5"
          onViewportEnter={() => setSelctedPage(SelectedPage.ContactMe)}
        >
          {/*leftSide */}
          <motion.div
            className="mt-2 flex w-[300px] flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-xl font-bold">
              <Text tid="find" />
            </span>
            <a
              href="https://github.com/sepideh-sharifani"
              target="_blank"
              className="flex items-center gap-2 text-gray-2 hover:text-black"
            >
              <AiOutlineGithub className="text-2xl" />
              github/sepideh-Sharifani
            </a>
            <a
              href="https://www.linkedin.com/in/sepideh-sharifani/"
              target="_blank"
              className="flex items-center gap-2 text-gray-2 hover:text-black"
            >
              <FaLinkedin className="text-2xl" />
              LinkedIn/sepideh-sharifani
            </a>
            <div className=" flex items-center gap-2 text-gray-2 hover:text-black">
              <AiOutlinePhone className="text-2xl" /> +989379162443
            </div>
          </motion.div>
          {/*rightSide*/}
          <div>
            <form
              className="m-auto xs:w-11/12 sm:mt-6 sm:w-full"
              target="_blank"
              onSubmit={onSumbit}
              method="POST"
              action="https://formsubmit.co/7e0c3d86832b67d710e5b795f2a0ad37"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder={userLanguage === "fa" ? "نام" : "Name"}
                {...register("name", {
                  required: true,
                  maxLength: 50,
                })}
              />
              {errors.name && (
                <p className="px-2 text-red-600">
                  {errors.name.type === "required" && "Please enter your name"}
                  {errors.name.type === "maxLength" &&
                    "Maximum length is 50 characters"}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder={userLanguage === "fa" ? "ایمیل" : "Email"}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.name && (
                <p className="px-2 text-red-600">
                  {errors.name.type === "required" &&
                    "Please enter your email."}
                  {errors.name.type === "pattern" &&
                    "Please enter a valid email address."}
                </p>
              )}
              <textarea
                className={`${inputStyles} resize-none`}
                rows={4}
                cols={50}
                placeholder={
                  userLanguage === "fa"
                    ? "پیام خود را اینجا بنویسید"
                    : "Write your Message here"
                }
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="px-2 text-red-600">
                  {errors.message.type === "required" &&
                    "Please write your message"}
                  {errors.message.type === "maxLength" &&
                    "Maximum length is 2000 characters"}
                </p>
              )}
              <button
                type="submit"
                className="my-3 h-10 w-36 rounded-lg bg-gray-300 font-bold hover:bg-orange-10"
              >
                <Text tid="Sumbit" />
              </button>
            </form>
          </div>
        </motion.div>
      </section>
    </footer>
  );
};

export default ContactMe;
