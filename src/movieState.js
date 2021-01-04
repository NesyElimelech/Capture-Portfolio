//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      title: 'The Athlete',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Good Times',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'A Punch in the face.',
          description:
            '“Lorem ipsum dolor sit amet consectetur adipisicing elit.”',
        },
        {
          title: "Can't take your eyes for one moment!",
          description:
            '“Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, culpa.”',
        },
        {
          title: 'This is how love story should be.',
          description:
            '“Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam harum voluptatibus explicabo id ipsum perferendis sed illo.”',
        },
      ],
    },
    {
      title: 'The Racer',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Oscar nominate.',
          description:
            '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo numquam ratione.”',
        },
        {
          title: 'Breath taking!',
          description:
            '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ab nobis, id iste vel possimus!”',
        },
        {
          title: 'Well Done.',
          description:
            '“Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consequuntur doloribus impedit exercitationem vitae.”',
        },
      ],
    },
  ];
};
