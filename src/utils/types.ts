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
    factures?: Array<IFacture>;
    campuses?: Array<ICampus>;
    programs?: Array<IProgram>;
    modalite_paiements?: Array<IModalitePaiement>;
    etudiants?: Array<IEtudiant>;
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

// TR
export type ICampus = {
    id: number;
    name: string;
    campusId: string;
    logo: string;
};

export type IProgram = {
    id: number;
    name: string;
    typeProgram: "Initiale" | "Continue";
    programId: string;
    code: string;
    rentree: string;
};

export type IModalitePaiement = {
    id: number;
    name: string;
    modalitePaiementId: string;
};

export type IBanque = {
    id: number;
    name: string;
    banqueId: string;
};

// TT
export type IEtudiant = {
    id: number;
    etudiantId: string;
    code: string;
    nom: string;
    cin: string;
    cne: string;
    dateInscription: string;
    campus: ICampus;
    program: IProgram;
    modalitePaiement: IModalitePaiement;
};

/**
 * 
 * {
    "nom": "etudiant5",
    "campus": {
        "id": 2
    },
    "program": {
        "id": 2
    }
}
 * 
 */

export type IPaiement = {
    id: number;
    paiementId: string;
    etudiant: IEtudiant;
    montant: string;
    moyenPaiement: string;
    numeroCheque: string;
    banque: IBanque;
    datePaiement: string;
    moisPaiement: string;
};

export type IFacture = {
    id: number;
    montant: string;
    program: IProgram;
    month: string;
    status: 'paid' | 'not paid';
};

// Filters 

export type IEtudiantFilter = {
    code?: string;
    nom_etudiant?: string;
    id_etudiant?: string;
}

export type IProgrammFilter = {
    name_program: string;
}

export type IMonthFilter = {
    mois: string;
}

export interface IFilter extends IEtudiantFilter, IProgrammFilter, IMonthFilter { }

export type Anchor = "top" | "left" | "bottom" | "right";
