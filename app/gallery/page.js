import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import Gallery from '../components/Gallery';

export const metadata = { title: 'Gallery · A54 Racing' };

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <Gallery />
      <SiteFooter />
    </>
  );
}
