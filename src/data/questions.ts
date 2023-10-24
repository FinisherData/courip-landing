import type IQuestion from '@/types/question';

const questions: Array<IQuestion> = [
  {
    id: 1,
    question: '¿Qué es Courip?',
    answer:
      'Es un proyecto diseñado con la finalidad de simplificar la vida de los estudiantes universitarios al proporcionar una plataforma que les permita comprar y recibir productos de manera rápida y segura, aprovechando la comunidad estudiantil como red de repartidores delivery. La aplicación se enfoca en ofrecer comodidad y confianza, brindando una solución eficaz para las necesidades cotidianas de los estudiantes en su entorno universitario.',
    isOpen: false,
  },
  {
    id: 2,
    question: '¿Cómo funciona Courip?',
    answer:
      'Courip funciona de la siguiente manera: Usamos la comunidad estudiantil como red de repartidores delivery, los cuales pueden registrarse en la aplicación y empezar a ganar dinero repartiendo productos a sus compañeros de universidad.',
    isOpen: false,
  },
  {
    id: 3,
    question: '¿Cómo puedo ser un repartidor?',
    answer:
      'Al descargar la aplicación, puedes registrarte como repartidor y empezar a ganar dinero repartiendo productos a tus compañeros de universidad.',
    isOpen: false,
  },
  {
    id: 4,
    question: '¿Por qué elegir Courip?',
    answer:
      'Courip es la mejor opción para los estudiantes universitarios, ya que les permite comprar y recibir productos de manera rápida y segura, aprovechando la comunidad estudiantil como red de repartidores delivery.',
    isOpen: false,
  },
  {
    id: 5,
    question: '¿En qué universidades esta disponible?',
    answer:
      'Actualmente solo se puede usar en la Universidad Peruana De Ciencias Aplicadas (UPC) Sede Monterrico, pero estamos trabajando para expandirnos a otros campus y universidades.',
    isOpen: false,
  },
];

export default questions;
