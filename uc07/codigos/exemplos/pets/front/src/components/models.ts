export interface Pet {
  user_id: Number;
  name: String;
  type: String;
  breed: String;
}

export interface Weight {
  pet_id: Number;
  date: Date;
  value: Number;
}

export interface Drug {
  pet_id: Number;
  type: String;
  name: String;
  date: Date;
}
