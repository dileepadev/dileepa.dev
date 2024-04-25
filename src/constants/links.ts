export default class WebLinks {
  public static readonly github: string = "https://github.com/dileepadev";
  public static readonly linkedin: string =
    "https://linkedin.com/in/dileepadev";
  public static readonly xtwitter: string = "https://twitter.com/dileepadev";
  public static readonly youtube: string = "https://youtube.com/@dileepadev";
  public static readonly instagram: string = "https://instagram.com/dileepadev";
  public static readonly email: string = "contact@dileepa.dev";
  public static readonly githubRepo: string =
    "https://github.com/dileepadev/dileepa.dev";
}

export const NavLinks = [
  { href: "/about", key: "about", label: "About" },
  { href: "/education", key: "education", label: "Education" },
  { href: "/experience", key: "experience", label: "Experience" },
  { href: "/media", key: "media", label: "Media" },
  { href: "/connect", key: "connect", label: "Connect" },
];

export const PageLinks = {
  education: {
    nibm: "https://www.nibm.lk/",
    coventry: "https://www.coventry.ac.uk/",
    mms: "https://www.maliyadevaadarshappa.lk/",
  },
  experience: {
    wd: "https://linkedin.com/company/wingzdev/",
    ddst: "https://linkedin.com/company/dds-techvira/",
    projects: WebLinks.github + "?tab=repositories",
    nibmcs: "https://linkedin.com/company/nibmcs/",
    nibmfossc: "https://linkedin.com/company/nibmfossc/",
    mlsa: "https://mvp.microsoft.com/studentambassadors/",
    mlsaLK: "https://linkedin.com/company/mlsasrilanka/",
    gdgLK: "https://gdg.community.dev/gdg-sri-lanka/",
    fossLK: "https://foss.lk/",
    work: "https://dileepa.dev/",
  },
  media: {
    youtube: "https://youtube.com/@dileepadev/",
    hashnode: "https://dileepadev.hashnode.dev/",
  },
};
