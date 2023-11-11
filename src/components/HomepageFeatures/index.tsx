import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [

  {
    title: 'Welcome to My Website',
    Svg: require('@site/static/img/placeholder-home-graphic.svg').default,
    description: (
      <p>
        This is a site I use to organize my notes on various topics, mostly<br></br>
        related to tech.<br></br><br></br>
        While I don't expect anyone else to see this at this point, I welcome <br></br>
        you if you are here! Feel free to edit existing pages or add new pages on<br></br>
        <a target='_blank' href='https://github.com/liamdmcgarrigle/liams-notes/'>GitHub</a> if you want to contrubute!<br></br><br></br>
        If you want to learn more about what this is about, click this button
      </p>
    ),
  },

];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
