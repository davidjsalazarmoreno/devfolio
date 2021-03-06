import {FormattedMessage, IntlProvider} from 'react-intl';
import * as React from 'react';

import {ExcerptComponent} from './../../components/excerpt/excerpt';
import {FlatSeparatorComponent} from './../../components/flat-separator/flat-separator';
import {FooterComponent} from './../../components/footer/footer';
import {GithubRibbon} from './../../components/github-ribbon/github-ribbon';
import {HeaderComponent} from './../../components/header/header';
import {LanguageSelectorComponent} from './../../components/language-selector/language-selector';
import {MenuComponent} from './../../components/menu/menu.component';
import {ProjectComponent} from './../../components/project/project';
import {SectionHeaderComponent} from './../../components/section-header/section-header';
import {ShowcaseComponent} from './../../components/showcase/showcase';
import {SocialComponent} from './../../components/social/social';
import {pmShowcase, sysShowcase, geShowcase, ILCShowcase, networks} from './../../config/index';
import './portfolio.scss';

// Intl Messages
const esMessages = require('./../../../../translations/es.json');
const messages = require('./../../../../translations/en.json');


const longEn = <span>
              Hi, I'm Software Developer, currently at <a href="https://www.everis.com/peru/es/home-peru">Everis Perú</a>, I have experience with several web technologies like  <code>Javascript</code>, <code>HTML</code>, 
              <code>CSS</code> and <code>PHP</code>, I have worked on both backend and frontend but spent more of the time working with the last one.

              Recently I has been immerse in <code>NodeJS</code>, <code>React</code> and  <code>Functional Programming</code>,
              you can see the other technologies and approaches that I have worked in <b>my projects section right below</b> or
              visit <a href="">my blog</a> to know some of my thoughts
            </span>;

const longEs = <span>
              Hola, soy un Desarrollador de Software, actualmente en <a href="https://www.everis.com/peru/es/home-peru">Everis Perú</a>, tengo experiencia con varias tecnologías web como <code>Javascript</code>, <code>HTML</code>, 
              <code>CSS</code> y <code>PHP</code>, he trabajado tanto en el backend como en el frontend pero tiendo a pasar más tiempo trabajando en este último.

              Recientemente he estado inmerso en <code>NodeJS</code>, <code>React</code> y <code>Programación Funcional</code>,
              puedes ver las tecnologías y paradigmas con los que he trabajado en <b>mi sección de proyecto (justo debajo)</b> o
              visitar <a href="https://medium.com/@davidjsmoreno">mi blog</a> para conocer más de lo que pienso
            </span>;


interface IPortfolioContainerState {
  language: string;
  isMenuVisible: boolean;
};

export class PortfolioContainer extends React.Component<any, IPortfolioContainerState> {
  state = {
    language: 'en',
    isMenuVisible: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    // State
    const { language, isMenuVisible } = this.state;

    const currentMessages = language === 'es' ? esMessages : messages;

    const longExcerpt = language === 'es' ? longEs : longEn;

    return (
      <IntlProvider messages={currentMessages} locale={'en'}>
        <section id="about" className={`${isMenuVisible ? 'isBlurred' : ''} PortfolioComponent`}>
          <LanguageSelectorComponent 
            languages={[
              'en' ,
              'es',
            ]}
            languageLabel={<FormattedMessage id="general.language" />}
            selected={language}
            onChange={(event) => {
              const languageSelected = event.target.value;

              this.setState({
                ...this.state,
                language: languageSelected
              });
            }} 
          />

          <MenuComponent
            text="Menu"
            links={[
              { text: 'About', url: '#about' },
              { text: 'Portfolio', url: '#portfolio' },
              { text: 'Contact me', url: '#contact' },
            ]}
            isMenuVisible={this.state.isMenuVisible}
            onMenuToggle={() => {
              this.setState((state, props) => {
                return ({
                  ...state, 
                  isMenuVisible: !state.isMenuVisible
                })
              })
            }}
          />
          
          <HeaderComponent avatarUrl="assets/avatar.jpg" />
          {/** /Header excerpt */}

          <FlatSeparatorComponent margin="16px auto" width="20%" />

          <ExcerptComponent
            short={
              <span>
                <FormattedMessage 
                  id="excerpt.short"
                  values={{
                    currently: <a href="https://www.everis.com/peru/es/home-peru" target="_blank"><FormattedMessage id="excerpt.currently" /></a>,
                    projects: <b><FormattedMessage id="excerpt.projectsSection" /></b>
                  }}
                />
              </span>
            }
            long={
              <FormattedMessage 
                id="excerpt.long"
                values={{
                  long: longExcerpt
                }}
              />
            }
            moreLabel={<FormattedMessage id="general.more" />}
            lessLabel={<FormattedMessage id="general.less" />}
          />
          
          {/** /Portfolio excerpt */}
          
          <hr />

          <SectionHeaderComponent title={<FormattedMessage id="general.myWorkTitle" />} />
          {/** /Project filters */}

          <ProjectComponent 
            id="everisperu" 
            image="assets/evep/evep-showcase-1.jpg" 
            name="Everis Perú"
            excerpt={<FormattedMessage id="evep.description" />}
            information={[
              { key: <FormattedMessage id="general.client" />, value: 'Everis Perú' },
              { key: <FormattedMessage id="general.period" />, value: <FormattedMessage id="evep.period" />},
              { key: <FormattedMessage id="general.workType" />, value: 'FullTime' },
              { key: <FormattedMessage id="general.role" />, value: 'Full Stack Web Developer' },
              { key: <FormattedMessage id="general.technologies" />, value: 'Angular / Polymer' },
              { key: <FormattedMessage id="general.companyWebsite" />, value: <a href="https://www.everis.com/peru/es/home-peru">Everis Perú</a> }
            ]}
          />

          <ShowcaseComponent id="EverisPeruShowcase" 
            title={<FormattedMessage id="general.showcaseTitle" />} 
            elements={pmShowcase} 
            emptyStateText={<FormattedMessage id="general.showcaseEmptyText" />} 
          />
          {/** /EverisPeru Project and showcase */}
          
          <ProjectComponent 
            id="playsmatch" 
            image="assets/PM/pm-showcase-1.png" 
            name="Cuádrala / Playsmatch"
            excerpt={<FormattedMessage id="pm.description" />}
            information={[
              { key: <FormattedMessage id="general.client" />, value: 'Cuádrala / Playsmatch' },
              { key: <FormattedMessage id="general.period" />, value: <FormattedMessage id="pm.period" />},
              { key: <FormattedMessage id="general.workType" />, value: 'FullTime' },
              { key: <FormattedMessage id="general.role" />, value: 'Full Stack Web Developer' },
              { key: <FormattedMessage id="general.technologies" />, value: 'React / Nodejs / Express / GraphQL / Typescript / Redux / React Router' },
              { key: <FormattedMessage id="general.companyWebsite" />, value: <a href="https://www.cuadrala.com">Cuádrala</a> }
            ]}
          />

          <ShowcaseComponent id="PlaysmatchShowcase" 
            title={<FormattedMessage id="general.showcaseTitle" />} 
            elements={pmShowcase} 
            emptyStateText={<FormattedMessage id="general.showcaseEmptyText" />} 
          />
          {/** /Playsmatch Project and showcase */}
          
          <ProjectComponent 
            id="systrix" 
            image="assets/Systrix/sys-3.jpg" 
            name="Systrix"
            excerpt={<FormattedMessage id="sys.description" />}
            information={[
              { key: <FormattedMessage id="general.client" />, value: 'Systrix' },
              { key: <FormattedMessage id="general.period" />, value: <FormattedMessage id="sys.period" />},
              { key: <FormattedMessage id="general.workType" />, value: 'FullTime' },
              { key: <FormattedMessage id="general.role" />, value: 'Full Stack Web Developer / Wordpress Developer / Frontend Team Leader' },
              { key: <FormattedMessage id="general.technologies" />, value: 'Angular 2 / React/ Elixir / Phoenix / Elm / Google Contacts API' },
              { key: <FormattedMessage id="general.companyWebsite" />, value: <a href="https://www.linkedin.com/company/systrix">Systrix</a> }
            ]}
          />

          <ShowcaseComponent 
            id="SystrixShowcase" 
            title={<FormattedMessage id="general.showcaseTitle" />}
            columnCount="2" 
            elements={sysShowcase} 
          />
          {/** /Systrix Project and showcase */}

          <ProjectComponent 
            id="GE" 
            image="assets/GE/ge.jpeg" 
            name="Gente Excelente Venezuela"
            excerpt={<FormattedMessage id="ge.description" />}
            information={[
              { key: <FormattedMessage id="general.client" />, value: 'Gente Excelente Venezuela' },
              { key: <FormattedMessage id="general.period" />, value: '2016' },
              { key: <FormattedMessage id="general.workType" />, value: 'Freelancer' },
              { key: <FormattedMessage id="general.role" />, value: 'Web Developer / Wordpress Consultant' },
              { key: <FormattedMessage id="general.technologies" />, value: 'Wordpress / HTML / CSS / Javascript' },
              { key: <FormattedMessage id="general.companyWebsite" />, value: <a href="http://gentexcelente.com">gentexcelente.com</a> }
            ]}
          />

          <ShowcaseComponent 
            id="GenteExcelenteVenezuelaShowcase" 
            title={<FormattedMessage id="general.showcaseTitle" />} 
            emptyStateText="Soon" 
            elements={geShowcase}
            columnCount="2" 
          />
          {/** /Gente excelente project and showcase */}

          <ProjectComponent 
            id="ilc" 
            image="assets/ilc/ilc-main.jpg" 
            name="ILC Academy"
            excerpt={<FormattedMessage id="ilc.description" />}
            information={[
              { key: <FormattedMessage id="general.client" />, value: 'ILC Academy' },
              { key: <FormattedMessage id="general.period" />, value: <FormattedMessage id="ilc.period" />},
              { key: <FormattedMessage id="general.workType" />, value: 'FullTime' },
              { key: <FormattedMessage id="general.role" />, value: 'Web Developer / Wordpress Consultant / Project Leader' },
              { key: <FormattedMessage id="general.technologies" />, value: 'Wordpress / jQuery / HTML / CSS' },
              { key: <FormattedMessage id="general.companyWebsite" />, value: <a href="http://ilcacademy.com/">ilcacademy.com</a> }
            ]}
          />

          <ShowcaseComponent 
            id="ILCAcademyShowcase" 
            title={<FormattedMessage id="general.showcaseTitle" />} 
            columnCount="2" 
            elements={ILCShowcase} 
          />
          {/** /ILC Academy Project and showcase */}

          <hr />
          <FooterComponent 
            contactMe={<FormattedMessage id="general.contactMe" />}
            networks={networks}
            made={<FormattedMessage id="general.made" values={{ love: <i className="fa fa-heart" title="Love" /> }} />}
            inspiration={<FormattedMessage id="general.inspiration" values={{ link: <a href="http://www.hamvocke.com/">hamvocke</a> }} />}
          />

        </section>
      </IntlProvider>
    );
  }
};

export default PortfolioContainer;


