import GithubIcon from './github'
import QueryStatsIcon from './querystats'
import GlobeIcon from './globe'
import GroupIcon from './group'
import InstagramIcon from './instagram'
import LinkIcon from './link'
import LinkedInIcon from './linkedin'
import LocationIcon from './location'
import SparklesIcon from './sparkles'
import WhtasappIcon from './whatsapp'
import AdsClickIcon from './adsclick'
import SellIcon from './sell'
import MktIcon from './mkt'
import FacebookIcon from './facebook'
import CalendarIcon from './calendar'

interface IconsProps {
  icon: string
}
export default function Icons({ icon }: IconsProps) {
  switch (icon) {
    case 'instagram':
      return <InstagramIcon />
    case 'facebook':
      return <FacebookIcon />
    case 'whatsapp':
      return <WhtasappIcon />
    case 'website':
      return <GlobeIcon />
    case 'github':
      return <GithubIcon />
    case 'linkedin':
      return <LinkedInIcon />
    case 'about':
      return <SparklesIcon />
    case 'group':
      return <GroupIcon />
    case 'location':
      return <LocationIcon />
    case 'querystats':
      return <QueryStatsIcon />
    case 'adsclick':
      return <AdsClickIcon />
    case 'sell':
      return <SellIcon />
    case 'calendar':
      return <CalendarIcon />
    case 'mkt':
      return <MktIcon />
    default:
      return <LinkIcon />
  }
}
