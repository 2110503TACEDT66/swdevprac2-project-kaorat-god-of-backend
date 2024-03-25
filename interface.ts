

export interface MassageshopItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  __v: number,
  id: string
}
  
export interface MassageshopJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: MassageshopItem[]
}

export interface MassagerItem {
  _id: string,
  name: string,
  address: string,
  district: string,
  province: string,
  postalcode: string,
  tel: string,
  picture: string,
  __v: number,
  id: string
}
  
export interface MassagerJson {
  success: boolean,
  count: number,
  pagination: Object,
  data: MassagerItem[]
}