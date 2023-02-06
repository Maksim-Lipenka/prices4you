import { CategoriesEnum } from './consts'

export enum FiltersEnum {
  MANUFACTURER = 'manufacturer',
  GPU = 'gpu',
  CHIPSET = 'chipset',
  MODEL_LINEUP = 'modelLineup',
}

export const VIDEOCARDS_FILTERS = {
  [FiltersEnum.MANUFACTURER]: {
    key: FiltersEnum.MANUFACTURER,
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
  [FiltersEnum.GPU]: {
    key: FiltersEnum.GPU,
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

export const MOTHERBOARDS_FILTERS = {
  [FiltersEnum.MANUFACTURER]: {
    key: FiltersEnum.MANUFACTURER,
    label: 'Manufacturer',
    options: [
      {
        id: 1,
        label: 'Advantech',
      },
      {
        id: 2,
        label: 'AFOX',
      },
      {
        id: 3,
        label: 'AMD',
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
        label: 'Biostar',
      },
      {
        id: 7,
        label: 'Colorful',
      },
      {
        id: 8,
        label: 'EliteGroup',
      },
      {
        id: 9,
        label: 'Esonic',
      },
      {
        id: 10,
        label: 'EVGA',
      },
      {
        id: 11,
        label: 'Fujitsu',
      },
      {
        id: 12,
        label: 'Gigabyte',
      },
      {
        id: 13,
        label: 'Intel',
      },
      {
        id: 14,
        label: 'Jetway',
      },
      {
        id: 15,
        label: 'JWIPC',
      },
      {
        id: 16,
        label: 'MEDION',
      },
      {
        id: 17,
        label: 'MiTAC',
      },
      {
        id: 18,
        label: 'MSI',
      },
      {
        id: 19,
        label: 'NZXT',
      },
      {
        id: 20,
        label: 'Pegatron',
      },
      {
        id: 21,
        label: 'Supermicro',
      },
      {
        id: 22,
        label: 'TYAN',
      },
      {
        id: 23,
        label: 'ITZR',
      },
      {
        id: 24,
        label: 'MaxSun',
      },
      {
        id: 25,
        label: 'SOYO',
      },
      {
        id: 26,
        label: 'Supermicro',
      },
    ],
  },
  [FiltersEnum.CHIPSET]: {
    key: FiltersEnum.CHIPSET,
    label: 'Chipset',
    options: [
      {
        id: 1,
        label: 'AMD A68',
        keywords: ['A68'],
      },
      {
        id: 2,
        label: 'AMD A68H',
        keywords: ['A68H'],
      },
      {
        id: 3,
        label: 'AMD A75',
        keywords: ['A75'],
      },
      {
        id: 4,
        label: 'AMD A78',
        keywords: ['A78'],
      },
      {
        id: 5,
        label: 'AMD A85X',
        keywords: ['A85X'],
      },
      {
        id: 6,
        label: 'AMD A88',
        keywords: ['A88'],
      },
      {
        id: 7,
        label: 'AMD A88X',
        keywords: ['A88X'],
      },
      {
        id: 8,
        label: 'AMD A320',
        keywords: ['A320'],
      },
      {
        id: 9,
        label: 'AMD A520',
        keywords: ['A520'],
      },
      {
        id: 10,
        label: 'AMD B350',
        keywords: ['B350'],
      },
      {
        id: 11,
        label: 'AMD B450',
        keywords: ['B450'],
      },
      {
        id: 12,
        label: 'AMD B550',
        keywords: ['B550'],
      },
      {
        id: 13,
        label: 'AMD B650',
        keywords: ['B650'],
      },
      {
        id: 14,
        label: 'AMD B650E',
        keywords: ['B650E'],
      },
      {
        id: 17,
        label: 'AMD WRX80',
        keywords: ['WRX80'],
      },
      {
        id: 18,
        label: 'AMD X370',
        keywords: ['X370'],
      },
      {
        id: 19,
        label: 'AMD X399',
        keywords: ['X399'],
      },
      {
        id: 20,
        label: 'AMD X470',
        keywords: ['X470'],
      },
      {
        id: 21,
        label: 'AMD X570',
        keywords: ['X570'],
      },
      {
        id: 22,
        label: 'AMD X670',
        keywords: ['X670'],
      },
      {
        id: 23,
        label: 'AMD X670E',
        keywords: ['X670E'],
      },
      {
        id: 24,
        label: 'AMD TRX40',
        keywords: ['TRX40'],
      },
      {
        id: 25,
        label: 'Intel B75',
        keywords: ['B75'],
      },
      {
        id: 26,
        label: 'Intel B85',
        keywords: ['B85'],
      },
      {
        id: 27,
        label: 'Intel B150',
        keywords: ['B150'],
      },
      {
        id: 28,
        label: 'Intel B250',
        keywords: ['B250'],
      },
      {
        id: 29,
        label: 'Intel B360',
        keywords: ['B360'],
      },
      {
        id: 30,
        label: 'Intel B365',
        keywords: ['B365'],
      },
      {
        id: 31,
        label: 'Intel B460',
        keywords: ['B460'],
      },
      {
        id: 32,
        label: 'Intel B560',
        keywords: ['B560'],
      },
      {
        id: 33,
        label: 'Intel B660',
        keywords: ['B660'],
      },
      {
        id: 34,
        label: 'Intel B760',
        keywords: ['B760'],
      },
      {
        id: 35,
        label: 'Intel C222',
        keywords: ['C222'],
      },
      {
        id: 36,
        label: 'Intel C224',
        keywords: ['C224'],
      },
      {
        id: 37,
        label: 'Intel C226',
        keywords: ['C226'],
      },
      {
        id: 38,
        label: 'Intel C232',
        keywords: ['C232'],
      },
      {
        id: 39,
        label: 'Intel C236',
        keywords: ['C236'],
      },
      {
        id: 40,
        label: 'Intel C242',
        keywords: ['C242'],
      },
      {
        id: 41,
        label: 'Intel C246',
        keywords: ['C246'],
      },
      {
        id: 42,
        label: 'Intel C252',
        keywords: ['C252'],
      },
      {
        id: 43,
        label: 'Intel C256',
        keywords: ['C256'],
      },
      {
        id: 44,
        label: 'Intel C422',
        keywords: ['C422'],
      },
      {
        id: 45,
        label: 'Intel C602',
        keywords: ['C602'],
      },
      {
        id: 46,
        label: 'Intel C612',
        keywords: ['C612'],
      },
      {
        id: 47,
        label: 'Intel C621',
        keywords: ['C621'],
      },
      {
        id: 48,
        label: 'Intel C622',
        keywords: ['C622'],
      },
      {
        id: 49,
        label: 'Intel C624',
        keywords: ['C624'],
      },
      {
        id: 50,
        label: 'Intel G31',
        keywords: ['G31'],
      },
      {
        id: 51,
        label: 'Intel G33',
        keywords: ['G33'],
      },
      {
        id: 52,
        label: 'Intel G41',
        keywords: ['G41'],
      },
      {
        id: 53,
        label: 'Intel H55',
        keywords: ['H55'],
      },
      {
        id: 54,
        label: 'Intel H61',
        keywords: ['H61'],
      },
      {
        id: 55,
        label: 'Intel H81',
        keywords: ['H81'],
      },
      {
        id: 56,
        label: 'Intel H87',
        keywords: ['H87'],
      },
      {
        id: 57,
        label: 'Intel H110',
        keywords: ['H110'],
      },
      {
        id: 58,
        label: 'Intel H170',
        keywords: ['H170'],
      },
      {
        id: 59,
        label: 'Intel H270',
        keywords: ['H270'],
      },
      {
        id: 60,
        label: 'Intel H310',
        keywords: ['H310'],
      },
      {
        id: 61,
        label: 'Intel H310C (H310 R2.0)',
        keywords: ['H310C'],
      },
      {
        id: 62,
        label: 'Intel H370',
        keywords: ['H370'],
      },
      {
        id: 63,
        label: 'Intel H410',
        keywords: ['H410'],
      },
      {
        id: 64,
        label: 'Intel H470',
        keywords: ['H470'],
      },
      {
        id: 65,
        label: 'Intel H510',
        keywords: ['H510'],
      },
      {
        id: 66,
        label: 'Intel H570',
        keywords: ['H570'],
      },
      {
        id: 67,
        label: 'Intel H610',
        keywords: ['H610'],
      },
      {
        id: 68,
        label: 'Intel H670',
        keywords: ['H670'],
      },
      {
        id: 69,
        label: 'Intel H770',
        keywords: ['H770'],
      },
      {
        id: 70,
        label: 'Intel HM65',
        keywords: ['HM65'],
      },
      {
        id: 71,
        label: 'Intel HM76',
        keywords: ['HM76'],
      },
      {
        id: 72,
        label: 'Intel HM86',
        keywords: ['HM86'],
      },
      {
        id: 73,
        label: 'Intel P35',
        keywords: ['P35'],
      },
      {
        id: 74,
        label: 'Intel P43',
        keywords: ['P43'],
      },
      {
        id: 75,
        label: 'Intel P55',
        keywords: ['P55'],
      },
      {
        id: 76,
        label: 'Intel P67',
        keywords: ['P67'],
      },
      {
        id: 77,
        label: 'Intel Q77',
        keywords: ['Q77'],
      },
      {
        id: 78,
        label: 'Intel Q87',
        keywords: ['Q87'],
      },
      {
        id: 79,
        label: 'Intel Q150',
        keywords: ['Q150'],
      },
      {
        id: 80,
        label: 'Intel Q170',
        keywords: ['Q170'],
      },
      {
        id: 81,
        label: 'Intel Q270',
        keywords: ['Q270'],
      },
      {
        id: 82,
        label: 'Intel Q370',
        keywords: ['Q370'],
      },
      {
        id: 83,
        label: 'Intel Q470',
        keywords: ['Q470'],
      },
      {
        id: 84,
        label: 'Intel Q570',
        keywords: ['Q570'],
      },
      {
        id: 85,
        label: 'Intel Q670',
        keywords: ['Q670'],
      },
      {
        id: 86,
        label: 'Intel X58',
        keywords: ['X58'],
      },
      {
        id: 87,
        label: 'Intel X79',
        keywords: ['X79'],
      },
      {
        id: 88,
        label: 'Intel X99',
        keywords: ['X99'],
      },
      {
        id: 89,
        label: 'Intel X299',
        keywords: ['X299'],
      },
      {
        id: 90,
        label: 'Intel Z77',
        keywords: ['Z77'],
      },
      {
        id: 91,
        label: 'Intel Z97',
        keywords: ['Z97'],
      },
      {
        id: 92,
        label: 'Intel Z170',
        keywords: ['Z170'],
      },
      {
        id: 93,
        label: 'Intel Z270',
        keywords: ['Z270'],
      },
      {
        id: 94,
        label: 'Intel Z370',
        keywords: ['Z370'],
      },
      {
        id: 95,
        label: 'Intel Z390',
        keywords: ['Z390'],
      },
      {
        id: 96,
        label: 'Intel Z490',
        keywords: ['Z490'],
      },
      {
        id: 97,
        label: 'Intel Z590',
        keywords: ['Z590'],
      },
      {
        id: 98,
        label: 'Intel Z690',
        keywords: ['Z690'],
      },
      {
        id: 99,
        label: 'Intel Z790',
        keywords: ['Z790'],
      },
      {
        id: 100,
        label: 'Intel W480',
        keywords: ['W480'],
      },
      {
        id: 101,
        label: 'Intel W680',
        keywords: ['W680'],
      },
    ],
  },
}

export const PROCESSORS_FILTERS = {
  [FiltersEnum.MANUFACTURER]: {
    key: FiltersEnum.MANUFACTURER,
    label: 'Manufacturer',
    options: [
      {
        id: 1,
        label: 'AMD',
      },
      {
        id: 2,
        label: 'Intel',
      },
    ],
  },
  [FiltersEnum.MODEL_LINEUP]: {
    key: FiltersEnum.MODEL_LINEUP,
    label: 'Model Lineup',
    options: [
      {
        id: 1,
        label: 'Ryzen 3',
        regexp: /Ryzen\W{0,2}3/i,
      },
      {
        id: 2,
        label: 'Ryzen 5',
        regexp: /Ryzen\W{0,2}5/i,
      },
      {
        id: 3,
        label: 'Ryzen 7',
        regexp: /Ryzen\W{0,2}7/i,
      },
      {
        id: 4,
        label: 'Ryzen 9',
        regexp: /Ryzen[.?]9/,
      },
      {
        id: 5,
        label: 'Core i3',
        keywords: ['Core', 'i3'],
      },
      {
        id: 6,
        label: 'Core i5',
        keywords: ['Core', 'i5'],
      },
      {
        id: 7,
        label: 'Core i7',
        keywords: ['Core', 'i7'],
      },
      {
        id: 8,
        label: 'Core i9',
        keywords: ['Core', 'i9'],
      },
      {
        id: 9,
        label: 'A4',
        keywords: ['A4'],
      },
      {
        id: 10,
        label: 'A6',
        keywords: ['A6'],
      },
      {
        id: 11,
        label: 'A8',
        keywords: ['A8'],
      },
      {
        id: 12,
        label: 'A10',
        keywords: ['A10'],
      },
      {
        id: 13,
        label: 'A12',
        keywords: ['A12'],
      },
      {
        id: 14,
        label: 'Athlon',
        keywords: ['Athlon'],
      },
      {
        id: 15,
        label: 'Athlon II',
        keywords: ['Athlon II', 'Athlon 2'],
      },
      {
        id: 16,
        label: 'Athlon Pro',
        keywords: ['Athlon Pro'],
      },
      {
        id: 17,
        label: 'Athlon X2',
        keywords: ['Athlon X2'],
      },
      {
        id: 18,
        label: 'Athlon X4',
        keywords: ['Athlon X4'],
      },
      {
        id: 19,
        label: 'Celeron',
        keywords: ['Celeron'],
      },
      {
        id: 20,
        label: 'Core 2 Duo',
        keywords: ['Core 2 Duo'],
      },
      {
        id: 21,
        label: 'Core 2 Extreme',
        keywords: ['Core 2 Extreme'],
      },
      {
        id: 22,
        label: 'Core Duo',
        keywords: ['Core Duo'],
      },
      {
        id: 23,
        label: 'Epyc',
        keywords: ['Epyc'],
      },
      {
        id: 26,
        label: 'FX 4-Core',
        keywords: ['FX-4'],
      },
      {
        id: 27,
        label: 'FX 6-Core',
        keywords: ['FX-6'],
      },
      {
        id: 28,
        label: 'FX 8-Core',
        keywords: ['FX-8'],
      },
      {
        id: 29,
        label: 'Opteron',
        keywords: ['Opteron'],
      },
      {
        id: 30,
        label: 'Pentium',
        keywords: ['Pentium'],
      },
      {
        id: 31,
        label: 'Phenom II X2',
        keywords: ['Phenom II X2'],
      },
      {
        id: 32,
        label: 'Phenom II X4',
        keywords: ['Phenom II X4'],
      },
      {
        id: 33,
        label: 'Ryzen 3 Pro',
        keywords: ['Ryzen', '3 Pro'],
      },
      {
        id: 34,
        label: 'Ryzen 5 Pro',
        keywords: ['Ryzen', '5 Pro'],
      },
      {
        id: 35,
        label: 'Ryzen 7 Pro',
        keywords: ['Ryzen', '7 Pro'],
      },
      {
        id: 36,
        label: 'Ryzen Threadripper',
        keywords: ['Ryzen', 'Threadripper'],
      },
      {
        id: 37,
        label: 'Sempron',
        keywords: ['Sempron'],
      },
      {
        id: 38,
        label: 'Xeon',
        keywords: ['Xeon'],
      },
      {
        id: 39,
        label: 'Xeon E',
        keywords: ['Xeon E'],
      },
      {
        id: 40,
        label: 'Xeon W',
        keywords: ['Xeon W'],
      },
    ],
  },
}

export type FiltersQuery = {
  [key in FiltersEnum]?: string
}

export type FilterOptionType = {
  id: number
  label: string
  keywords?: string[]
}

export type FilterItemType = {
  key: FiltersEnum
  label: string
  options: FilterOptionType[]
}

export type FilterItemListType = {
  [key in FiltersEnum]?: FilterItemType
}

export type FiltersType = {
  [key in CategoriesEnum]: FilterItemListType
}

export const FILTERS: FiltersType = {
  [CategoriesEnum.VIDEOCARDS]: VIDEOCARDS_FILTERS,
  [CategoriesEnum.MOTHERBOARDS]: MOTHERBOARDS_FILTERS,
  [CategoriesEnum.PROCESSORS]: PROCESSORS_FILTERS,
}
