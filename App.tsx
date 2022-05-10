import { StrictMode } from 'react';
import GraphWindow from './components/GraphWindow';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <GraphWindow />
    </Layout>
  );
}
