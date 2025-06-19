
export interface ZodiacSign {
  name: string;
  nameEn: string;
  symbol: string;
  element: string;
  startDate: string;
  endDate: string;
  traits: {
    positive: string[];
    negative: string[];
    characteristics: string[];
  };
  colors: string[];
  description: string;
}

export const zodiacSigns: Record<string, ZodiacSign> = {
  aries: {
    name: 'Bélier',
    nameEn: 'aries',
    symbol: '♈',
    element: 'Feu',
    startDate: '03-21',
    endDate: '04-19',
    traits: {
      positive: ['Leader', 'Courageux', 'Enthousiaste', 'Initiateur', 'Franc'],
      negative: ['Imprudent', 'Nerveux', 'Égoïste', 'Impatient', 'Précipité'],
      characteristics: ['Aime les défis', 'Dynamique', 'Indépendant', 'Confiant', 'Ambitieux']
    },
    colors: ['#FF4500', '#DC143C'],
    description: 'Le Bélier est le premier signe astrologique, ses natifs se distinguent par leur leadership, leur courage et leur enthousiasme dans tout ce qu\'ils entreprennent.'
  },
  taurus: {
    name: 'Taureau',
    nameEn: 'taurus',
    symbol: '♉',
    element: 'Terre',
    startDate: '04-20',
    endDate: '05-20',
    traits: {
      positive: ['Patient', 'Fiable', 'Pratique', 'Responsable', 'Fidèle'],
      negative: ['Têtu', 'Paresseux', 'Matérialiste', 'Lent', 'Rigide'],
      characteristics: ['Aime le confort', 'Sensuel', 'Artistique', 'Amoureux de la nature', 'Stable']
    },
    colors: ['#228B22', '#8FBC8F'],
    description: 'Le Taureau se distingue par sa stabilité et sa constance, ses natifs aiment la beauté et le confort et ont une volonté forte.'
  },
  gemini: {
    name: 'Gémeaux',
    nameEn: 'gemini',
    symbol: '♊',
    element: 'Air',
    startDate: '05-21',
    endDate: '06-20',
    traits: {
      positive: ['Intelligent', 'Curieux', 'Adaptable', 'Joyeux', 'Communicatif'],
      negative: ['Changeant', 'Superficiel', 'Dispersé', 'Nerveux', 'Instable'],
      characteristics: ['Apprend vite', 'Aime le changement', 'Social', 'Eloquent', 'Multi-talentueux']
    },
    colors: ['#FFD700', '#FFA500'],
    description: 'Les Gémeaux se distinguent par leur intelligence et leur curiosité, ils aiment apprendre et communiquer avec les autres.'
  },
  cancer: {
    name: 'Cancer',
    nameEn: 'cancer',
    symbol: '♋',
    element: 'Eau',
    startDate: '06-21',
    endDate: '07-22',
    traits: {
      positive: ['Émotionnel', 'Compatissant', 'Tendre', 'Fidèle', 'Intuitif'],
      negative: ['Très sensible', 'Lunatique', 'Possessif', 'Anxieux', 'Introverti'],
      characteristics: ['Amoureux de la famille', 'Protecteur', 'Imaginatif', 'Bonne mémoire', 'Profondément émotionnel']
    },
    colors: ['#87CEEB', '#4682B4'],
    description: 'Le Cancer se distingue par l\'émotion et la tendresse, ses natifs sont attachés à la famille et ont une forte intuition.'
  },
  leo: {
    name: 'Lion',
    nameEn: 'leo',
    symbol: '♌',
    element: 'Feu',
    startDate: '07-23',
    endDate: '08-22',
    traits: {
      positive: ['Généreux', 'Confiant', 'Divertissant', 'Fort', 'Créatif'],
      negative: ['Arrogant', 'Têtu', 'Dramatique', 'Dominateur', 'Égocentrique'],
      characteristics: ['Aime les projecteurs', 'Royal', 'Influent', 'Organisé', 'Énergie positive']
    },
    colors: ['#FFD700', '#FF8C00'],
    description: 'Le Lion est le roi des signes, ses natifs se distinguent par leur confiance, leur générosité et leur amour du spectacle et de la création.'
  },
  virgo: {
    name: 'Vierge',
    nameEn: 'virgo',
    symbol: '♍',
    element: 'Terre',
    startDate: '08-23',
    endDate: '09-22',
    traits: {
      positive: ['Organisé', 'Précis', 'Serviable', 'Pratique', 'Modeste'],
      negative: ['Critique', 'Anxieux', 'Trop réfléchi', 'Timide', 'Difficile à satisfaire'],
      characteristics: ['Amoureux de la perfection', 'Analytique', 'Serviable', 'Rationnel', 'Responsable']
    },
    colors: ['#9ACD32', '#6B8E23'],
    description: 'La Vierge se distingue par la précision et l\'organisation, ses natifs aiment la perfection et aider les autres.'
  },
  libra: {
    name: 'Balance',
    nameEn: 'libra',
    symbol: '♎',
    element: 'Air',
    startDate: '09-23',
    endDate: '10-22',
    traits: {
      positive: ['Juste', 'Diplomatique', 'Pacifique', 'Élégant', 'Social'],
      negative: ['Indécis', 'Superficiel', 'Paresseux', 'Dépendant des autres', 'Évitant'],
      characteristics: ['Amoureux de la beauté', 'Équilibré', 'Romantique', 'Artistique', 'Pacificateur']
    },
    colors: ['#FFB6C1', '#DDA0DD'],
    description: 'La Balance recherche la justice et l\'équilibre, ses natifs aiment la beauté, la paix et les relations harmonieuses.'
  },
  scorpio: {
    name: 'Scorpion',
    nameEn: 'scorpio',
    symbol: '♏',
    element: 'Eau',
    startDate: '10-23',
    endDate: '11-21',
    traits: {
      positive: ['Volontaire', 'Courageux', 'Fidèle', 'Intuitif', 'Émotionnel'],
      negative: ['Jaloux', 'Vengeur', 'Secret', 'Contrôlant', 'Méfiant'],
      characteristics: ['Mystérieux', 'Profond', 'Transformateur', 'Fort', 'Enquêteur']
    },
    colors: ['#8B0000', '#800080'],
    description: 'Le Scorpion est l\'un des signes les plus puissants, ses natifs se distinguent par le mystère, la force émotionnelle et la volonté ferme.'
  },
  sagittarius: {
    name: 'Sagittaire',
    nameEn: 'sagittarius',
    symbol: '♐',
    element: 'Feu',
    startDate: '11-22',
    endDate: '12-21',
    traits: {
      positive: ['Optimiste', 'Aventurier', 'Franc', 'Philosophe', 'Libre'],
      negative: ['Imprudent', 'Impatient', 'Dépensier', 'Irresponsable', 'Précipité'],
      characteristics: ['Amoureux du voyage', 'Chercheur de vérité', 'Amoureux de la liberté', 'Apprenant', 'Joyeux']
    },
    colors: ['#800080', '#4B0082'],
    description: 'Le Sagittaire aime la liberté et l\'aventure, ses natifs sont optimistes et aiment explorer le monde et la philosophie.'
  },
  capricorn: {
    name: 'Capricorne',
    nameEn: 'capricorn',
    symbol: '♑',
    element: 'Terre',
    startDate: '12-22',
    endDate: '01-19',
    traits: {
      positive: ['Discipliné', 'Ambitieux', 'Responsable', 'Patient', 'Pratique'],
      negative: ['Pessimiste', 'Rigide', 'Froid émotionnellement', 'Opportuniste', 'Obsédé par le travail'],
      characteristics: ['Amoureux du succès', 'Organisé', 'Traditionnel', 'Leader', 'Conservateur']
    },
    colors: ['#2F4F4F', '#556B2F'],
    description: 'Le Capricorne se distingue par l\'ambition et la discipline, ses natifs aiment le succès, la responsabilité et l\'organisation.'
  },
  aquarius: {
    name: 'Verseau',
    nameEn: 'aquarius',
    symbol: '♒',
    element: 'Air',
    startDate: '01-20',
    endDate: '02-18',
    traits: {
      positive: ['Créatif', 'Indépendant', 'Humanitaire', 'Intelligent', 'Original'],
      negative: ['Isolé', 'Têtu', 'Rebelle', 'Non émotionnel', 'Irrégulier'],
      characteristics: ['Amoureux du renouveau', 'Penseur', 'Social', 'Libéré', 'Ami fidèle']
    },
    colors: ['#00CED1', '#20B2AA'],
    description: 'Le Verseau est créatif et libéré, ses natifs aiment le renouveau et l\'humanité et ont des idées innovantes.'
  },
  pisces: {
    name: 'Poissons',
    nameEn: 'pisces',
    symbol: '♓',
    element: 'Eau',
    startDate: '02-19',
    endDate: '03-20',
    traits: {
      positive: ['Sensible', 'Artistique', 'Compatissant', 'Intuitif', 'Compréhensif'],
      negative: ['Rêveur', 'Fuyant la réalité', 'Faible de volonté', 'Désorganisé', 'Pessimiste'],
      characteristics: ['Imaginatif', 'Spirituel', 'Créatif', 'Empathique', 'Mystérieux']
    },
    colors: ['#7B68EE', '#9370DB'],
    description: 'Les Poissons sont sensibles et artistiques, ils sont rêveurs et créatifs avec une forte intuition et une nature spirituelle.'
  }
};

export const getZodiacSign = (birthDate: string): string => {
  const date = new Date(birthDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateString = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

  for (const [key, sign] of Object.entries(zodiacSigns)) {
    const startMonth = parseInt(sign.startDate.split('-')[0]);
    const startDay = parseInt(sign.startDate.split('-')[1]);
    const endMonth = parseInt(sign.endDate.split('-')[0]);
    const endDay = parseInt(sign.endDate.split('-')[1]);

    if (startMonth === endMonth) {
      if (month === startMonth && day >= startDay && day <= endDay) {
        return key;
      }
    } else {
      if ((month === startMonth && day >= startDay) || 
          (month === endMonth && day <= endDay)) {
        return key;
      }
    }
  }

  return 'aries'; // fallback
};
