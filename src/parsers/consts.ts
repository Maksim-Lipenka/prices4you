export enum CategoriesEnum {
  VIDEOCARDS = "videocards",
  MOTHERBOARDS = "motherboards",
  PROCESSORS = "processors",
}

export const CATEGORIES = {
  VIDEOCARDS: {
    id: 1,
    key: CategoriesEnum.VIDEOCARDS,
    name: 'Video cards',
  },
  MOTHERBOARDS: {
    id: 2,
    key: CategoriesEnum.MOTHERBOARDS,
    name: 'Motherboards',
  },
  PROCESSORS: {
    id: 3,
    key: CategoriesEnum.PROCESSORS,
    name: 'Processors',
  },
}

export const SHOPS = {
  PCROOM: {
    id: 1,
    name: "PC Room",
    url: "https://pcroom.ge",
  },
  GITEC: {
    id: 2,
    name: "gITec",
    url: "https://gitec.ge",
  }
};
