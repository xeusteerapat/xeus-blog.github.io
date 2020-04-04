import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        <a
          href="https://twitter.com/xeusteerapat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </p>
      <p>
        <a
          href="https://github.com/xeusteerapat"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/teerapat-prommarak-44923697/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </p>
    </Layout>
  );
};

export default ContactPage;
