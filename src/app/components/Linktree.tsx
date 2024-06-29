import Image from "next/image";
import Logo from "../../../public/img/logo.webp";
import { LiaTelegramPlane } from "react-icons/lia";
import { PiTiktokLogo } from "react-icons/pi";
import { SlSocialInstagram } from "react-icons/sl";
import { RiTwitterXLine } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";

const Linktree = () => {
  return (
    <main className="md:w-1/2 w-3/4 mx-auto min-h-screen pt-5">
      {/* ===== Brand Logo ===== */}
      <Image
        src={Logo}
        alt="linktree"
        width={150}
        height={150}
        className="mx-auto border-2 rounded-full hover:scale-105 transition-all"
      />
      {/* ===== Brand Name ===== */}
      <center className="mt-5">
        <h1 className="text-2xl font-bold">SmartWeb3 ID</h1>
        <h3 className="text-sm mt-1 text-gray-50">
          Be rich in new technology | Web3 education
        </h3>
      </center>
      {/* ===== Social Media ===== */}
      <SocialMedia />
      {/* ===== Buttons ===== */}
      <center className="mt-3 flex flex-col gap-2">
        <Button title="⏩Group Telegram⏪" href="https://t.me/SmartWeb3ID" />
        <Button
          title="Airdrop Crypto🚀"
          href="https://smartweb3.notion.site/Airdrop-384b6ef5daba481980f00e8119483320?pvs=74"
        />
        <Button
          title="Skills Making Money💸"
          href="https://smartweb3.notion.site/Upgrade-Skills-92afebc7308345b98dd22e2e696bc7dd"
        />
        <Button
          title="Tools Trading🔥"
          href="https://smartweb3.notion.site/Tools-Trading-436f6f9f0f4e4e8a820c000a90fe6c72"
        />
        <Button title="For Business💻" href="https://t.me/ikhwanhsn" />
      </center>
      {/* ===== Copyright ===== */}
      <center className="mt-12 text-xs py-3">
        Copyright &copy; 2024 - SmartWeb3 ID
      </center>
    </main>
  );
};

export default Linktree;

const SocialMedia = () => {
  return (
    <center className="mt-3 flex items-center gap-1 justify-center">
      <a href="https://t.me/SmartWeb3ID" target="_blank">
        <section className="border w-fit rounded-full p-2 cursor-pointer hover:bg-white hover:text-primary">
          <LiaTelegramPlane size={25} />
        </section>
      </a>
      <a href="https://www.tiktok.com/@smartweb3.id" target="_blank">
        <section className="border w-fit rounded-full p-2 cursor-pointer hover:bg-white hover:text-primary">
          <PiTiktokLogo size={25} />
        </section>
      </a>
      <a href="https://instagram.com/ikhwanhsn21" target="_blank">
        <section className="border w-fit rounded-full p-2 cursor-pointer hover:bg-white hover:text-primary">
          <SlSocialInstagram size={25} />
        </section>
      </a>
      <a href="https://twitter.com/ikhwanhsn" target="_blank">
        <section className="border w-fit rounded-full p-2 cursor-pointer hover:bg-white hover:text-primary">
          <RiTwitterXLine size={25} />
        </section>
      </a>
      <a href="mailto:smartweb3.id@gmail.com" target="_blank">
        <section className="border w-fit rounded-full p-2 cursor-pointer hover:bg-white hover:text-primary">
          <MdOutlineMail size={25} />
        </section>
      </a>
    </center>
  );
};

type ButtonProps = {
  title: string;
  href: string;
};

const Button = ({ title, href }: ButtonProps) => {
  return (
    <a href={href} target="_blank">
      <button className="border-2 text-sm font-semibold lg:w-1/2 w-full rounded-full p-3 transition-all cursor-pointer hover:bg-white hover:text-primary">
        {title}
      </button>
    </a>
  );
};
