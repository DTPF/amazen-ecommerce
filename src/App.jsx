import Routes from './config/Routes';
import indexedDB from './indexedDB';

export default function App() {
  // Create indexedDb and insert first data
  indexedDB();
  // Switch views/layouts
  return (
    <Routes />
  );
}