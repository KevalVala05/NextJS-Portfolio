import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <>
      <article
        className="w-full flex items-center justify-between
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
      "
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage src={img} alt={title} className="w-full h-auto"
           whileHover={{scale:1.05}}
          transition={{duration:0.2}}
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6">
          <span className="text-primary font-medium text-xl">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid  border-dark bg-light p-6 relative">
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
         whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Project Page</title>
        <meta name="description" content="Project Page" />
      </Head>
      <main className="flex w-full mb-16 flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text={"Imagination Trumps Knowledge!"}
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="Crypto Screener Application"
                summary={`
                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
                `}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Crypto Screener Application"
                summary={`
                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
                `}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Crypto Screener Application"
                summary={`
                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
                `}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                img={project1}
                title="Crypto Screener Application"
                summary={`
                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
                `}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Crypto Screener Application"
                summary={`
                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
                `}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
            <div className="col-span-6">
              <Project
                img={project1}
                title="Crypto Screener Application"
                summary={`
                A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency.
                `}
                link={"/"}
                github={"/"}
                type={"Featured Project"}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
