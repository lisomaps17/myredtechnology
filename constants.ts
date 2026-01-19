import { Combo } from './types';

export const WHATSAPP_NUMBER = '5493426260141';

// Image Assets
export const IMAGES = {
  // New luxury background provided by user
  HEADER_BG: "https://images.unsplash.com/photo-1621814374283-57cc5d0d39c2?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  // Logo provided previously
  LOGO: "https://i.ibb.co/CKV7dqTZ/myredsin.png", 
  // Specific Unsplash Images for Combos
  GENERIC_MASCULINE: "https://images.unsplash.com/photo-1598121496608-3d0b9627155e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  GENERIC_FEMININE: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

// Combos Data
export const COMBOS: Combo[] = [
  {
    id: 'm1',
    title: 'COMBO 1',
    category: 'MASCULINO',
    image: IMAGES.GENERIC_MASCULINE,
    items: [
      { name: 'AL HARAMAIN AMBER OUD GOLD EDITION EDP 120ML', price: '$72.000' },
      { name: 'AFNAN 9AM DIVE EDP 150ML', price: '$62.000' },
      { name: 'ARMAF ODYSSEY MANDARIN SKY EDP 100ML', price: '$37.200' },
      { name: 'LATTAFA KHAMRAH QAHWA EDP 100ML', price: '$30.200' },
      { name: 'LATTAFA ASAD BOURBON EDP 100ML', price: '$37.800' },
      { name: 'RASASI HAWAS ICE EDP 100ML', price: '$60.000' },
      { name: 'BHARARA KING EDP 100ML', price: '$71.000' },
      { name: 'ARMAF CLUB DE NUIT INTENSE MAN EDT 105ML', price: '$47.000' }
    ]
  },
  {
    id: 'f1',
    title: 'COMBO 1',
    category: 'FEMENINO',
    image: IMAGES.GENERIC_FEMININE,
    items: [
      { name: 'ORIENTICA AMBER ROUGE (RED) EDP 80ML', price: '$93.300' },
      { name: 'LATTAFA YARA ELIXIR EDP 100ML', price: '$54.300' },
      { name: 'LATTAFA YARA (ROSA) EDP 100ML', price: '$30.600' },
      { name: 'VICTORIA SECRET BODY SPLASH 250ML A ELECCION', price: '$26.000' },
      { name: 'BHARARA NICHE FEMME EDP 100ML', price: '$70.000' },
      { name: 'ARMAF CLUB DE NUIT WOMEN EDP 105ML', price: '$38.500' },
      { name: 'LATTAFA QAED AL FURSAN UNLIMITED (BRANCO) 90ML', price: '$19.000' }
    ]
  }
];