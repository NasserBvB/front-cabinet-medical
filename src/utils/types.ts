export type IAuthState = {
  isLoggedIn: boolean;
  currentUser: IUser;
  loading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: {
    title: string;
    message: string;
  };
  success: {
    title: string;
    message: string;
  };
  users: Array<IUser>;
};

export type IUser = {
  email: string;
  password: string;
  profil: IProfil;
  tel: string;
  prenom: string;
  nom: string;
  utilisateurId: string;
  datecreation: string;
  emailverificationStatus: string;
  encryptedPassword: string;
  id: number;
  emailverificationToken: string;
  login: string;
  isSuccess: boolean;
  success: { message: string; type: "success" };
};

export type IResponse = {
  data: any;
  isError: boolean;
  isSuccess: boolean;
  success: { message: string; type: "success" };
  error: { message: string; type: "error" };
};

export type IProfil = {
  id: number;
  name: string;
  privileges: Array<IPrevilege>;
};

export type IPrevilege = {
  privilegeId: any;
  name: string;
  id: number;
  path: string;
  ordre: number;
};


export type IProgrammFilter = {
  name_program: string;
};

export type IMonthFilter = {
  mois: string;
};


export type IColor = "error" | "success" | "primary" | "secondary" | "warning"; 

export interface IPatient {
  id: number;
  patientId: string;
  nordre: string;
  nomcomplet: string;
  journaissance: string;
  moisnaissance: string;
  anneenaissance: string;
  cin: string;
  datecreation: string;
  tel: string;
  adresse: string;
  type: string;
}

export interface IConsultation {
  id: number;
  idpatient: number;
  age: string;
  dateconsultation: string;
  datecontrole: string;
  mutuelle: string;
  prix: number;
  od: string;
  og: string;
  apte: string;
  correction: string;
  remarque: string;
  typepatient: string;
  initial: string;
  maintien: string;
  extention: string;
}

export interface IMedicament {
    id: number;
	nom: string;
	forme: string;
}

export interface IActivite {
    id: number;
	activite: string;
    price: number;
	display: string;
}