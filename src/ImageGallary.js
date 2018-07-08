import React,{ Component }  from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

const IMAGES =
[{
        src: require('./components/portfolio/projectImages/aa1.png'),
        thumbnail: require('./components/portfolio/projectImages/aa1.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./components/portfolio/projectImages/aa2.png'),
        thumbnail: require('./components/portfolio/projectImages/aa2.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./components/portfolio/projectImages/aa3.png'),
        thumbnail: require('./components/portfolio/projectImages/aa3.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./components/portfolio/projectImages/aa4.png'),
        thumbnail: require('./components/portfolio/projectImages/aa4.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./components/portfolio/projectImages/aa5.png'),
        thumbnail: require('./components/portfolio/projectImages/aa5.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./components/portfolio/projectImages/aa6.png'),
        thumbnail: require('./components/portfolio/projectImages/aa6.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: require('./components/portfolio/projectImages/aa7.png'),
        thumbnail: require('./components/portfolio/projectImages/aa7.png'),
        thumbnailWidth: 80,
        thumbnailHeight: 120,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
]


export default class ImageGallary extends Component {
        render() {
                return (
                        <div>
                                 <Gallery images={IMAGES}/>
                        </div>
                )
        }

}
