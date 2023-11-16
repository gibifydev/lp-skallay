import { FacebookIcon } from './facebook';
import { InstagramIcon } from './instagram';
import { LinkedInIcon } from './linkedin';

export function Icon({ icon }: { icon: string }) {
  switch (icon)
  {
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'linkedin':
      return <LinkedInIcon />
    default:
      null;
  }
}