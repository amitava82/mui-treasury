import ButtonPage from 'pages/components/ButtonPage';
import CardPage from 'pages/components/CardPage';
import TabsPage from 'pages/components/TabsPage';
import InputPage from 'pages/components/InputPage';
import TextFieldPage from 'pages/components/TextFieldPage';
import IconPage from 'pages/components/IconPage';
import TypographyPage from 'pages/components/TypographyPage';
import LayoutPage from 'pages/components/LayoutPage';
import ChatPage from 'pages/components/ChatPage';

/**
 * id: [String] optional
 * path: [String] must be unique from other paths
 * primaryText: [String] text in the navigator of the site
 * Page: [React Component] a page that will show in this route
 */
export default [
  {
    id: 'button',
    path: '/components/button',
    primaryText: 'Button',
    secondaryText: `${ButtonPage.components.length} items`,
    Page: ButtonPage,
  },
  {
    id: 'card',
    path: '/components/card',
    primaryText: 'Card',
    secondaryText: `${CardPage.components.length} items`,
    Page: CardPage,
  },
  {
    id: 'chat',
    path: '/components/chat',
    primaryText: 'Chat',
    secondaryText: `${ChatPage.components.length} items`,
    Page: ChatPage,
  },
  {
    id: 'icons',
    path: '/components/icon',
    primaryText: 'Icon',
    Page: IconPage,
  },
  {
    id: 'inputs',
    path: '/components/inputs',
    primaryText: 'Input',
    secondaryText: `${InputPage.components.length} items`,
    Page: InputPage,
  },
  {
    id: 'layout',
    path: '/components/layout',
    primaryText: 'Layout',
    // secondaryText: `${LayoutPage.components.length} items`,
    Page: LayoutPage,
  },
  {
    id: 'tabs',
    path: '/components/tabs',
    primaryText: 'Tabs',
    secondaryText: `${TabsPage.components.length} items`,
    Page: TabsPage,
  },
  {
    id: 'text-fields',
    path: '/components/text-fields',
    primaryText: 'Text Field',
    secondaryText: `${TextFieldPage.components.length} items`,
    Page: TextFieldPage,
  },
  {
    id: 'typography',
    path: '/components/typography',
    primaryText: 'Typography',
    Page: TypographyPage,
  },
];
