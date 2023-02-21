import ColorImage from './color.png';
import FruitImage from './fruit.png';
import AnimalImage from './animal.png';
import NameImage from './name.png';
import ObjectImage from './object.png';
import PlaceImage from './place.png';
import { StaticImageData } from 'next/image';

export interface imageProps {
    description: string;
    image: StaticImageData;
    displayName: string;
}

export type ImageFieldKeys = 'color' | 'fruit' | 'animal' | 'name' | 'object' | 'place';

interface Props {
    [key: string]: imageProps; // índice de tipo string que retorna um imageProps
  }
  

const ImageFieldsProps:Props = {
    color:{
        description: "Color Image",
        displayName: "cor",
        image: ColorImage
    },

    fruit:{
        description: "Fruit Image",
        displayName: "fruta",
        image: FruitImage
    },

    animal:{
        description: "Animal Image",
        displayName: "animal",
        image: AnimalImage
    },

    name:{
        description: "Name Image",
        displayName: "nome",
        image: NameImage
    },

    object:{
        description: "Object Image",
        displayName: "objeto",
        image: ObjectImage
    },

    place:{
        description: "Place Image",
        displayName: "lugar",
        image: PlaceImage
    },

};

export default ImageFieldsProps;