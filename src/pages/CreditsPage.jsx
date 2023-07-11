import { Article } from 'components/Article/Article';
import { Miniature } from 'components/Miniature/Miniature';
import { Title } from 'components/Title/Title';
import jj from './../images/JoannaJasinska.jpg';
import dog from './../images/dog_2023.jpg';
import { Flexbox } from 'components/Flexbox/Flexbox';
import { Separator } from 'components/Separator/Separator';

export const CreditsPage = () => {
  const tmdb = <a href="https://www.themoviedb.org"> TMDB </a>;
  return (
    <section>
      <Article
        title="Movie Finder"
        content={
          <div>
            Welcome to our website! Discover your next favorite movie with
            comprehensive database from TMDB, offering detailed information on
            cast, reviews, overview, and genres. Explore and immerse yourself in
            the world of cinema with ease.
          </div>
        }
      />
      <Separator />
      <Flexbox>
        <Miniature
          alt={`Joanna\nJasińska\n😁`}
          title={
            <>
              Page created in 2023 <br />
              by Joanna Jasińska.
            </>
          }
          url={jj}
        />
        <Miniature
          alt="TMDB"
          bg="tmdb"
          padding={true}
          title={
            <>
              This product uses the {tmdb} API but is not endorsed or certified
              by TMDB.
            </>
          }
          url="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        />
        <Miniature
          alt="❤️ WJ"
          url={dog}
          title={
            <>
              Special thanks for a little help from my awesome husband Wojciech
              Jasiński.
            </>
          }
        />
      </Flexbox>
      <Separator />
    </section>
  );
};
