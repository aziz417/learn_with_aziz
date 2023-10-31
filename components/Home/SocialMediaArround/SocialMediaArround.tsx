import React, { useState } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import InstagramIcon from "../../Icons/InstagramIcon";
import YoutubeIcon from "../../Icons/YoutubeIcon";

const IconClickableWithAnimation = props => {
  return (
    <motion.div
      whileHover={{
        y: -3,
        transition: { duration: 0.1 },
      }}
      className=""
    >
      <a href={props.href} className="" target={"_blank"} rel="noreferrer">
        <props.Icon className={"w-6 h-6 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"} />
      </a>
    </motion.div>
  );
};
export default function SocialMediaEmail(props: { finishedLoading: boolean }) {
  interface ICopyToClipboard {
    /** HTML reference identifier ```<div id="foo"></div>```  */
    target?: string;
    /** String value */
    value?: string;
    /** (Optional) message to display in snackbar on success */
    message?: string;
  }
  const [copyEmail, setCopyEmail] = useState(false)
  const copyToClipboard = async ({ target, message, value }: ICopyToClipboard) => {
    try {
      let copyValue = "";

      if (!navigator.clipboard) {
        throw new Error("Browser don't have support for native clipboard.");
      }

      if (target) {
        const node = document.querySelector(target);

        if (!node || !node.textContent) {
          throw new Error("Element not found");
        }

        value = node.textContent;
      }

      if (value) {
        copyValue = value;
      }

      await navigator.clipboard.writeText(copyValue);
      console.log(message ?? "Copied!!!");
      setCopyEmail(true)
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: props.finishedLoading ? 0 : 11, duration: props.finishedLoading ? 0 : 0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            {/* Github Icon */}
            <IconClickableWithAnimation Icon={GithubIcon} href={"https://github.com/hktitof"} />
            {/* Linkedin icon */}
            <IconClickableWithAnimation Icon={LinkedinIcon} href={"https://www.linkedin.com/in/abdellatif-anaflous/"} />
            {/* Instagram Icon */}
            <IconClickableWithAnimation Icon={InstagramIcon} href={"https://www.instagram.com/xredme/"} />
            {/* Youtube Icon */}
            <IconClickableWithAnimation Icon={YoutubeIcon} href={"https://www.youtube.com/@abdellatif_anaflous"} />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: props.finishedLoading ? 0 : 11, duration: props.finishedLoading ? 0 : 0.5 } }}
        className="z-10 fixed bottom-0 -right-10 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <span title={copyEmail ? 'copied' : 'copy'} onClick={() => copyToClipboard({ target: '#myemail', message: 'aziz417.dev@gmail.com: email copied', value: 'aziz417.dev@gmail.com' })} className="text-white cursor-pointer">
              {copyEmail ? <svg style={{ fill: '#ceddf8' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z" /></svg>

                : <svg style={{ fill: '#fafafa' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" /></svg>
              }
            </span>
            <a href="mailto:aziz417.dev@gmail.com" id="myemail" target={"_blank"} rel="noreferrer">
              <span className=" font-Header tracking-wider text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                aziz417.dev<span className="text-AAsecondary">@</span>gmail<span className="text-AAsecondary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
}
