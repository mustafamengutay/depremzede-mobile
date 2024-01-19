import Header from './components/Header';
import AppLayout from './components/layouts/AppLayout';
import Menu from './components/Menu';

export default function App() {
  return (
    <AppLayout>
      <Header />
      <Menu />
    </AppLayout>
  );
}
