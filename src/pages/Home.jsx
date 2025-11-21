import jsonData from '../data/aboutMe.json';
import HeroSection from '../components/About/Hero';

export default function Home() {
  return (
    <HeroSection data={jsonData} />
  );
}