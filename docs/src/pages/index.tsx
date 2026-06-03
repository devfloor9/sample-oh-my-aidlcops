import React from 'react';
import Layout from '@theme/Layout';
import { translate } from '@docusaurus/Translate';
import HomeLanding from '@site/src/components/HomeLanding';

export default function Home(): React.ReactElement {
  return (
    <Layout
      title={translate({
        id: 'page.home.title',
        message: 'AIDLC × AgenticOps marketplace',
        description: 'Home page title',
      })}
      description={translate({
        id: 'page.home.description',
        message:
          'Extend Claude Code and Kiro with AgenticOps plugins and skills that automate the AWS AI-Driven Development Lifecycle: Inception, Construction, Operations.',
        description: 'Home page description',
      })}
    >
      <HomeLanding />
    </Layout>
  );
}
