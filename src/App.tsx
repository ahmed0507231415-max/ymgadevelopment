import { useRouter } from './lib/router';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const { path, navigate } = useRouter();

  return (
    <Layout currentPath={path} navigate={navigate}>
      {path === '/' && <HomePage navigate={navigate} />}
      {path === '/about' && <AboutPage navigate={navigate} />}
      {path === '/solutions' && <SolutionsPage navigate={navigate} />}
      {path === '/contact' && <ContactPage />}
      {path === '/privacy' && <PrivacyPage navigate={navigate} />}
    </Layout>
  );
}
