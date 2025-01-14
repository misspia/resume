type HeaderMetadata = {
  firstName: string;
  lastName: string;
  subtitle: string;
  links: SocialLink[];
};

export type SocialLink = {
  display: string;
  src: string;
  icon: string;
};

export const metadata: HeaderMetadata = {
  firstName: "pia",
  lastName: "leung",
  subtitle: "web developer",
  links: [
    {
      display: "misspia.github.io",
      src: "https://misspia.github.io/",
      icon: "ion-android-home",
    },
    {
      display: "miss.pialeung@gmail.com",
      src: "miss.pialeung@gmail.com",
      // icon: "ion-at",
      icon: "ion-email",
    },
    {
      display: "linkedin.com/in/misspia",
      src: "https://www.linkedin.com/in/misspia",
      icon: "ion-social-linkedin",
    },
    {
      display: "github.com/misspia",
      src: "https://github.com/misspia",
      icon: "ion-social-octocat",
    },
  ],
};
