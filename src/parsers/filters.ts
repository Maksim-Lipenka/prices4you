import { CategoriesEnum } from "./consts"

export enum FiltersEnum {
  manufacturer = "manufacturer",
  gpu = "gpu",
}

export type FiltersQuery = {
  [key in FiltersEnum]?: string
}

export const VIDEOCARDS_FILTERS = {
  manufacturer: {
    key: FiltersEnum.manufacturer,
    label: 'Manufacturer',
    options: [
      {
        id: 1,
        label: 'AFOX',
      },
      {
        id: 2,
        label: 'AMD',
      },
      {
        id: 3,
        label: 'Arktek',
      },
      {
        id: 4,
        label: 'ASRock',
      },
      {
        id: 5,
        label: 'ASUS',
      },
      {
        id: 6,
        label: 'BIOSTAR',
      },
      {
        id: 7,
        label: 'Colorful',
      },
      {
        id: 8,
        label: 'Dell',
      },
      {
        id: 9,
        label: 'EVGA',
      },
      {
        id: 10,
        label: 'Gainward',
      },
      {
        id: 11,
        label: 'Gigabyte',
      },
      {
        id: 12,
        label: 'HP',
      },
      {
        id: 13,
        label: 'Inno3D',
      },
      {
        id: 14,
        label: 'Intel',
      },
      {
        id: 15,
        label: 'KFA2',
      },
      {
        id: 16,
        label: 'Leadtek',
      },
      {
        id: 17,
        label: 'Manli',
      },
      {
        id: 18,
        label: 'Maxsun',
      },
      {
        id: 19,
        label: 'MSI',
      },
      {
        id: 20,
        label: 'NVIDIA',
      },
      {
        id: 21,
        label: 'Palit',
      },
      {
        id: 22,
        label: 'PNY',
      },
      {
        id: 23,
        label: 'PowerColor',
      },
      {
        id: 24,
        label: 'Sapphire',
      },
      {
        id: 25,
        label: 'Sinotex',
      },
      {
        id: 26,
        label: 'XFX',
      },
      {
        id: 27,
        label: 'Zotac',
      },
      {
        id: 28,
        label: 'Matrox',
      },
      {
        id: 29,
        label: 'Ninja',
      },
    ],
  },
  gpu: {
    key: FiltersEnum.gpu,
    label: 'GPU',
    options: [
      {
        id: 1,
        label: 'GeForce RTX 4090',
        keywords: ['RTX', '4090'],
      },
      {
        id: 2,
        label: 'GeForce RTX 4080',
        keywords: ['RTX', '4080'],
      },
      {
        id: 3,
        label: 'GeForce RTX 4070 Ti',
        keywords: ['RTX', '4070', 'Ti'],
      },
      {
        id: 4,
        label: 'GeForce RTX 3060',
        keywords: ['RTX', '3060'],
      },
      {
        id: 5,
        label: 'GeForce RTX 3060 Ti',
        keywords: ['RTX', '3060', 'Ti'],
      },
      {
        id: 6,
        label: 'GeForce RTX 3050',
        keywords: ['RTX', '3050'],
      },
      {
        id: 7,
        label: 'GeForce RTX 3090 Ti',
        keywords: ['RTX', '3090', 'Ti'],
      },
      {
        id: 8,
        label: 'GeForce RTX 3090',
        keywords: ['RTX', '3090'],
      },
      {
        id: 9,
        label: 'GeForce RTX 3080 Ti',
        keywords: ['RTX', '3080', 'Ti'],
      },
      {
        id: 10,
        label: 'GeForce RTX 3080',
        keywords: ['RTX', '3080'],
      },
      {
        id: 11,
        label: 'GeForce RTX 3070 Ti',
        keywords: ['RTX', '3070', 'Ti'],
      },
      {
        id: 12,
        label: 'GeForce RTX 3070',
        keywords: ['RTX', '3070'],
      },
      {
        id: 13,
        label: 'Radeon RX 7900 XTX',
        keywords: ['RX', '7900', 'XTX'],
      },
      {
        id: 14,
        label: 'Radeon RX 7900 XT',
        keywords: ['RX', '7900', 'XT'],
      },
      {
        id: 15,
        label: 'Radeon RX 6950 XT',
        keywords: ['RX', '6950', 'XT'],
      },
      {
        id: 16,
        label: 'Radeon RX 6900 XT',
        keywords: ['RX', '6900', 'XT'],
      },
      {
        id: 17,
        label: 'Radeon RX 6800 XT',
        keywords: ['RX', '6800', 'XT'],
      },
      {
        id: 18,
        label: 'Radeon RX 6800',
        keywords: ['RX', '6800'],
      },
      {
        id: 19,
        label: 'Radeon RX 6750 XT',
        keywords: ['RX', '6750', 'XT'],
      },
      {
        id: 20,
        label: 'Radeon RX 6700',
        keywords: ['RX', '6700'],
      },
      {
        id: 21,
        label: 'Radeon RX 6700 XT',
        keywords: ['RX', '6700', 'XT'],
      },
      {
        id: 22,
        label: 'Radeon RX 6650 XT',
        keywords: ['RX', '6650', 'XT'],
      },
      {
        id: 23,
        label: 'Radeon RX 6600 XT',
        keywords: ['RX', '6600', 'XT'],
      },
      {
        id: 24,
        label: 'Radeon RX 6600',
        keywords: ['RX', '6600'],
      },
      {
        id: 25,
        label: 'Radeon RX 6500 XT',
        keywords: ['RX', '6500', 'XT'],
      },
      {
        id: 26,
        label: 'Radeon RX 6400',
        keywords: ['RX', '6400'],
      },
      {
        id: 27,
        label: 'Radeon RX 5700 XT',
        keywords: ['RX', '5700', 'XT'],
      },
      {
        id: 28,
        label: 'Radeon RX 5700',
        keywords: ['RX', '5700'],
      },
      {
        id: 29,
        label: 'Radeon RX 5600 XT',
        keywords: ['RX', '5600', 'XT'],
      },
      {
        id: 30,
        label: 'Radeon RX 5500 XT',
        keywords: ['RX', '5500', 'XT'],
      },
      {
        id: 31,
        label: 'GeForce 210',
        keywords: ['210'],
      },
      {
        id: 32,
        label: 'GeForce 8400 GS',
        keywords: ['8400', 'GS'],
      },
      {
        id: 33,
        label: 'GeForce 9600 GT',
        keywords: ['9600', 'GT'],
      },
      {
        id: 34,
        label: 'GeForce GT 210',
        keywords: ['GT', '210'],
      },
      {
        id: 35,
        label: 'GeForce GT 220',
        keywords: ['GT', '220'],
      },
      {
        id: 36,
        label: 'GeForce GT 240',
        keywords: ['GT', '240'],
      },
      {
        id: 37,
        label: 'GeForce GT 440',
        keywords: ['GT', '440'],
      },
      {
        id: 38,
        label: 'GeForce GT 610',
        keywords: ['GT', '610'],
      },
      {
        id: 39,
        label: 'GeForce GT 630',
        keywords: ['GT', '630'],
      },
      {
        id: 40,
        label: 'GeForce GT 640',
        keywords: ['GT', '640'],
      },
      {
        id: 41,
        label: 'GeForce GT 710',
        keywords: ['GT', '710'],
      },
      {
        id: 42,
        label: 'GeForce GT 730',
        keywords: ['GT', '730'],
      },
      {
        id: 43,
        label: 'GeForce GT 740',
        keywords: ['GT', '740'],
      },
      {
        id: 44,
        label: 'GeForce GTS 450',
        keywords: ['GTS', '450'],
      },
      {
        id: 45,
        label: 'GeForce GTX 260',
        keywords: ['GTX', '260'],
      },
      {
        id: 46,
        label: 'GeForce GTX 550 Ti',
        keywords: ['GTX', '550', 'Ti'],
      },
      {
        id: 47,
        label: 'GeForce GTX 560 Ti',
        keywords: ['GTX', '560', 'Ti'],
      },
      {
        id: 48,
        label: 'GeForce GTX 650',
        keywords: ['GTX', '650'],
      },
      {
        id: 49,
        label: 'GeForce GTX 750',
        keywords: ['GTX', '750'],
      },
      {
        id: 50,
        label: 'GeForce GTX 750 Ti',
        keywords: ['GTX', '750', 'Ti'],
      },
      {
        id: 51,
        label: 'GeForce GTX 760',
        keywords: ['GTX', '760'],
      },
      {
        id: 52,
        label: 'GeForce GTX 770',
        keywords: ['GTX', '770'],
      },
      {
        id: 53,
        label: 'GeForce GTX 780',
        keywords: ['GTX', '780'],
      },
      {
        id: 54,
        label: 'GeForce GTX 970',
        keywords: ['GTX', '970'],
      },
      {
        id: 55,
        label: 'GeForce GTX 980',
        keywords: ['GTX', '980'],
      },
      {
        id: 56,
        label: 'GeForce GT 1030',
        keywords: ['GT', '1030'],
      },
      {
        id: 57,
        label: 'GeForce GTX 1050',
        keywords: ['GTX', '1050'],
      },
      {
        id: 58,
        label: 'GeForce GTX 1050 Ti',
        keywords: ['GTX', '1050', 'Ti'],
      },
      {
        id: 59,
        label: 'GeForce GTX 1060',
        keywords: ['GTX', '1060'],
      },
      {
        id: 60,
        label: 'GeForce GTX 1070',
        keywords: ['GTX', '1070'],
      },
      {
        id: 61,
        label: 'GeForce GTX 1070 Ti',
        keywords: ['GTX', '1070', 'Ti'],
      },
      {
        id: 62,
        label: 'GeForce GTX 1080',
        keywords: ['GTX', '1080'],
      },
      {
        id: 63,
        label: 'GeForce GTX 1080 Ti',
        keywords: ['GTX', '1080', 'Ti'],
      },
      {
        id: 64,
        label: 'GeForce GTX 1630',
        keywords: ['GTX', '1630'],
      },
      {
        id: 65,
        label: 'GeForce GTX 1650',
        keywords: ['GTX', '1650'],
      },
      {
        id: 66,
        label: 'GeForce GTX 1650 Super',
        keywords: ['GTX', '1650', 'Super'],
      },
      {
        id: 67,
        label: 'GeForce GTX 1660',
        keywords: ['GTX', '1660'],
      },
      {
        id: 68,
        label: 'GeForce GTX 1660 Super',
        keywords: ['GTX', '1660', 'Super'],
      },
      {
        id: 69,
        label: 'GeForce GTX 1660 Ti',
        keywords: ['GTX', '1660', 'Ti'],
      },
      {
        id: 70,
        label: 'GeForce RTX 2060',
        keywords: ['RTX', '2060'],
      },
      {
        id: 71,
        label: 'GeForce RTX 2060 Super',
        keywords: ['RTX', '2060', 'Super'],
      },
      {
        id: 72,
        label: 'GeForce RTX 2070',
        keywords: ['RTX', '2070'],
      },
      {
        id: 73,
        label: 'GeForce RTX 2070 Super',
        keywords: ['RTX', '2070', 'Super'],
      },
      {
        id: 74,
        label: 'GeForce RTX 2080',
        keywords: ['RTX', '2080'],
      },
      {
        id: 75,
        label: 'GeForce RTX 2080 Super',
        keywords: ['RTX', '2080', 'Super'],
      },
      {
        id: 76,
        label: 'GeForce RTX 2080 Ti',
        keywords: ['RTX', '2080', 'Ti'],
      },
      {
        id: 77,
        label: 'NVIDIA TITAN V',
        keywords: ['NVIDIA', 'TITAN', 'V'],
      },
      {
        id: 78,
        label: 'Quadro 5000',
        keywords: ['Quadro', '5000'],
      },
      {
        id: 79,
        label: 'Quadro GP100',
        keywords: ['Quadro', 'GP100'],
      },
      {
        id: 80,
        label: 'Quadro P400',
        keywords: ['Quadro', 'P400'],
      },
      {
        id: 81,
        label: 'Quadro P620',
        keywords: ['Quadro', 'P620'],
      },
      {
        id: 82,
        label: 'Quadro P1000',
        keywords: ['Quadro', 'P1000'],
      },
      {
        id: 83,
        label: 'Quadro P2000',
        keywords: ['Quadro', 'P2000'],
      },
      {
        id: 84,
        label: 'Quadro P2200',
        keywords: ['Quadro', 'P2200'],
      },
      {
        id: 85,
        label: 'Quadro P4000',
        keywords: ['Quadro', 'P4000'],
      },
      {
        id: 86,
        label: 'Quadro P5000',
        keywords: ['Quadro', 'P5000'],
      },
      {
        id: 87,
        label: 'Quadro P6000',
        keywords: ['Quadro', 'P6000'],
      },
      {
        id: 88,
        label: 'Quadro RTX 4000',
        keywords: ['Quadro', 'RTX', '4000'],
      },
      {
        id: 89,
        label: 'Quadro RTX 5000',
        keywords: ['Quadro', 'RTX', '5000'],
      },
      {
        id: 90,
        label: 'RTX A2000',
        keywords: ['RTX', 'A2000'],
      },
      {
        id: 91,
        label: 'RTX A4000',
        keywords: ['RTX', 'A4000'],
      },
      {
        id: 92,
        label: 'RTX A4500',
        keywords: ['RTX', 'A4500'],
      },
      {
        id: 93,
        label: 'RTX A5000',
        keywords: ['RTX', 'A5000'],
      },
      {
        id: 94,
        label: 'RTX A6000',
        keywords: ['RTX', 'A6000'],
      },
      {
        id: 95,
        label: 'Quadro RTX 6000',
        keywords: ['Quadro', 'RTX', '6000'],
      },
      {
        id: 96,
        label: 'Quadro RTX 8000',
        keywords: ['Quadro', 'RTX', '8000'],
      },
      {
        id: 97,
        label: 'Radeon 9600 XT',
        keywords: ['9600', 'XT'],
      },
      {
        id: 98,
        label: 'Radeon HD 3850',
        keywords: ['HD', '3850'],
      },
      {
        id: 99,
        label: 'Radeon HD 4350',
        keywords: ['HD', '4350'],
      },
      {
        id: 100,
        label: 'Radeon HD 4850',
        keywords: ['HD', '4850'],
      },
      {
        id: 101,
        label: 'Radeon HD 5870',
        keywords: ['HD', '5870'],
      },
      {
        id: 102,
        label: 'Radeon HD 6670',
        keywords: ['HD', '6670'],
      },
      {
        id: 103,
        label: 'Radeon HD 7870 GHz Edition',
        keywords: ['HD', '7870', 'GHz', 'Edition'],
      },
      {
        id: 104,
        label: 'Radeon Pro V620',
        keywords: ['Pro', 'V620'],
      },
      {
        id: 105,
        label: 'Radeon Pro W5500',
        keywords: ['Pro', 'W5500'],
      },
      {
        id: 106,
        label: 'Radeon Pro W5700',
        keywords: ['Pro', 'W5700'],
      },
      {
        id: 107,
        label: 'Radeon Pro W6600',
        keywords: ['Pro', 'W6600'],
      },
      {
        id: 108,
        label: 'Radeon Pro W6800',
        keywords: ['Pro', 'W6800'],
      },
      {
        id: 109,
        label: 'Radeon Pro WX 2100',
        keywords: ['Pro', 'WX', '2100'],
      },
      {
        id: 110,
        label: 'Radeon Pro WX 3100',
        keywords: ['Pro', 'WX', '3100'],
      },
      {
        id: 111,
        label: 'Radeon Pro WX 3200',
        keywords: ['Pro', 'WX', '3200'],
      },
      {
        id: 112,
        label: 'Radeon Pro WX 4100',
        keywords: ['Pro', 'WX', '4100'],
      },
      {
        id: 113,
        label: 'Radeon PRO WX 5100',
        keywords: ['PRO', 'WX', '5100'],
      },
      {
        id: 114,
        label: 'Radeon R5 220',
        keywords: ['R5', '220'],
      },
      {
        id: 115,
        label: 'Radeon R5 230',
        keywords: ['R5', '230'],
      },
      {
        id: 116,
        label: 'Radeon R7 240',
        keywords: ['R7', '240'],
      },
      {
        id: 117,
        label: 'Radeon R7 250',
        keywords: ['R7', '250'],
      },
      {
        id: 118,
        label: 'Radeon R7 265',
        keywords: ['R7', '265'],
      },
      {
        id: 119,
        label: 'Radeon R7 350',
        keywords: ['R7', '350'],
      },
      {
        id: 120,
        label: 'Radeon R7 430',
        keywords: ['R7', '430'],
      },
      {
        id: 121,
        label: 'Radeon R9 280X',
        keywords: ['R9', '280X'],
      },
      {
        id: 122,
        label: 'Radeon R9 370',
        keywords: ['R9', '370'],
      },
      {
        id: 123,
        label: 'Radeon RX 470',
        keywords: ['RX', '470'],
      },
      {
        id: 124,
        label: 'Radeon RX 480',
        keywords: ['RX', '480'],
      },
      {
        id: 125,
        label: 'Radeon 550',
        keywords: ['550'],
      },
      {
        id: 126,
        label: 'Radeon RX 550',
        keywords: ['RX', '550'],
      },
      {
        id: 127,
        label: 'Radeon RX 560',
        keywords: ['RX', '560'],
      },
      {
        id: 128,
        label: 'Radeon RX 570',
        keywords: ['RX', '570'],
      },
      {
        id: 129,
        label: 'Radeon RX 580',
        keywords: ['RX', '580'],
      },
      {
        id: 130,
        label: 'Intel Arc A310',
        keywords: ['Intel', 'Arc', 'A310'],
      },
      {
        id: 131,
        label: 'Intel Arc A380',
        keywords: ['Intel', 'Arc', 'A380'],
      },
      {
        id: 132,
        label: 'Intel Arc A750',
        keywords: ['Intel', 'Arc', 'A750'],
      },
      {
        id: 133,
        label: 'Tesla K40',
        keywords: ['Tesla', 'K40'],
      },
      {
        id: 134,
        label: 'Tesla M10',
        keywords: ['Tesla', 'M10'],
      },
      {
        id: 135,
        label: 'Tesla M60',
        keywords: ['Tesla', 'M60'],
      },
      {
        id: 136,
        label: 'Tesla P40',
        keywords: ['Tesla', 'P40'],
      },
      {
        id: 137,
        label: 'Tesla P100',
        keywords: ['Tesla', 'P100'],
      },
      {
        id: 138,
        label: 'Tesla T4',
        keywords: ['Tesla', 'T4'],
      },
      {
        id: 139,
        label: 'A2',
        keywords: ['A2'],
      },
      {
        id: 140,
        label: 'A10',
        keywords: ['A10'],
      },
      {
        id: 141,
        label: 'A16',
        keywords: ['A16'],
      },
      {
        id: 142,
        label: 'A30',
        keywords: ['A30'],
      },
      {
        id: 143,
        label: 'A40',
        keywords: ['A40'],
      },
      {
        id: 144,
        label: 'A100',
        keywords: ['A100'],
      },
      {
        id: 145,
        label: 'T400',
        keywords: ['T400'],
      },
      {
        id: 146,
        label: 'T600',
        keywords: ['T600'],
      },
      {
        id: 147,
        label: 'T1000',
        keywords: ['T1000'],
      },
      {
        id: 148,
        label: 'Tesla V100',
        keywords: ['Tesla', 'V100'],
      },
      {
        id: 149,
        label: 'CMP 90HX',
        keywords: ['CMP', '90HX'],
      },
      {
        id: 150,
        label: 'GPRO X060',
        keywords: ['GPRO', 'X060'],
      },
      {
        id: 151,
        label: 'GPRO X080',
        keywords: ['GPRO', 'X080'],
      },
    ],
  },
}

export type FilterOptionType = {
  id: number
  label: string
  keywords?: string[]
}

export type FilterItemType = {
  key: FiltersEnum,
  label: string,
  options: FilterOptionType[],
}

export type FilterItemListType = {
  [key in FiltersEnum]?: FilterItemType
}

export type FiltersType = {
  [key in CategoriesEnum]: FilterItemListType
}

export const FILTERS: FiltersType = {
  [CategoriesEnum.VIDEOCARDS]: VIDEOCARDS_FILTERS,
  [CategoriesEnum.MOTHERBOARDS]: {},
  [CategoriesEnum.PROCESSORS]: {},
}
