import type { Project } from '../types/content';

// Gerçek proje içeriği buraya. CorteQS öne çıkan proje olarak işaretli.
export const projects: Project[] = [
  {
    slug: 'corteqs',
    name: 'CorteQS',
    summary:
      'Şehir, sektör ve güven temelli bağlantılarla global Türk diasporasını organize eden yeni nesil dijital ekosistem.',
    description:
      'CorteQS; profesyonelleri, girişimcileri, yatırımcıları ve toplulukları aynı altyapıda sistematik biçimde bir araya getirir. Şehir bazlı yapılanma modeli, diaspora dinamiği ve topluluk odaklı yapısı sayesinde güçlü bir network-effect ekonomisi oluşturmayı hedefler.',
    tags: ['Dijital Ekosistem', 'Network', 'Topluluk', 'Diaspora'],
    featured: true,
  },
  // Yeni proje eklemek için bu diziye yeni bir nesne ekleyin.
];
