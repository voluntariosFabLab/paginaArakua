import extrusor from './2extrusor.jpg'
import fiber from './fiber-plastic.png'
import machine3 from './Machine3.jpg'
import machine4 from './machine4.jpg'

export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: machine3,
                thumbnailImageSrc:machine3,
                alt: 'Description for Image 3',
                title: 'Innovación Ancestral para el Futuro'
            },
            {
                itemImageSrc: fiber,
                thumbnailImageSrc: fiber,
                alt: 'Description for Image 2',
                title: 'Fibras Recicladas'
            },
            {
                itemImageSrc: machine4,
                thumbnailImageSrc: machine4,
                alt: 'Description for Image 4',
                title: 'Transformando Desechos en Textiles con Historia'
            },
            {
                itemImageSrc: extrusor,
                thumbnailImageSrc: extrusor,
                alt: 'ExtrusorImage',
                title: 'Tejiendo Futuro con Residuos Reciclados'
            }
        ];
    },
    
    getImages() {
        return Promise.resolve(this.getData());
    }
};

