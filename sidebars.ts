import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: 'autogenerated', dirName: '.' }],


  // But you can create a sidebar manually

  docusaurus: [{ type: 'autogenerated', dirName: 'docusaurus' }],
  zoho: [{ type: 'autogenerated', dirName: 'zoho' }],


  // docusaurus: [

  //   'docusaurus/congratulations',
  //   'docusaurus/create-a-blog-post',
  //   'docusaurus/create-a-document',
  //   'docusaurus/create-a-page',
  //   'docusaurus/deploy-your-site',
  //   'docusaurus/intro',
  //   'docusaurus/manage-docs-versions',
  //   'docusaurus/markdown-features',
  //   'docusaurus/translate-your-site',

  // ],

  // zoho: [
  //   'zoho/make-api-calls',


  //   {
  //     type: 'category',
  //     label: 'Functions',
  //     // link: { type: 'doc', id: 'zoho/index' },
  //     items: [
  //       'zoho/functions/zoho-deluge-functions'
  //     ],
  //   },
  // ],
};



export default sidebars;
