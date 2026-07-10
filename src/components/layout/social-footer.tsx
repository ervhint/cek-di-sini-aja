import type { ReactNode } from "react";

type SocialLink = {
  href: string;
  icon: ReactNode;
  label: string;
};

const iconClassName = "h-5 w-5";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <rect height="16" rx="5" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="7" fill="currentColor" r="1" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <path
        d="M14 4v10.2a4.2 4.2 0 1 1-4.2-4.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 4c.7 3 2.5 4.8 5 5.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <path
        d="M17.5 10.2c-.3-3-2.3-4.8-5.4-4.8-3.7 0-6.1 2.8-6.1 6.6s2.4 6.6 6.3 6.6c3 0 5.2-1.6 5.7-4.1.5-2.6-1.2-4.4-4.8-4.4-2.2 0-3.4.9-3.4 2.3 0 1.2 1 2.4 2.4 2.4 1.9 0 3-1.2 3-3.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <rect height="12" rx="3" stroke="currentColor" strokeWidth="2" width="18" x="3" y="6" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <path d="m5 5 14 14M19 5 5 19" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <path
        d="M6.7 17.3 5.5 21l3.8-1A8 8 0 1 0 4 12.5a8 8 0 0 0 2.7 4.8Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9.5 8.8c.3-.3.7-.2.9.2l.6 1c.2.3.1.7-.1.9l-.4.4c.5 1.1 1.3 1.9 2.4 2.4l.5-.4c.2-.2.6-.3.9-.1l1 .6c.4.2.5.6.2.9-.5.8-1.3 1.1-2.2.8-2.5-.8-4.3-2.6-5.1-5.1-.3-.9.1-1.7 1.3-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ShopeeIcon() {
  return (
    <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
      <path
        d="M7 9h10l-.8 10H7.8L7 9Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M9 9V7a3 3 0 0 1 6 0v2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M13.8 12.4c-.5-.3-1.1-.5-1.8-.5-1 0-1.7.5-1.7 1.2 0 .8.8 1 1.8 1.3 1.1.3 1.9.7 1.9 1.7 0 .8-.8 1.4-2 1.4-.8 0-1.6-.2-2.1-.7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.instagram.com/ervhint.ervhint?igsh=NTFtZXV0NjUwZXJv",
    icon: <InstagramIcon />,
    label: "Instagram ervhint"
  },
  {
    href: "https://www.tiktok.com/@ervhint?_r=1&_t=ZS-97u6qmImhaH",
    icon: <TikTokIcon />,
    label: "TikTok ervhint"
  },
  {
    href: "https://www.threads.com/@ervhint.ervhint",
    icon: <ThreadsIcon />,
    label: "Threads ervhint"
  },
  {
    href: "https://youtube.com/@ervhint?si=bmV_RhgY-hlOr5uq",
    icon: <YouTubeIcon />,
    label: "YouTube ervhint"
  },
  {
    href: "https://x.com/ervhint_ervhint",
    icon: <XIcon />,
    label: "X ervhint"
  },
  {
    href: "https://whatsapp.com/channel/0029VbDC7BuBlHpVSEiQYs28",
    icon: <WhatsAppIcon />,
    label: "WhatsApp channel ervhint"
  },
  {
    href: "https://s.shopee.co.id/3VVy1bgWo9",
    icon: <ShopeeIcon />,
    label: "Shopee ervhint"
  }
];

export function SocialFooter() {
  return (
    <footer className="border-t border-[#e6e0f5] py-6 text-center text-sm font-semibold text-[#6658b7]">
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
        <span>Made with Love by ervhint - Dukung ervhint di:</span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {socialLinks.map((link) => (
            <a
              aria-label={link.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d0f0] bg-white text-[#6658b7] transition-colors hover:border-[#8b7edb] hover:bg-[#f1eeff] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#8b7edb]"
              href={link.href}
              key={link.label}
              rel="noopener noreferrer"
              target="_blank"
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
