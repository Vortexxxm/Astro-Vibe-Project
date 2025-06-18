
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
    name: 'الحمل',
    nameEn: 'aries',
    symbol: '♈',
    element: 'النار',
    startDate: '03-21',
    endDate: '04-19',
    traits: {
      positive: ['قيادي', 'شجاع', 'متحمس', 'مبادر', 'صريح'],
      negative: ['متهور', 'عصبي', 'أناني', 'صبره قليل', 'متسرع'],
      characteristics: ['يحب التحديات', 'ديناميكي', 'مستقل', 'واثق من نفسه', 'طموح']
    },
    colors: ['#FF4500', '#DC143C'],
    description: 'برج الحمل هو أول الأبراج الفلكية، يتميز أصحابه بالقيادة والشجاعة والحماس في كل ما يقومون به.'
  },
  taurus: {
    name: 'الثور',
    nameEn: 'taurus',
    symbol: '♉',
    element: 'الأرض',
    startDate: '04-20',
    endDate: '05-20',
    traits: {
      positive: ['صبور', 'موثوق', 'عملي', 'مسؤول', 'مخلص'],
      negative: ['عنيد', 'كسول', 'مادي', 'بطيء', 'جامد'],
      characteristics: ['يحب الراحة', 'حسي', 'فني', 'محب للطبيعة', 'مستقر']
    },
    colors: ['#228B22', '#8FBC8F'],
    description: 'برج الثور يتميز بالثبات والاستقرار، أصحابه يحبون الجمال والراحة ولديهم إرادة قوية.'
  },
  gemini: {
    name: 'الجوزاء',
    nameEn: 'gemini',
    symbol: '♊',
    element: 'الهواء',
    startDate: '05-21',
    endDate: '06-20',
    traits: {
      positive: ['ذكي', 'فضولي', 'متكيف', 'مرح', 'تواصلي'],
      negative: ['متقلب', 'سطحي', 'مشتت', 'عصبي', 'غير مستقر'],
      characteristics: ['سريع التعلم', 'محب للتغيير', 'اجتماعي', 'بارع في الكلام', 'متعدد المواهب']
    },
    colors: ['#FFD700', '#FFA500'],
    description: 'برج الجوزاء يتميز بالذكاء والفضول، أصحابه محبون للتعلم والتواصل مع الآخرين.'
  },
  cancer: {
    name: 'السرطان',
    nameEn: 'cancer',
    symbol: '♋',
    element: 'الماء',
    startDate: '06-21',
    endDate: '07-22',
    traits: {
      positive: ['عاطفي', 'رحيم', 'حنون', 'وفي', 'حدسي'],
      negative: ['حساس جداً', 'متقلب المزاج', 'متشبث', 'قلق', 'انطوائي'],
      characteristics: ['محب للعائلة', 'حماية', 'خيالي', 'ذاكرة قوية', 'عميق المشاعر']
    },
    colors: ['#87CEEB', '#4682B4'],
    description: 'برج السرطان يتميز بالعاطفة والحنان، أصحابه محبون للعائلة ولديهم حدس قوي.'
  },
  leo: {
    name: 'الأسد',
    nameEn: 'leo',
    symbol: '♌',
    element: 'النار',
    startDate: '07-23',
    endDate: '08-22',
    traits: {
      positive: ['كريم', 'واثق', 'مسلي', 'قوي', 'مبدع'],
      negative: ['متكبر', 'عنيد', 'دراماتيكي', 'مهيمن', 'متمركز حول الذات'],
      characteristics: ['محب للأضواء', 'ملكي', 'مؤثر', 'منظم', 'طاقة إيجابية']
    },
    colors: ['#FFD700', '#FF8C00'],
    description: 'برج الأسد ملك الأبراج، يتميز أصحابه بالثقة والكرم وحب الظهور والإبداع.'
  },
  virgo: {
    name: 'العذراء',
    nameEn: 'virgo',
    symbol: '♍',
    element: 'الأرض',
    startDate: '08-23',
    endDate: '09-22',
    traits: {
      positive: ['منظم', 'دقيق', 'مفيد', 'عملي', 'متواضع'],
      negative: ['ناقد', 'قلق', 'كثير التفكير', 'محرج', 'صعب الإرضاء'],
      characteristics: ['محب للكمال', 'تحليلي', 'خدوم', 'عقلاني', 'مسؤول']
    },
    colors: ['#9ACD32', '#6B8E23'],
    description: 'برج العذراء يتميز بالدقة والتنظيم، أصحابه محبون للكمال ومساعدة الآخرين.'
  },
  libra: {
    name: 'الميزان',
    nameEn: 'libra',
    symbol: '♎',
    element: 'الهواء',
    startDate: '09-23',
    endDate: '10-22',
    traits: {
      positive: ['عادل', 'دبلوماسي', 'مسالم', 'أنيق', 'اجتماعي'],
      negative: ['متردد', 'سطحي', 'كسول', 'معتمد على الآخرين', 'مراوغ'],
      characteristics: ['محب للجمال', 'متوازن', 'رومانسي', 'فني', 'صانع سلام']
    },
    colors: ['#FFB6C1', '#DDA0DD'],
    description: 'برج الميزان يسعى للعدالة والتوازن، أصحابه محبون للجمال والسلام والعلاقات المتناغمة.'
  },
  scorpio: {
    name: 'العقرب',
    nameEn: 'scorpio',
    symbol: '♏',
    element: 'الماء',
    startDate: '10-23',
    endDate: '11-21',
    traits: {
      positive: ['قوي الإرادة', 'شجاع', 'مخلص', 'حدسي', 'عاطفي'],
      negative: ['غيور', 'انتقامي', 'كتوم', 'مسيطر', 'متشكك'],
      characteristics: ['غامض', 'عميق', 'متحول', 'قوي', 'محقق']
    },
    colors: ['#8B0000', '#800080'],
    description: 'برج العقرب من أقوى الأبراج، يتميز أصحابه بالغموض والقوة العاطفية والإرادة الصلبة.'
  },
  sagittarius: {
    name: 'القوس',
    nameEn: 'sagittarius',
    symbol: '♐',
    element: 'النار',
    startDate: '11-22',
    endDate: '12-21',
    traits: {
      positive: ['متفائل', 'مغامر', 'صريح', 'فلسفي', 'حر'],
      negative: ['متهور', 'عديم الصبر', 'مبذر', 'غير مسؤول', 'متسرع'],
      characteristics: ['محب للسفر', 'باحث عن الحقيقة', 'محب للحرية', 'متعلم', 'مرح']
    },
    colors: ['#800080', '#4B0082'],
    description: 'برج القوس محب للحرية والمغامرة، أصحابه متفائلون ويحبون استكشاف العالم والفلسفة.'
  },
  capricorn: {
    name: 'الجدي',
    nameEn: 'capricorn',
    symbol: '♑',
    element: 'الأرض',
    startDate: '12-22',
    endDate: '01-19',
    traits: {
      positive: ['منضبط', 'طموح', 'مسؤول', 'صبور', 'عملي'],
      negative: ['متشائم', 'صلب', 'باردة المشاعر', 'انتهازي', 'مهووس بالعمل'],
      characteristics: ['محب للنجاح', 'منظم', 'تقليدي', 'قائد', 'محافظ']
    },
    colors: ['#2F4F4F', '#556B2F'],
    description: 'برج الجدي يتميز بالطموح والانضباط، أصحابه محبون للنجاح والمسؤولية والتنظيم.'
  },
  aquarius: {
    name: 'الدلو',
    nameEn: 'aquarius',
    symbol: '♒',
    element: 'الهواء',
    startDate: '01-20',
    endDate: '02-18',
    traits: {
      positive: ['مبدع', 'مستقل', 'إنساني', 'ذكي', 'أصيل'],
      negative: ['منعزل', 'عنيد', 'متمرد', 'غير عاطفي', 'غير منتظم'],
      characteristics: ['محب للتجديد', 'مفكر', 'اجتماعي', 'متحرر', 'صديق مخلص']
    },
    colors: ['#00CED1', '#20B2AA'],
    description: 'برج الدلو مبدع ومتحرر، أصحابه محبون للتجديد والإنسانية ولديهم أفكار مبتكرة.'
  },
  pisces: {
    name: 'الحوت',
    nameEn: 'pisces',
    symbol: '♓',
    element: 'الماء',
    startDate: '02-19',
    endDate: '03-20',
    traits: {
      positive: ['حساس', 'فني', 'رحيم', 'حدسي', 'متفهم'],
      negative: ['حالم', 'هارب من الواقع', 'ضعيف الإرادة', 'فوضوي', 'متشائم'],
      characteristics: ['خيالي', 'روحاني', 'مبدع', 'متعاطف', 'غامض']
    },
    colors: ['#7B68EE', '#9370DB'],
    description: 'برج الحوت حساس وفني، أصحابه حالمون ومبدعون ولديهم حدس قوي وطبيعة روحانية.'
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
