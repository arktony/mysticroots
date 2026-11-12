import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./Footer";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-[#06250f] shadow-[0_12px_40px_-10px_rgba(37,211,102,.7)] transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
